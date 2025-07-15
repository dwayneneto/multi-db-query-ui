# from pymongo import MongoClient
# import os
# from dotenv import load_dotenv
# load_dotenv()

# MONGO_URI = os.getenv("MONGODB_URI")
# MONGO_DB = os.getenv("MONGODB_DATABASE")

# client = MongoClient(MONGO_URI)
# db = client[MONGO_DB]

# def run_mongo_query(collection_name, query_dict):
#     collection = db[collection_name]
#     results = list(collection.find(query_dict))
#     return results

from pymongo import MongoClient
import os
import certifi

def run_mongo_query(collection_name, query_dict):
    from bson import ObjectId  # Needed to handle _id
    uri = os.getenv("MONGODB_URI")
    db_name = os.getenv("MONGODB_DATABASE")

    try:
        client = MongoClient(uri, tls=True, tlsCAFile=certifi.where())
        db = client[db_name]
        collection = db[collection_name]
        result = list(collection.find(query_dict))

        # Convert ObjectId to string for all documents
        for doc in result:
            if "_id" in doc and isinstance(doc["_id"], ObjectId):
                doc["_id"] = str(doc["_id"])
        return result
    except Exception as e:
        raise Exception(f"MongoDB Query Error: {e}")


