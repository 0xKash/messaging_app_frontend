const ChatMessageEnd = ({ author, pfp, content }) => {
  return (
    <>
      <div className="chat chat-end p-10 border">
        <div className="chat-image avatar mr-2">
          <div className="w-10 rounded-full">
            <img src={pfp} alt="" />
          </div>
        </div>
        <div className="chat-header">{author}</div>
        <div className="chat-bubble">{content}</div>
      </div>
    </>
  );
};

export default ChatMessageEnd;
