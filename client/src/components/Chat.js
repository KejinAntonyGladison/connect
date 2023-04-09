const Chat = ({descendingOrderMessages, messageEl}) => {
    return (
        <>
            <div className="chat-display" ref={messageEl}>
                {descendingOrderMessages.map((message, _index) => (          
                    <div key={_index}>
                        <div className="chat-message-header">
                            <div className="img-name-container">
                                <div className="img-container">
                                    <img src={message.img} alt={message.name + ' profile'} />
                                </div>
                                <p className="name-info">{message.name}</p> 
                            </div>
                            <p className="date-info">{message.messageLocalTime}</p>
                        </div>
                        <p className="message-info">{message.message}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Chat