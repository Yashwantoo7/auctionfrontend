import React, { useEffect } from 'react'
import socketClient from 'socket.io-client';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/Home';
import Join from './components/Join';
import AuctionContextProvider from './context/AuctionContext';

const App = () => {

    return (
        <AuctionContextProvider>
            <Router>
                <Route path='/' exact component={Home}></Route>
                <Route path='/join' component = {Join}></Route>
            </Router>
        </AuctionContextProvider>
    )
}

export default App