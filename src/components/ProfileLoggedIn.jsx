import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
function ProfileLoggedIn() {
  const handleLogOut = async () => {
    try {
      signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h4>Logged in Section</h4>
      <div>
        <b>UID:</b>
        <i>{auth.currentUser.uid}</i>
      </div>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
}

export default ProfileLoggedIn;
