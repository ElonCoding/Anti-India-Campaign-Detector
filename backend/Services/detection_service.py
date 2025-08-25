from models.detector import predict
from utils.preprocessing import clean_text

def detect_campaign(text: str) -> str:
    cleaned = clean_text(text)
    return predict(cleaned)
