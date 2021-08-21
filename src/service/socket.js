import socketClient from 'socket.io-client';
import {SERVER} from '../constants';

export const socket = socketClient(SERVER);