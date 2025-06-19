import ChatPreview from "../components/home/chatpreview-card";
import Navbar from "../components/navbar";
import Modal from "../components/modal/modal";

const Home = () => {
  return (
    <>
      <Navbar />
      <Modal />

      <div className="flex flex-col items-center pt-15">
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
      </div>
    </>
  );
};

export default Home;
