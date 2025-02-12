from flask import Flask, request, jsonify
from flask_cors import CORS
from model import db, User, Order  # Import Order model (assumed to exist)
import jwt
import datetime
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Configure the app to use SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

SECRET_KEY = os.getenv('SECRET_KEY', 'your_secret_key')

@app.route('/', methods=['GET'])
def welcome():
    return jsonify({'message': 'Welcome to the Maison Okapi website!'}), 200

@app.route('/api/signin', methods=['POST'])
def signin():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if user and user.check_password(password):
        token = jwt.encode(
            {'user_id': user.id, 'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)},
            SECRET_KEY,
            algorithm='HS256'
        )
        return jsonify({'message': 'Sign in successful!', 'token': token}), 200
    else:
        return jsonify({'error': 'Invalid credentials'}), 401

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({'error': 'Username, email, and password are required!'}), 400

    if User.query.filter_by(username=username).first():
        return jsonify({'error': 'User with this username already exists'}), 400

    new_user = User(username=username, email=email)
    new_user.set_password(password)

    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'User registered successfully!', 'user': {'username': username, 'email': email}}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': 'Failed to create user: ' + str(e)}), 500

# 🔹 New Route: Fetch Order History
@app.route('/api/order-history', methods=['GET'])
def order_history():
    auth_header = request.headers.get('Authorization')

    if not auth_header or not auth_header.startswith('Bearer '):
        return jsonify({'error': 'Missing or invalid token'}), 401

    token = auth_header.split(' ')[1]

    try:
        decoded_token = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
        user_id = decoded_token['user_id']

        # Query orders from the database (assuming an Order model exists)
        orders = Order.query.filter_by(user_id=user_id).all()

        # Convert orders to JSON
        orders_list = [
            {'order_id': order.id, 'item': order.item, 'price': order.price, 'status': order.status}
            for order in orders
        ]

        return jsonify({'orders': orders_list}), 200
    except jwt.ExpiredSignatureError:
        return jsonify({'error': 'Token expired'}), 401
    except jwt.InvalidTokenError:
        return jsonify({'error': 'Invalid token'}), 401

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
