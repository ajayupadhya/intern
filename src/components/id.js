import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./id.css";
const Id = ({ user }) => {
  const [check, setcheck] = useState(false);
  const gotoEdit = () => {
    setcheck(true);
  };

  if (check) {
    return (
      <Redirect
        to={{
          pathname: "/edit",
          state: { user: user },
        }}
      />
    );
  }
  return (
    <div className="userId" onClick={() => gotoEdit()}>
      {user.picture ? (
        <div className="imgdiv">
          {" "}
          <img src={user?.picture.large} className="imgs" />{" "}
        </div>
      ) : null}

      <div className="info">
        <div className="name">
          Name : {user.name.first} {user.name.last}
        </div>
        <div className="name"> Gender: {user.gender}</div>

        <div className="name">Email: {user.email}</div>
        <div className="name">Phone: {user.phone}</div>
      </div>
    </div>
  );
};

export default Id;
