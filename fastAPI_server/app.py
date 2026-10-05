from fastapi import FastAPI

from routes.student import student_router
from routes.staff import staff_router
app=FastAPI()
app.include_router(student_router)
app.include_router(staff_router)