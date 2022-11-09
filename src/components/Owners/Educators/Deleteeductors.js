import React, { useState } from "react";
import UpdateEducators from "./UpdateEducators";
import './Owner.css'
const DeleteEductors = ({
  data,
  handleDeleteEducator,
  handleUpdateEducators,
}) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [visible, setVisible] = useState(true);
  const { id, name, email, password, school_id, course_id, owner_id } = data;

  function handleDelete() {
    fetch(`https://virtualschools.herokuapp.com/educators`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedEducator) => handleDeleteEducator(deletedEducator));
  }
  return (
    <div className="card">
      {visible ? (
        <div>
          {" "}
          {isUpdating ? (
            <UpdateEducators
              data={data}
              setIsUpdating={isUpdating}
              handleUpdateEducators={handleUpdateEducators}
            />
          ) : (
            <>
              <div className="delete-btns">
                <button
                  className="update-btn"
                  onClick={() => setIsUpdating((isUpdating) => !isUpdating)}
                ></button>
                <button onClick={handleDelete} className="delete-btn">
                  X
                </button>
              </div>
            </>
          )}{" "}
        </div>
      ) : (
        <div className="educators-card">
          <h2 className="res-info" onClick={() => setVisible(!visible)}>
            Educators Info
          </h2>
        </div>
      )}
    </div>
  );
};
export default DeleteEductors;
