from flask import Flask, request, jsonify
from flask_cors import CORS
from model import db, User
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

    # Query for the user by username
    user = User.query.filter_by(username=username).first()

    # Check if user exists and password matches
    if user and user.check_password(password):
        # Generate a JWT token
        token = jwt.encode(
            {
                'user_id': user.id,
                'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
            },
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
    password = data.get('password')

    # Check if the username already exists
    if User.query.filter_by(username=username).first():
        return jsonify({'error': 'User with this username already exists'}), 400

    new_user = User(username=username)
    new_user.set_password(password)

    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'User registered successfully!', 'user': {'username': username}}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': 'Failed to create user: ' + str(e)}), 500

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
