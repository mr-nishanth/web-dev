from flask import Flask, request, jsonify
from sqlite3 import Connection as SQLite3Connection
from sqlalchemy import event
from sqlalchemy.engine import Engine
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

# Application
app = Flask(__name__)

# Database
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///sqlite.file"
app.config["SQL_TRACK_MODIFICATION"] = 0
# SQLALCHEMY OOPS <-> SQL


# configure sqlite3 to enforce foreign key constraints
@event.listen_for(Engine, "connect")
def _set_sqlite_pragma(dbapiConnection, connectionRecord):
    if isinstance(dbapiConnection, SQLite3Connection):
        cursor = dbapiConnection.cursor()
        cursor.execute("PRAGMA foreign key = ON")
        cursor.close()


# model
class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    email = db.Column(db.String(50))
    address = db.Column(db.String(200))
    phone = db.Column(db.String(50))
    posts = db.relationship("BlogPost")
