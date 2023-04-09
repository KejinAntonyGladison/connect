import { useState} from 'react'
import axios from 'axios'

const ChatInput = ({ user, clickedUser, getUserMessages, getClickedUsersMessages}) => {
    const [textArea, setTextArea] = useState("")
    const userId = user?.user_id
    const clickedUserId = clickedUser?.user_id   

    const addMessage = async () => {

        let optionsDate ={day: '2-digit', month: '2-digit', year: 'numeric', hour12: true }
        const msgLocalDate = new Date().toLocaleString("en-GB", optionsDate)
        let optionsTime ={hour: '2-digit', minute: '2-digit', hour12: true }
        const msgLocalTime = new Date().toLocaleString("en-GB", optionsTime)

        const msgLocalDateTime = msgLocalDate + ", " + msgLocalTime 
 
        const message = {
            timestamp: new Date().toISOString(),
            messageLocalTime: msgLocalDateTime,
            from_userId: userId,
            to_userId: clickedUserId,
            message: textArea
        }

        try {
            await axios.post('http://localhost:8000/message', { message })
            getUserMessages()
            getClickedUsersMessages()
            setTextArea("")
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="chat-input">
            <textarea placeholder='Enter your message...' className='message-input-field' value={textArea} onChange={(e) => setTextArea(e.target.value)}/>
            <button className="secondary-button" onClick={addMessage}>Submit</button>
        </div>
    )
}

export default ChatInput