from fastapi import APIRouter
from models import Staff 
from database import staff_collection
from bson import ObjectId
staff_router=APIRouter(prefix="/staff",tags=["staff"])
@staff_router.get("/getStaffs")
def getStaffs():
    return "get staff method called"
@staff_router.post("/addstaff")
def addstaff():
    return "add staff method called"


@staff_router.delete("/deletestaff/{stuid}")
def deletestaff(stuid:str):
    result=staff_collection.delete_one({"_id":ObjectId(stuid)})
    return "staff deleted success"


@staff_router.put("/updatestaff/{stuid}")
def updatestaff(stuid:str,stu:Staff):
    result=staff_collection.update_one({
        {"_id":ObjectId(stuid)},
        {"$set":stu.model_dump()}
        })
    return "staff updated success"