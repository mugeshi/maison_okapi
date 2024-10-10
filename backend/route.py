from flask import Flask, request, jsonify
from model import db, User  

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'  # Database URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  
db.init_app(app)  

# Create the database and the user table
with app.app_context():
    db.create_all()

# Route for user sign-in
@app.route('/api/signin', methods=['POST'])
def sign_in():
    data = request.json  # Get JSON data from the request
    username = data.get('username')
    password = data.get('password')

    
    user = User.query.filter_by(username=username).first()
    if user and user.check_password(password):
        return jsonify({"message": "Sign in successful!", "user_id": user.id}), 200
    else:
        return jsonify({"error": "Invalid username or password"}), 401

if __name__ == '__main__':
    app.run(debug=True)  # Run the Flask app in debug mode
