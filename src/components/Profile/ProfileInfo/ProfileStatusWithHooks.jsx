import React, { useState } from "react";
import { useEffect } from "react";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    //Ниже временно закомментированы из-за ограничения на кол-во запросов
    // props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  };

  return (
    <>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>
            {props.status || "-------"} yi
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode} value={status} />
        </div>
      )}
    </>
  );
};

export default ProfileStatusWithHooks;
