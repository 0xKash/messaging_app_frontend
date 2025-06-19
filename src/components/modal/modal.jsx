import Friend from "./friend";

const Modal = () => {
  return (
    <dialog id="modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Try adding new friends here!</h3>
        <form action=""></form>

        <div className="modal-action flex flex-col">
          <form
            action=""
            method="dialog"
            className="mr-auto w-full flex items-center p-0.5"
          >
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" className="grow" placeholder="Search" />
            </label>

            <button className="btn btn-soft btn-info ml-auto">Search</button>

            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <br />
          <Friend username={"Kash"} />
          <Friend username={"Sophie"} />
          <Friend username={"Carl"} />
          <Friend username={"James"} />
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
