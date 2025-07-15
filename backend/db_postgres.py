import psycopg2
import os
from dotenv import load_dotenv
load_dotenv()

def run_postgres_query(query):
    conn = psycopg2.connect(
        host=os.getenv("POSTGRES_HOST"),
        port=os.getenv("POSTGRES_PORT"),
        user=os.getenv("POSTGRES_USER"),
        password=os.getenv("POSTGRES_PASSWORD"),
        dbname=os.getenv("POSTGRES_DATABASE")
    )
    cursor = conn.cursor()
    cursor.execute(query)

    if query.strip().lower().startswith("select"):
        rows = cursor.fetchall()
        columns = [desc[0] for desc in cursor.description]
        result = {"columns": columns, "rows": rows}
    else:
        conn.commit()
        result = {"columns": [], "rows": [["✅ Success"]]}

    cursor.close()
    conn.close()
    return result
