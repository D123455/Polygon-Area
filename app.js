import json
import boto3
dynamodb = boto3.resource('dynamodb')

def lambda_handler(event, context):
   
    if event["operation"] == "create":
        createdata(event["TableName"],event["KeySchema"],event["AttributeDefinitions"],event["ProvisionedThroughput"])
        print("created successfully")
    elif event["operation"] == "insert":
        putdata(event["tablename"],event["data"]) 
        print("inserted successfully")
    elif event["operation"] == "update":
        updatedata(event["tablename"],event["key"],event["new"],event["age"],event["return"])
        print("updated successfully")
    elif event["operation"] == "delete":
        deletedata(event["tablename"],event["key"])
        print("deleted successfully")
    elif event["operation"] == "showall":
        getalldata(event["tablename"]) 
        print("all data fetched")  
    elif event["operation"] == "show":
        getdata(event) 
        print("data fetched")      
    else:
        print("incorrect")
def createdata(table,key,AttributeDefinitions,ProvisionedThroughput):
        
        table = dynamodb.create_table(
        TableName=table,
        KeySchema=key,  
        AttributeDefinitions=AttributeDefinitions,
        ProvisionedThroughput=ProvisionedThroughput
        )
        

def putdata(table,data):
    table = dynamodb.Table(table) 
    table.put_item(
        Item=data
    )
def updatedata(tablename,key,new,age,re):
    table = dynamodb.Table(tablename) 
    resp = table.update_item( 
    Key=key,
    UpdateExpression=new, 
        ExpressionAttributeValues=age,
        ReturnValues=re
    )
def deletedata(table,key):
    table = dynamodb.Table(table) 
    resp = table.delete_item(
    Key=key
    )
def getalldata(table):
    table = dynamodb.Table(table) 
    resp=table.scan()
    print(resp['Items'])  
def getdata(table,sno,name):
    table = dynamodb.Table(event["tablename"]) 
    resp = table.get_item(
    Key=event["key"]
    )
    print(resp['Item'])