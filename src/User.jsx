import { UserContext } from "./App";
import { Params } from "react-router-dom";
import { UserContext } from "./App";

function User() {
  const users = useContext(UserContext);
  const { id } = userParans();
  return <h1> User: {users[id - 1].name}</h1>;
}

export default User;
