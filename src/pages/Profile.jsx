import { useState } from "react";
import ProfileLoggedIn from "../components/ProfileLoggedIn";
import ProfileNotLoggedIn from "../components/ProfileNotLoggedIn";

function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="profile">
      <h2>Profile</h2>
      {isLoggedIn ? <ProfileLoggedIn /> : <ProfileNotLoggedIn />}
    </div>
  );
}

export default Profile;
