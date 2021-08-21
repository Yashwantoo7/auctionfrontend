import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { AuctionContext } from '../context/AuctionContext';
import {socket} from '../service/socket';

const Home = () => {

    const {id,setId,name,setName,room,setRoom,rooms,setRooms} = useContext(AuctionContext);

    useEffect(()=>{
        socket.on('room',({room})=>{
            var temp = rooms;
            temp.push(room);
            setRooms(temp);
            console.log(rooms);
        })
    },[]);

   
    return (
        <div>
            <input placeholder = 'Name' type='text' onChange={(e)=>setName(e.target.value)}/>
            <input placeholder = 'Room' type='text' onChange={(e)=>setRoom(e.target.value)}/>
            <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/join?name=${name}&room=${room}`}>
                <button type="submit">Create</button>
            </Link>
        </div>
    )
}

export default Home
