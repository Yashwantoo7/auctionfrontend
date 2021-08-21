import React, { createContext,useState } from 'react'

export const AuctionContext = createContext();

const AuctionContextProvider = (props) => {
    const [id,setId] = useState(null);
    const [name,setName]  = useState(null);
    const [room,setRoom] = useState(null);
    const [rooms,setRooms] = useState([]);

    return (
        <AuctionContext.Provider 
            value = {{
                id,setId,
                name,setName,
                room,setRoom,
                rooms,setRooms
            }}            
        >{props.children}</AuctionContext.Provider>
    )
}

export default AuctionContextProvider
