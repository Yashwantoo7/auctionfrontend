import React, { useContext, useEffect } from 'react'
import { AuctionContext } from '../context/AuctionContext';
import { socket } from '../service/socket';

const Join = () => {

    const {id,setId,name,setName,room,setRoom,rooms,setRooms} = useContext(AuctionContext);


    useEffect(()=>{
        socket.emit('join',{name,room},(error)=>{
            if(error){
                alert(error);
            }
        })
    },[]);

    useEffect(()=>{       
        socket.on('roomData',({users})=>{
            console.log(users);
        });
    },[]);

    return (
        <div>
            "hello"
        </div>
    )
}

export default Join
