import React, { useEffect } from "react";
import { useUser } from "../hooks/userContext";
import Id from "./id";
import "./completeids.css";
const Completeids = () => {
  const { userWithPhoto, clear } = useUser();
  useEffect(() => {
    clear();
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
        Complete Ids
      </div>
      <div className="gridContainer">
        {userWithPhoto.map((use) => {
          return <Id user={use} key={use.phone} />;
        })}
      </div>
    </div>
  );
};

export default Completeids;
