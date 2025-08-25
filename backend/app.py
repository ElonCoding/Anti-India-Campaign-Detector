from fastapi import FastAPI
from pydantic import BaseModel
from .Services.detection_service import detect_campaign

app = FastAPI(title="Anti-India Campaign Detector API")

class TextRequest(BaseModel):
    text: str

@app.post("/detect")
async def detect(request: TextRequest):
    result = detect_campaign(request.text)
    return {"input": request.text, "prediction": result}

class SearchRequest(BaseModel):
    query: str

@app.post("/search")
async def search(request: SearchRequest):
    # This is a mock implementation. In a real scenario, this would involve web scraping or a database search.
    mock_slogans = [
        {"slogan": "India is a threat to regional peace.", "source": "Mock Source 1"},
        {"slogan": "Boycott Indian products.", "source": "Mock Source 2"},
        {"slogan": "Kashmir is not part of India.", "source": "Mock Source 3"},
        {"slogan": "Indian government is oppressive.", "source": "Mock Source 4"},
        {"slogan": "Free Kashmir from Indian occupation.", "source": "Mock Source 5"},
    ]
    
    # Filter mock slogans based on query (case-insensitive)
    filtered_slogans = [slogan for slogan in mock_slogans if request.query.lower() in slogan["slogan"].lower()]

    return filtered_slogans
