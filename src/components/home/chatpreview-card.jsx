import { useNavigate } from "react-router-dom";

const ChatPreview = () => {
  const navigate = useNavigate();

  return (
    <div
      class="card bg-base-100 shadow-md transition hover:scale-101 m-20 p-10 flex items-center flex-row"
      onClick={() => navigate("/chat")}
    >
      <svg
        className="ml-10 mr-10 "
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#FFF"
      >
        <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
      </svg>
      <h1 className="text-2xl font-bold">Chat with {"{Default}"}!</h1>
      <img
        src="src\assets\default-profile.png"
        alt="Profile picture"
        className="ml-auto w-15 rounded-xl"
      />
    </div>
  );
};

export default ChatPreview;
