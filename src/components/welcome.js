import React from "react";
import { Link } from "react-router-dom";
import "./welcome.css";
import { Button } from "react-bootstrap";
const Welcome = () => {
  return (
    <div className="welcome">
      <div className="img1"></div>
      <div className="page">
        <p style = {{fontSize:30 , fontWeight:"800"}}>Check Your Employes Info</p>
        <div>
          <ul className="links">
            <li>
              <Link to="/completeids" style={{ textDecoration: "none" }}>
                <Button type="button" className="mr-4 btn-m ">
                  Complete Id
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/incompleteids" style={{ textDecoration: "none" }}>
                <Button type="button" className="mr-1 btn-m ">
                  InComplete Id
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
