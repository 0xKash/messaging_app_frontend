import ChatMessageEnd from "../components/chat/chatmessageend";
import ChatMessageStart from "../components/chat/chatmessagestart";
import Navbar from "../components/navbar";

const Chat = () => {
  return (
    <>
      <Navbar />
      <ChatMessageStart
        author={"Default"}
        pfp={"src/assets/default-profile.png"}
        content={"Testing!"}
      />
      <ChatMessageEnd
        author={"Kash"}
        pfp={"src/assets/default-profile.png"}
        content={
          <p>
            I'm testing too <br /> I don't really care btw
          </p>
        }
      />
      <ChatMessageStart
        author={"Default"}
        pfp={"src/assets/default-profile.png"}
        content={":("}
      />
    </>
  );
};

export default Chat;
