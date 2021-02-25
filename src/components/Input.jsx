import React, { useState } from "react";

const chirpArray = [
  { id: 0, subject: "peepee", message: "poopoo" },
  { id: 1, subject: "test", message: "#2" },
  { id: 2, subject: "testAgain", message: "#3" },
];
const Input = (props) => {
  let key = 3;
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const chirpCreator = (subject, message) => {
    chirpArray.push({ id: key, subject: subject, message: message });
    key++;
    console.log(chirpArray);
    return chirpArray;
  };

  return (
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
        className="btn btn-light mt-1"
        onClick={() => chirpCreator(subject, message)}
      >
        Post Chirp
      </button>
    </div>
  );
};

export default Input;
export { chirpArray };
