import React from 'react'
import { useSelector } from 'react-redux'

const Chat = () => {
   
    const user = useSelector(state => state.authReducer.user)

    return (
        <div>
            <h1>Welcome, {user.firstName}</h1>
        </div>
    );
}

export default Chat