# Anti-India Campaign Slogan Detector

A web application that detects and displays anti-India campaign slogans from various sources across the web.

## 🚀 Quick Start

Follow these steps to get the application running locally.

## Prerequisites

- Python 3.8 or higher
- Node.js and npm (for frontend development)
- Git

## 📦 Installation & Setup

### Step 1: Backend Setup

#### Install Python Dependencies
```bash
cd backend
pip install -r requirements.txt
```

#### Set Up Environment Variables
Create a `.env` file in the backend directory:
```bash
cd backend
echo "SERP_API_KEY=your_serp_api_key_here" > .env
```

Get your SERP API key from [SerpApi](https://serpapi.com/)

#### Run the Backend Server
```bash
cd backend
python -m uvicorn app:app --host 0.0.0.0 --port 8001 --reload
```

The backend server will start at: `http://localhost:8001`

### Step 2: Frontend Setup

#### Option A: Simple HTTP Server (Recommended)
```bash
# From project root directory
python -m http.server 8000
```

The frontend will be available at: `http://localhost:8000`

#### Option B: Development Server
```bash
cd frontend
npm install
npm start
```

## 🔗 Connecting Frontend to Backend

The frontend is pre-configured to connect to the backend. The connection works through:

### API Configuration
- **Backend URL**: `http://127.0.0.1:8001` (configured in `script.js`)
- **CORS**: Enabled for frontend origins
- **Endpoints**: `/search` (POST) for slogan detection

### Testing the Connection

1. **Start Backend**: Ensure backend runs on port 8001
2. **Start Frontend**: Ensure frontend runs on port 8000  
3. **Test**: Open `http://localhost:8000` and search for slogans

## 🧪 Quick Test Commands

### Test Backend API
```bash
curl -X POST http://localhost:8001/search \
  -H "Content-Type: application/json" \
  -d '{"query": "test search"}'
```

### Test Frontend Connection
- Open browser to `http://localhost:8000`
- Enter search term like "india campaign"
- Check results display or popup appears

## 🐳 Docker Setup (Alternative)

```bash
docker-compose up --build
```

## 📁 Project Structure
```
├── backend/          # FastAPI backend
├── frontend/         # React frontend (optional)
├── index.html        # Main HTML file
├── script.js         # Frontend JavaScript
├── style.css         # Frontend styles
└── README.md         # This file
```

## 🔧 Troubleshooting

### Common Issues
1. **Port conflicts**: Change ports in commands
2. **CORS errors**: Check CORS configuration
3. **Module errors**: Install dependencies
4. **API key issues**: Verify .env file

### Debug Commands
```bash
# Check backend logs
python -m uvicorn app:app --reload --log-level debug

# Check frontend
python -m http.server 8000
```

## 📱 Usage
1. Start backend: `python -m uvicorn backend.app:app --port 8001`
2. Start frontend: `python -m http.server 8000`
3. Open: `http://localhost:8000`
4. Search: Enter keywords to find anti-India slogans

## 🆘 Support
For issues, check troubleshooting or open GitHub issues.
