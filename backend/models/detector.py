# Simple rule-based + keyword detector (placeholder for ML model)
ANTI_INDIA_KEYWORDS = ["boycott india", "anti-india", "down with india"]

def predict(text: str) -> str:
    lowered = text.lower()
    if any(word in lowered for word in ANTI_INDIA_KEYWORDS):
        return "Potential Anti-India Campaign"
    return "Normal"
