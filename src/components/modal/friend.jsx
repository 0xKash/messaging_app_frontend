const Friend = ({ username }) => {
  return (
    <div className="mt-3">
      <div className="flex items-center">
        <h2 className="card-title mr-auto">{username}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-soft btn-success">Chat</button>
        </div>
      </div>
    </div>
  );
};

export default Friend;
