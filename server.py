from flask import Flask, request, render_template, redirect, flash, jsonify, url_for, send_from_directory
from flask import session
from flask_debugtoolbar import DebugToolbarExtension
from sqlalchemy import update, delete, exc
import os


app = Flask(__name__)

app.secret_key = "###"



##############################################################################

if __name__ == "__main__":
    app.debug = True

    connect_to_db(app)

    # only run this once (on reload if in debug, or normal load if not debug)
    if not app.debug or os.environ.get("WERKZEUG_RUN_MAIN") == "true":
        install_alerts_daemon()

    app.run()

    # To use the DebugToolbar, uncomment below:
    # DebugToolbarExtension(app)