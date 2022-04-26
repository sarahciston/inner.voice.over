import os
from pymongo import MongoClient
from bson.objectid import ObjectId
import datetime

SCALINGO_MONGO_URL=os.environ.get('SCALINGO_MONGO_URL')

client = MongoClient(SCALINGO_MONGO_URL, tlsCAFile='src/ca.pem')

mydb = client['ivo']
# print(client.list_database_names())

coll = mydb['phrases']
# print(mydb.list_collection_names())


print('Connected to mongodb on scalingo')

# GET QUERY SEARCH

def getAll():  
  x = coll.find()
  data = []
  for r in x:
    data.append(r)
  return data
    
def queryId(p):
  x = coll.find_one(p)
  print(x)
  # obj = ObjectId(p)
  # x = coll.find_one(obj)
  # query = {'_id':  p}
  return x

def queryText(p):
  query = {'text':  p}
  x = coll.find(query)
  return x


# INSERT
# insert entire datastructure from client
def insertEntry(p):
  x = coll.insert_one(p)
  return x.inserted_id

# # insert text only from client, provides datastructure serverside
# def insertOne(p):
#   entry = {
#     "_id": datetime.datetime.now().timestamp(),
#     "text": p,
#     "createdAt": datetime.datetime.now().isoformat(),
#     "machineGenerated": False
#   }
#   x = coll.insert_one(entry)
#   return x.inserted_id

# BULK
def insertMany(list):
  x = coll.insert_many(list)
  return x.inserted_ids


# DELETE
def deleteOne(p):
  # obj = ObjectId(p)
  # entry = {'_id': obj}
  x = coll.delete_one(p)
  return 'confirmed delete?'
