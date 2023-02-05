from flask import Flask, request
from flask_cors import CORS
from flaskext.mysql import MySQL
from dotenv import load_dotenv

import pymysql
import os

# Load environment variables
load_dotenv()
app = Flask(__name__)
CORS(app)


# MySQL configurations
mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'root'
# app.config['MYSQL_DATABASE_PASSWORD'] = os.getenv('MYSQL_DATABASE_PASSWORD')
app.config['MYSQL_DATABASE_DB'] = 'wandr'
app.config['MYSQL_DATABASE_HOST'] = '127.0.0.1'
mysql.init_app(app)

# Create a connection to the database
conn = mysql.connect()
cursor = conn.cursor(pymysql.cursors.DictCursor)

### Helper Functions
def checkEmpty(data):
    if not data:
        return ("404", 404)
    else:
        return data

def checkArgs(json, args):
    for arg in args:
        if arg not in json:
            return False
    return True

# Create a function to query the database
def query_db(query, args=()):
    cursor.execute(query, args)
    result = cursor.fetchall()
    return checkEmpty(result)

# Create a function to insert into the database
def insert_db(query, args=()):
    cursor.execute(query, args)
    conn.commit()




## API Endpoints ##
@app.route('/users', methods=['GET', 'POST', 'PUT', 'DELETE'])
def users():
    
    if request.method == 'GET':
        args = request.args
        if args.get("userID"):
            return query_db(f'SELECT * FROM users WHERE userID = {args.get("userID")}')
        return query_db('SELECT * FROM users')

    elif request.method == 'POST':
        args = request.json
        if args:
            if checkArgs(args, ["name", "email", "password"]):
                insert_db(f'INSERT INTO users (name, email, password) VALUES ("{args.get("name")}", "{args.get("email")}", "{args.get("password")}")')
                return ("200", 200)
            return ("400", 400)

        return ("400", 400)

@app.route('/users/<userID>', methods=['GET', 'PUT', 'DELETE'])
def user(userID):
    if request.method == 'GET':
        return query_db(f'SELECT * FROM users WHERE userID = {userID}')

    elif request.method == 'PUT':
        args = request.json
        if args:
            if checkArgs(args, ["name", "email", "password"]):
                insert_db(f'UPDATE users SET name = "{args.get("name")}", email = "{args.get("email")}", password = "{args.get("password")}" WHERE userID = {userID}')
                return ("200", 200)
            return ("400", 400)

        return ("400", 400)

    elif request.method == 'DELETE':
        insert_db(f'DELETE FROM users WHERE userID = {userID}')
        return ("200", 200)


@app.route('/users/login', methods=['GET'])
def login():
    args = request.args
    if args:
        if checkArgs(args, ["email", "password"]):
            return query_db(f'SELECT * FROM users WHERE email = "{args.get("email")}" AND password = "{args.get("password")}"')
        return ("400", 400)

    return ("400", 400)