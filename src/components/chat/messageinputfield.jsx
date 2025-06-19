const MessageInputField = () => {
  return (
    <>
      <form
        action=""
        className=" w-full flex justify-center px-10 mb-5 fixed bottom-0"
      >
        <input
          type="text"
          placeholder="Type your message here"
          className="input w-full"
        />
        <button className="btn btn-soft btn-warning ml-3">Send</button>
      </form>
    </>
  );
};

export default MessageInputField;
