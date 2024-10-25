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

    user = User.query.filter_by(username=username, email=email).first()
    
    if user and user.password == password:  
        return jsonify({'message': 'Sign in successful!', 'user': {'username': user.username}}), 200
    else:
        return jsonify({'error': 'Invalid credentials'}), 401


if __name__ == '__main__':
    with app.app_context():
        db.create_all()  
    app.run(debug=True)