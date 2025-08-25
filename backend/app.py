from fastapi import FastAPI
from pydantic import BaseModel
from services.detection_service import detect_campaign

app = FastAPI(title="Anti-India Campaign Detector API")

class TextRequest(BaseModel):
    text: str

@app.post("/detect")
async def detect(request: TextRequest):
    result = detect_campaign(request.text)
    return {"input": request.text, "prediction": result}
