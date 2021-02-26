import React, { useState } from "react";
import Chirp from "./chirp";

const Timeline = (props) => {
  const [chirps, setChirps] = useState([
    { id: 0, subject: "peepee", message: "poopoo" },
    { id: 1, subject: "test", message: "#2" },
    { id: 2, subject: "testAgain", message: "#3" },
  ]);

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  let key = 3;

  const handleClick = (subject, message) => {
    setChirps([...chirps, { id: key, subject: subject, message: message }]);
    key++;
  };

  return (
    <>
      <div className="mb-3">
        <h5 className="bg-light mb-0">Compose Chirp</h5>
        <div>
          <div className="input-group">
            <span className="input-group-text col-1">Subject</span>
            <input
              type="text"
              className="form-control"
              aria-label="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            ></input>
          </div>
          <div className="input-group">
            <span className="input-group-text col-1">Message</span>
            <textarea
              className="form-control"
              aria-label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button
          className="btn btn-success btn-lg"
          onClick={() => handleClick(subject, message)}
        >
          Post chirp fr
        </button>
        <div className="card-deck d-flex flex-column align-items-center">
          {chirps
            .slice(0)
            .reverse()
            .map((chirp) => {
              /* Reverses array so chirps display from newest to oldest */
              return <Chirp subject={chirp.subject} message={chirp.message} />;
            })}
        </div>
      </div>
      
    </>
  );
};

export default Timeline;
