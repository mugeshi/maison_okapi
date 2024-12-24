from flask import Flask, request, jsonify
from flask_cors import CORS
from model import db, User  

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db' 
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  
db.init_app(app)  


@app.route('/', methods=['GET'])
def welcome():
    return jsonify({'message': 'Welcome to the Maison Okapi website!'}), 200


@app.route('/api/signin', methods=['POST'])
def signin():
    data = request.get_json()  # Get JSON data from the request

    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Query for the user by username and email
    user = User.query.filter_by(username=username, email=email).first()
    
    # Check if user exists and password matches
    if user and user.check_password(password):  
        return jsonify({'message': 'Sign in successful!', 'user': {'username': user.username}}), 200
    else:
        return jsonify({'error': 'Invalid credentials'}), 401


@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()
    if not data:
        return jsonify({'error': 'Invalid JSON payload'}), 400
    
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if User.query.filter((User.username == username) | (User.email == email)).first():
        return jsonify({'error': 'User with this username or email already exists'}), 400

    new_user = User(username=username, email=email)
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