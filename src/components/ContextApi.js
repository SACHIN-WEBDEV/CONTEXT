import React, { useContext, useState } from "react";
import { UserContext } from "../contextApi/UserContext";

export default function ContextApi() {
  const [user, setUser] = useContext(UserContext);
  const [name, setName] = useState("");

  const onChange = (e) => {
    setName(e.target.value);
  };

  const userdata = {
    id: Math.floor(Math.random() * 100000),
    name,
    lastname: "malik",
  };
  const onClick = (e) => {
    e.preventDefault();
    setUser((old) => [userdata, ...old]);
    setName("");
  };

  return (
    <div>
      {user.map((user) => (
        <p>{user.name}</p>
      ))}
      <form onSubmit={onClick}>
        <input
          onChange={onChange}
          type="text"
          value={name}
          name="name"
          style={{ marginBottom: 5 }}
        ></input>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
