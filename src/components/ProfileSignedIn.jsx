import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux/es/exports";
import { authActions } from "../context/Context";
function ProfileSignedIn() {
  const dispatch = useDispatch();
  const handleLogOut = async () => {
    try {
      await signOut(auth);
      dispatch(authActions.logout());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h4>Signed in Section</h4>
      <div>
        <b>UID:</b>
        <i>{auth.currentUser.uid}</i>
      </div>
      <button onClick={handleLogOut}>Sign out</button>
    </div>
  );
}

export default ProfileSignedIn;
