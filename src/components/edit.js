import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { useUser } from "../hooks/userContext";
const Edit = (props) => {
  const [user, setuser] = useState();
  const [firsrname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const {
    updateUser,
    deleteUser,
    upd,
    delet,
    userwithoutdelete,
    userwithupdate,
  } = useUser();

  useEffect(() => {
    console.log(props);
    setuser(props.location.state.user);
    setfirstname(props.location.state.user.name.first);
    setlastname(props.location.state.user.name.last);
    setemail(props.location.state.user.email);
    setphone(props.location.state.user.phone);
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    updateUser(user, firsrname, lastname, email, phone);
  }
  if (delet || upd) {
    return <Redirect to="/completeids" />;
  }
  if (userwithoutdelete || userwithupdate) {
    return <Redirect to="/incompleteids" />;
  }
  return (
    <div style={{ backgroundColor: "#dde1e7" }}>
      <Container
        className="align-items-center d-flex p-5"
        style={{ height: "100vh", width: "100%", padding: 0 }}
      >
        <Form className="w-100" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Change Your Name</Form.Label>
            <Form.Control
              type="text"
              value={firsrname}
              required
              onChange={(e) => setfirstname(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Change Last Name</Form.Label>
            <Form.Control
              type="text"
              value={lastname}
              required
              onChange={(e) => setlastname(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label> Change Your Email</Form.Label>
            <Form.Control
              type="text"
              value={email}
              required
              onChange={(e) => setemail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label> Change Your Phone</Form.Label>
            <Form.Control
              type="text"
              value={phone}
              required
              onChange={(e) => setphone(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" className="mr-2">
            Update
          </Button>
          <Button
            type="button"
            onClick={() => deleteUser(email)}
            className="mr-2"
          >
            Delete
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Edit;
