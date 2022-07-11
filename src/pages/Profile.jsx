import { useEffect, useState } from "react";
import ProfileLoggedIn from "../components/ProfileLoggedIn";
import ProfileNotLoggedIn from "../components/ProfileNotLoggedIn";
import { auth } from "../firebase-config";
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
      {isSignedIn ? <ProfileLoggedIn /> : <ProfileNotLoggedIn />}
    </div>
  );
}

export default Profile;
