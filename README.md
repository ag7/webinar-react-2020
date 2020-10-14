
## Overview

This repository contains the React application used for React 16 webinar, held in October 2020.

The webapp implements a simple todo list using some React 16 concepts:

* React Hooks (used in functional components)
* Context API (to manage todo list dark / light theme)
* Error boundaries (used to render a fallback UI in case an "error" todo is inserted)
* Fragments

There are other minor things you might be interested in:

* we use `apisauce` for REST calls, with some "functional" wrapping
* arrow function for classes public methods to avoid `bind` operations
* use of `async` / `await` to make API calls more "elegant"
* a simple Python Flask server that expose a CRUD approach in less than 50 lines of code

## Setup

The React app can be setup in the usual way:

* switch to `webinar-app` directory
* run `npm install`
* run `npm start`
* webapp starts on `localhost:3000` (browser tab is automatically opened)

Follow these step to setup the Flask server (make sure `python3` is available):

* switch to `server` directory
* create a Python virtualenv with `python3 -m venv .venv` (virtualenv directory is git-ignored)
* activate virtualenv with `source .venv/bin/activate`
* install requirements with `pip install -r requirements.txt`
* start server with `python server.py`
* Flask server should be up and running on `localhost:5000`

Note: you can trigger the React error boundary by adding an "error" todo.
