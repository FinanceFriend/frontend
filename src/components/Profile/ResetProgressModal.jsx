import React, { useState, useEffect } from "react";
import "./Popup.css";
import { useAuth } from "@/context/AuthProvider";

export default function ChangeUsernameModal() {
  const [modal, setModal] = useState(false);
  const { currentUser } = useAuth();

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [modal]);
  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Reset progress
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Reset progress</h2>
            <p className="reset-txt">
              Are you sure you want to reset your progress?
            </p>
            <div className="btn-yes-no">
              <button className="yesbtn btn-modal">YES</button>
              <button className="nobtn btn-modal">NO</button>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
