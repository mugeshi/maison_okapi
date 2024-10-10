from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()  # Initialize SQLAlchemy

class User(db.Model):
    __tablename__ = 'users'  

    id = db.Column(db.Integer, primary_key=True)  # Primary key
    username = db.Column(db.String(80), unique=True, nullable=False)  # Unique username
    email = db.Column(db.String(120), unique=True, nullable=False)  # Unique email
    password = db.Column(db.String(200), nullable=False)  # Hashed password

    def set_password(self, password):
        self.password = generate_password_hash(password)  # Hash the password

    def check_password(self, password):
        return check_password_hash(self.password, password)  # Check the hashed password
