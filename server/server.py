#!/usr/bin/env python

"""
This script starts a simple Flask server that manages a todo list.
It uses flask_restful to deal with REST API.
"""

from flask import Flask
from flask_cors import CORS
from flask_restful import Resource, Api, reqparse

# server state
todos = []


class TodoList(Resource):
    """Todo list CRUD resource."""

    def get(self):
        return todos

    def post(self):
        args = parser.parse_args()
        todos.append(args["todo"])
        return (todos, 201)

    def delete(self):
        args = parser.parse_args()
        idx_to_remove = int(args["todo"])
        del todos[idx_to_remove]
        return (todos, 201)


if __name__ == "__main__":
    # build Flask instance with REST and CORS support
    app = Flask(__name__)
    api = Api(app)
    CORS(app)

    # configure request parser and server routes
    parser = reqparse.RequestParser()
    parser.add_argument("todo")
    api.add_resource(TodoList, "/", "/todos")

    # start server
    app.run(debug=True)
