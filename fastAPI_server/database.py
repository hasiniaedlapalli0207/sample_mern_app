from pymongo import MongoClient
import os

from dotenv import load_dotenv
load_dotenv()
Client =MongoClient(os.getenv("MONGO_URL"))
db=Client["vignan"]

student_collection=db["student"]
staff_collection=db["staff"]