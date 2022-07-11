import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
import { useDispatch } from "react-redux";
import { authActions } from "./context/Context";
function App() {
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      const uid = user.uid;
      dispatch(authActions.login());
    } else {
      // User is signed out
    }
  });

  return (
    <>
      <Header></Header>
      <Home></Home>
      <Profile></Profile>
    </>
  );
}

export default App;
