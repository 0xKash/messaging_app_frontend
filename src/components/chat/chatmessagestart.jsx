const ChatMessageStart = ({ author, pfp, content }) => {
  return (
    <>
      <div className="chat chat-start p-10">
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

export default ChatMessageStart;
