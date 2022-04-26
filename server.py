from flask import Flask, Response, request, render_template, jsonify, url_for, redirect
from markupsafe import escape
import json

import database

app = Flask(__name__)

# MONGO API

@app.route('/api/all')
def getAll():
  phrases = database.getAll() 
  phrases = {"data": phrases}
  return jsonify(phrases)
  
@app.route('/api/one', methods=["GET"])
def getItem():
  _id = request.args.get('_id')
  res = database.queryId(_id)
  return jsonify(res)


@app.route('/api/new', methods=["POST"]) #"GET" also?
def newItem():
  entry = request.get_json()
  # entry = request.args.get('entry')
  print(entry)
  res = database.insertEntry(entry)
  res = {"data": res}
  print(res)
  return jsonify(res)
  # return Response
  

@app.route('/api/import')
def importData():
  file = request.args.get('file')
  f = open(file)
  data = json.load(f)
  res = database.insertMany(data)
  return jsonify(res)
  
@app.route('/api/delete')
def deleteOne():
  res = database.deleteOne()
  # database.deleteMany()
  return jsonify(res)

  
# VIEWS  
@app.route('/')
def index():
    """Displays the homepage."""
    # phrases = database.getAll() 
    # phrases = {"data": phrases}
    # return jsonify(phrases)
    # return render_template('index.html', phrases=phrases)
    return render_template('index.html')
  

if __name__ == "__main__":
  app.run()