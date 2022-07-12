import { useState } from "react";
import SignIn from "./SignIn";
import Register from "./Register";
import ChooseOption from "./ChooseOption";
function ProfileNotSignedIn() {
  const [option, setOption] = useState(null);

  return (
    <div>
      <h4>Not Signed in Section</h4>
      {option === "sign in" && <SignIn set={setOption} />}
      {option === "register" && <Register set={setOption} />}
      {!option && <ChooseOption set={setOption} />}
    </div>
  );
}

export default ProfileNotSignedIn;
