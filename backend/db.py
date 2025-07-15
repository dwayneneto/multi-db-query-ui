import mysql.connector
import os
from dotenv import load_dotenv
load_dotenv()

# def run_sql(query):
#     conn = mysql.connector.connect(
#         host=os.getenv("MYSQL_HOST"),
#         user=os.getenv("MYSQL_USER"),
#         password=os.getenv("MYSQL_PASSWORD"),
#         database=os.getenv("MYSQL_DATABASE")
#     )
#     cursor = conn.cursor()
#     cursor.execute(query)
#     rows = cursor.fetchall()
#     columns = [desc[0] for desc in cursor.description]
#     cursor.close()
#     conn.close()
#     return {"columns": columns, "rows": rows}

# def run_sql(query):
#     import mysql.connector
#     import os
#     from dotenv import load_dotenv
#     load_dotenv()

#     conn = mysql.connector.connect(
#         host=os.getenv("MYSQL_HOST"),
#         user=os.getenv("MYSQL_USER"),
#         password=os.getenv("MYSQL_PASSWORD"),
#         database=os.getenv("MYSQL_DATABASE")
#     )
#     cursor = conn.cursor()
#     cursor.execute(query)

#     # Safely check for SELECT query
#     if query.strip().lower().startswith("select"):
#         rows = cursor.fetchall()
#         columns = [desc[0] for desc in cursor.description]
#         result = {"columns": columns, "rows": rows}
#     else:
#         conn.commit()
#         result = {"columns": [], "rows": [["✅ Success"]]}  # Confirm write success

#     cursor.close()
#     conn.close()
#     return result

def run_sql(query):
    import mysql.connector
    import os
    from dotenv import load_dotenv
    load_dotenv()

    conn = mysql.connector.connect(
        host=os.getenv("MYSQL_HOST"),
        user=os.getenv("MYSQL_USER"),
        password=os.getenv("MYSQL_PASSWORD"),
        database=os.getenv("MYSQL_DATABASE")
    )

    cursor = conn.cursor()
    try:
        cursor.execute(query)

        # If it's a SELECT or SHOW query
        if query.strip().lower().startswith(("select", "show", "describe")):
            rows = cursor.fetchall()
            columns = [desc[0] for desc in cursor.description]
            result = {"columns": columns, "rows": rows}
        else:
            conn.commit()
            result = {"columns": [], "rows": [["✅ Success"]]}

    except Exception as e:
        result = {"error": str(e)}
    
    finally:
        cursor.close()
        conn.close()

    return result

