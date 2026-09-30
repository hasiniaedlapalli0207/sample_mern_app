from fastapi import FastAPI
from pydantic import BaseModel

class Student(BaseModel):
    name:str
    email:str
    age:int
    marks:float


app=FastAPI()
@app.get("/getStudents")
def getStudents():
    return "get students api called"
@app.post("/register")
def register(Stu:Student):
    return Stu




@app.put("/update")
def update():
    return "update api is called"
@app.delete("/delete")
def delete():
    return "delete api is called"



@app.get("/getStudentsDet/{userid}")
def getStudentsDet(userid:int):
    return {"user_id":userid}

@app.get("/getStudentsdetails")
def getstudentsdetails(page:int=1,limit:int=10):
    return {"page":page,"limit":limit}
