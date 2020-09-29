import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Chat.css';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom';
import db from './firebase';

function Chat() {
  const [seed, setSeed] = useState('');
  const [input, setInput] = useState('');
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState('');

  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    // console.log('you typed >>>', input);
  };

  return (
    <div className='chat'>
      <div className='chat__header'>
        {' '}
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className='chat__headerInfo'>
          <h3>{roomName}</h3>
          <p>Last seen at...</p>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className='chat__body'>
        <p className={`chat__message ${true && 'chat__reciever'}`}>
          <span className='chat__name'>JonAP</span>Hey Guys{' '}
          <span className='chat__timestamp'>3:55pm</span>
        </p>
      </div>
      <div className='chat__footer'>
        <InsertEmoticonIcon />
        <form action=''>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type='text'
            placeholder='Type a message'
          />
          <button onClick={sendMessage} type='submit'>
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
