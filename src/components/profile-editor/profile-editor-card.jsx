const ProfileEditorComponent = () => {
  return (
    <div className="border w-full sm:p-50 ">
      <div className="flex shadow-md sm:p-20">
        <div className="avatar flex items-center ml-15">
          <div className="w-60 rounded-full">
            <img src="src/assets/default-profile.png" />
          </div>
        </div>
        <div className="flex flex-col justify-center ml-10 gap-15">
          <h1 className="text-xl font-bold ">
            Drop an image to change your avatar:
          </h1>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Pick a file</legend>
            <input type="file" className="file-input" />
            <label className="label">Max size 2MB</label>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditorComponent;
