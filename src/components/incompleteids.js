import React, { useEffect } from "react";
import { useUser } from "../hooks/userContext";
import Id from "./id";
const Incompleteids = () => {
  const {
    userWithOutPhoto,
    clear,
    setuserwithoutdelete,
    setuserwithupdate,
  } = useUser();

  useEffect(() => {
    clear();
    setuserwithoutdelete(false);
    setuserwithupdate(false);
  }, []);
  return (
    <div style={{ backgroundColor: "#dde1e7" }}>
      <div
        style={{
          height: 150,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 40,
          fontWeight: "700",
        }}
      >
        {" "}
        InComplete Ids
      </div>

      <div className="gridContainer">
        {userWithOutPhoto.map((use) => {
          return <Id user={use} key={use.phone} />;
        })}
      </div>
    </div>
  );
};

export default Incompleteids;
