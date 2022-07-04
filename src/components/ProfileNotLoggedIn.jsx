import { useState } from "react";
import LogIn from "./LogIn";
import Register from "./Register";
import ChooseOption from "./ChooseOption";
function ProfileNotLoggedIn() {
  const [option, setOption] = useState(null);

  return (
    <div>
      <h4>Not Logged in Section</h4>
      {option === "log in" && <LogIn />}
      {option === "register" && <Register />}
      {!option && <ChooseOption set={setOption} />}
    </div>
  );
}

export default ProfileNotLoggedIn;
