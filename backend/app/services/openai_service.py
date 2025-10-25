import os
import openai
import asyncio

openai.api_key = os.getenv("OPENAI_API_KEY")

async def get_financial_advice(user_message, history):
    # System prompt ensures the chatbot focuses on finance
    messages = [
        {"role": "system", "content": "You are a helpful financial advisor. Provide clear, safe, and professional financial advice. Include budgeting, investment, and personal finance guidance."}
    ] + history + [{"role": "user", "content": user_message}]

    response = await openai.ChatCompletion.acreate(
        model="gpt-4-turbo",
        messages=messages,
        temperature=0.7
    )
    return response.choices[0].message['content']
