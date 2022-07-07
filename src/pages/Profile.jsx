import { useEffect, useState } from "react";
import ProfileLoggedIn from "../components/ProfileLoggedIn";
import ProfileNotLoggedIn from "../components/ProfileNotLoggedIn";
import { auth } from "../firebase-config";
function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (auth.currentUser) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="profile">
      <h2>Profile</h2>
      {isLoggedIn ? <ProfileLoggedIn /> : <ProfileNotLoggedIn />}
    </div>
  );
}

export default Profile;
