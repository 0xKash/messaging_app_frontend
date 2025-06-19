import ChatMessageEnd from "../components/chat/chatmessageend";
import ChatMessageStart from "../components/chat/chatmessagestart";
import MessageInputField from "../components/chat/messageinputfield";
import Navbar from "../components/navbar";
import Modal from "../components/modal/modal";

const Chat = () => {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <Modal />
        <div className="w-full h-10"></div>
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
        <div className="w-full h-20"></div>
        <div className="flex justify-center mt-100">
          <MessageInputField />
        </div>
      </div>
    </>
  );
};

export default Chat;
