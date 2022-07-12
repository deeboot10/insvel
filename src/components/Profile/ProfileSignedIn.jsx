import { auth, db } from "../../firebase-config";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { authActions } from "../../context/Context";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

function ProfileSignedIn() {
  const [status, setStatus] = useState({ type: "load", mess: "loading ..." });

  const dispatch = useDispatch();
  const handleLogOut = async () => {
    try {
      await signOut(auth);
      dispatch(authActions.logout());
    } catch (error) {
      console.log(error);
    }
  };
  const userData = useSelector((state) => state.auth.userData);
  useEffect(async () => {
    const docRef = doc(db, "users", userData.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setStatus({ type: "succ", data: docSnap.data() });
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }, []);

  return (
    <div>
      <h4>Signed in Section</h4>

      {status.type === "load" && <p style={{ color: "blue" }}>{status.mess}</p>}
      {status.type === "succ" && (
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{status.data.name}</td>
            </tr>
            <tr>
              <td>Surname</td>
              <td>{status.data.surname}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{status.data.email}</td>
            </tr>
            <tr>
              <td>Nationality</td>
              <td>{status.data.nationality}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{status.data.gender}</td>
            </tr>
            <tr>
              <td>Date of birth</td>
              <td>{status.data.date}</td>
            </tr>
            <tr>
              <td>User ID</td>
              <td>{userData.uid}</td>
            </tr>
          </tbody>
        </table>
      )}
      <button onClick={handleLogOut}>Sign out</button>
    </div>
  );
}

export default ProfileSignedIn;
