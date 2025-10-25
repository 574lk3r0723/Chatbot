from fastapi import APIRouter
from pydantic import BaseModel
from app.services.openai_service import get_financial_advice
from app.utils.memory import conversation_memory

router = APIRouter(prefix="/chat", tags=["chat"])

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    reply: str

@router.post("/", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    # Retrieve conversation history
    history = conversation_memory.get("history", [])
    user_message = request.message

    # Get reply from OpenAI
    reply = await get_financial_advice(user_message, history)

    # Save messages to memory
    history.append({"role": "user", "content": user_message})
    history.append({"role": "assistant", "content": reply})
    conversation_memory["history"] = history

    return {"reply": reply}
