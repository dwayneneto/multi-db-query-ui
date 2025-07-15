# from fastapi import FastAPI, Request
# from fastapi.middleware.cors import CORSMiddleware
# from db import run_sql
# from openai_client import prompt_to_sql
# from fastapi.responses import JSONResponse
# import traceback

# # ✅ Define FastAPI app before using it
# app = FastAPI()

# # ✅ CORS setup
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # ✅ POST route
# @app.post("/query")
# async def query_sql(req: Request):
#     try:
#         body = await req.json()
#         prompt = body.get("prompt")
#         schema = body.get("schema", "")
#         print("Prompt:", prompt)
#         print("Schema:", schema)

#         sql = prompt_to_sql(prompt, schema)
#         print("Generated SQL:", sql)

#         if not sql.lower().startswith("select"):
#             return {"error": "Only SELECT queries allowed for now."}

#         result = run_sql(sql)
#         return {"sql": sql, "result": result}

#     except Exception as e:
#         print("❌ Error:", str(e))
#         traceback.print_exc()
#         return JSONResponse(status_code=500, content={"error": str(e)})

# # ✅ GET route
# @app.get("/health")
# def health():
#     return {"status": "OK"}

# @app.post("/manual-query")
# async def manual_query(req: Request):
#     try:
#         body = await req.json()
#         sql = body.get("sql")
#         print("Running raw SQL:", sql)
#         result = run_sql(sql)
#         return {"result": result}
#     except Exception as e:
#         print("❌ Manual SQL Error:", str(e))
#         return {"error": str(e)}, 500

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from db import run_sql
from db_mongo import run_mongo_query
from db_postgres import run_postgres_query
#from openai_client import prompt_to_sql
from openai_client import get_sql_from_prompt

from openai_client import get_sql_from_prompt, get_mongo_from_prompt

from pydantic import BaseModel

class QueryRequest(BaseModel):
    prompt: str
    schema: str = ""  # optional


app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/health")
def health():
    return {"status": "OK"}

# --- MySQL Natural Prompt Query ---
# @app.post("/query")
# async def query_sql(req: Request):
#     body = await req.json()
#     prompt = body.get("prompt")
#     schema = body.get("schema", "")
    
#     try:
#         sql = prompt_to_sql(prompt, schema)
#         if not sql.lower().startswith("select"):
#             return {"error": "Only SELECT queries are allowed for safety."}
#         result = run_sql(sql)
#         return {"sql": sql, "result": result}
#     except Exception as e:
#         return {"error": str(e)}

@app.post("/query")
async def query_sql(req: Request):
    body = await req.json()
    prompt = body.get("prompt")
    schema = body.get("schema", "")
    
    try:
        sql = get_sql_from_prompt(prompt, schema)  # <- use correct function
        if not sql.lower().startswith("select"):
            return {"error": "Only SELECT queries are allowed for safety."}
        result = run_sql(sql)
        return {"sql": sql, "result": result}
    except Exception as e:
        return {"error": str(e)}


# --- MySQL Manual SQL Query ---
@app.post("/manual-query")
async def manual_sql(req: Request):
    body = await req.json()
    query = body.get("sql")
    try:
        result = run_sql(query)
        return {"sql": query, "result": result}
    except Exception as e:
        return {"error": str(e)}

# --- MongoDB Query ---
@app.post("/mongo-query")
async def mongo_query(req: Request):
    body = await req.json()
    collection = body.get("collection")
    query_dict = body.get("query", {})
    try:
        result = run_mongo_query(collection, query_dict)
        return {"collection": collection, "result": result}
    except Exception as e:
        return {"error": str(e)}

# --- PostgreSQL Query ---
@app.post("/postgres-query")
async def postgres_query(req: Request):
    body = await req.json()
    query = body.get("sql")
    try:
        result = run_postgres_query(query)
        return {"sql": query, "result": result}
    except Exception as e:
        return {"error": str(e)}

@app.post("/postgres-nl-query")
def postgres_nl_query(req: QueryRequest):
    try:
        sql = get_sql_from_prompt(req.prompt, req.schema)
        result = run_postgres_query(sql)
        return { "sql": sql, "result": result }
    except Exception as e:
        return { "error": str(e) }, 500

@app.post("/mongo-nl-query")
def mongo_nl_query(req: QueryRequest):
    try:
        mongo_result = get_mongo_from_prompt(req.prompt, req.schema)
        result = run_mongo_query(mongo_result["collection"], mongo_result["query"])
        return { "query": mongo_result["query"], "collection": mongo_result["collection"], "result": result }
    except Exception as e:
        return { "error": str(e) }, 500


