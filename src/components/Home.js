import React from "react";
import { auth } from "./firebase";
import { useStateValue } from "../StateProvider";
function Home() {
  const [{ user }] = useStateValue();
  return (
    <div>
        <p>{user ? user.userName : "PLease Login First"}</p>
    </div>
  );
}    

export default Home;
