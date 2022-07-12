import ProfileSignedIn from "../components/ProfileSignedIn";
import ProfileNotSignedIn from "../components/ProfileNotSignedIn";
import { useSelector } from "react-redux";

function Profile() {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

  // console if user is logged in or not
  console.log(
    `%c User is signed in: %c ${isSignedIn}`,
    "color: white",
    isSignedIn ? "color: green" : "color: red"
  );

  return (
    <div className="profile">
      <h2>Profile</h2>
      {isSignedIn ? <ProfileSignedIn /> : <ProfileNotSignedIn />}
    </div>
  );
}

export default Profile;
