import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from models.detector import predict
from utils.preprocessing import clean_text

def detect_campaign(text: str) -> str:
    cleaned = clean_text(text)
    return predict(cleaned)
