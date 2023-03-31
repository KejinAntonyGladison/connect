const Chat = ({descendingOrderMessages}) => {
    return (
        <>
            <div className="chat-display">
                {descendingOrderMessages.map((message, _index) => (
                    <div key={_index}>
                        <div className="chat-message-header">
                            <div className="img-container">
                                <img src={message.img} alt={message.name + ' profile'} />
                            </div>
                            <p className="name-info">{message.name}</p> 
                            <p className="date-info">{message.timestamp}</p>
                        </div>
                        <p className="message-info">{message.message}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Chat