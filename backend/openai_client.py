# 

from openai import OpenAI
import os
import json
from dotenv import load_dotenv
load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def prompt_to_sql(prompt, schema=""):
    messages = [
        {"role": "system", "content": "You are a helpful assistant that writes safe SQL queries."},
        {"role": "user", "content": f"Schema: {schema}"},
        {"role": "user", "content": f"Prompt: {prompt}"}
    ]
    res = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages,
        temperature=0
    )
    return res.choices[0].message.content.strip()

def get_sql_from_prompt(prompt, schema=""):
    messages = [
        {"role": "system", "content": f"You are an assistant that translates user questions into SQL queries. Schema: {schema}"},
        {"role": "user", "content": prompt}
    ]
    res = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
    return res.choices[0].message.content.strip()

def get_mongo_from_prompt(prompt, schema=""):
    messages = [
        {"role": "system", "content": f"You are an assistant that writes MongoDB queries based on prompts. Schema: {schema}. Always respond in JSON with keys: collection and query."},
        {"role": "user", "content": prompt}
    ]
    res = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
    return json.loads(res.choices[0].message.content.strip())
