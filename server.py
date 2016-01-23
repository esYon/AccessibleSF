from flask import Flask, request, render_template, redirect, flash, jsonify, url_for, send_from_directory
from flask import session
from flask_debugtoolbar import DebugToolbarExtension
from sqlalchemy import update, delete, exc
import os


app = Flask(__name__)

app.secret_key = "###"

@app.route("/", methods=["GET"])
def say_hello():
    return """ hihi """

##############################################################################

if __name__ == "__main__":
    app.debug = True

    app.run()

    # To use the DebugToolbar, uncomment below:
    # DebugToolbarExtension(app)
