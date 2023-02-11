import React, { useEffect, useState } from 'react'
import { addDoc,collection,onSnapshot,query,serverTimestamp, where } from 'firebase/firestore'
import { auth, db } from '../firebase'
import '../styles/Chat.css'

function Chat(props) {
    const {room} = props
    const [newMessage,setNewMessage] = useState('')
    const messagesRef = collection(db,'messages')
    const [messages,setMessages] = useState([])

    useEffect(()=>{
        const queryRef = query(messagesRef,where('room','==',room))
        const unsuscribe = onSnapshot(queryRef,(snapShot)=>{
            let messages = [];
            snapShot.forEach((doc)=>{
                messages.push({...doc.data(),id: doc.id})
            })
            setMessages(messages)
        })
        return ()=>unsuscribe();
    },[])

    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(!newMessage) return;
        await addDoc(messagesRef,{
            text: newMessage,
            createdAt:serverTimestamp(),
            user: auth.currentUser.displayName,
            room,
        })
        setNewMessage('')
    }
  return (
    <div className='chat-app'>
        <div className="header">
            <h1>Welcome to: {room.toUpperCase()} </h1>
        </div>
        <div className='messages'>
            {messages.map((message)=> 
            <div className='message' key={message.id}>
                <span className='user'>{message.user}  </span>
                {message.text}
            </div>
        )} </div>
        <form onSubmit={handleSubmit} className='new-message-form'>
            <input 
            className='new-message-input'
            placeholder='Enter message'
            onChange={(e)=>setNewMessage(e.target.value)}
            value={newMessage}/>
            <button type='submit' className='send-button'>send</button>
        </form>
    </div>
  )
}

export default Chat