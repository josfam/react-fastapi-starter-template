"""Backend application entry point"""

from fastapi import FastAPI, status
from fastapi.responses import JSONResponse
from contextlib import asynccontextmanager
from backend.storage.database import db_init, close_db

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifespan context manager."""
    db_init()
    yield
    close_db()

app = FastAPI(lifespan=lifespan)


@app.get("/", status_code=status.HTTP_200_OK)
def root():
    """Root endpoint"""
    return JSONResponse(content={"message": "Backend is running!"})

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("run:app", host="0.0.0.0", port=8000, reload=True)
