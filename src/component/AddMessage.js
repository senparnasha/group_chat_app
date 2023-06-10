import { Card, CardContent } from "@mui/material";
import React from "react";
import "./AddMessage.css"
import { forwardRef } from "react";


const AddMessage= forwardRef(({message,username},ref) =>{
const isUser=username===message.username
let x = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(message.timestamp);
console.log(message)
  return (
    <div ref={ref}   className={`message ${isUser && 'message_user'} `}>
      <div className="time-design">{x}</div>
    <Card className={isUser ? 'message_userCard': 'message_guestCard'} >
          <CardContent >
            <div color= {isUser ? 'white': "#4d4d4d"} variant="h5" component="h2">
           {!isUser && `${message.username || 'Unknown User'}:`}  {message.message}
            </div>
          </CardContent>
        </Card>
        </div>
  )})

export default AddMessage;
