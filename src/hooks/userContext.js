import React, { useContext, useEffect, useState } from "react";

const userContext = React.createContext();
export function useUser() {
  return useContext(userContext);
}
export function UserProvider({ children }) {
  const [userWithPhoto, setuserWithPhoto] = useState([]);
  const [userWithOutPhoto, setuserWithOutPhoto] = useState([]);
  const [delet, setdelete] = useState(false);
  const [upd, setupd] = useState(false);
  const [userwithoutdelete, setuserwithoutdelete] = useState(false);
  const [userwithupdate, setuserwithupdate] = useState(false);
  useEffect(() => {
    fetch(
      "https://randomuser.me/api/?results=50&inc=gender,name,nat,picture,location,email,dob,phone&seed=396aa9bf11ae0723"
    )
      .then((res) => res.json())
      .then((result) => {
        setuserWithPhoto(result.results);
      });

    fetch(
      "https://randomuser.me/api/?results=50&inc=gender,name,nat,location,email,dob,phone&seed=74e91734ca1739bc"
    )
      .then((res) => res.json())
      .then((result) => {
        setuserWithOutPhoto(result.results);
      });
  }, []);

  function updateUser(u, firstname, lastname, email, phone) {
    const us =
      userWithPhoto.find((use) => {
        return use.email == u.email;
      }) ||
      userWithOutPhoto.find((use) => {
        return use.email == u.email;
      });

    us.name.first = firstname;
    us.name.last = lastname;
    us.email = email;
    us.phone = phone;
    console.log(us);

    if (us.picture) {
      setupd(true);
    }
    if (!us.picture) {
      setuserwithupdate(true);
    }
  }

  function deleteUser(email) {
    const de = userWithPhoto.filter((use) => {
      return use.email !== email;
    });
    const dewithout = userWithOutPhoto.filter((use) => {
      return use.email !== email;
    });
    userWithPhoto.find((user) => {
      if (user.email == email) {
        setuserWithPhoto(de);
        setdelete(true);
      }
    });
    userWithOutPhoto.find((user) => {
      if (user.email == email) {
        setuserWithOutPhoto(dewithout);
        setuserwithoutdelete(true);
      }
    });
  }
  function clear() {
    setupd(false);
    setdelete(false);
  }

  return (
    <userContext.Provider
      value={{
        userWithOutPhoto,
        userWithPhoto,
        useUser,
        updateUser,
        deleteUser,
        upd,
        delet,
        clear,
        userwithoutdelete,
        setuserwithoutdelete,
        setuserwithupdate,
        userwithupdate,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
