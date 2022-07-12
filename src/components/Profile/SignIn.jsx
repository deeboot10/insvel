import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../firebase-config";
import { useDispatch } from "react-redux";
import { authActions } from "../../context/Context";

function SignIn({ set }) {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // stop page from refreshing
    const target = e.target;
    // get email and password values
    const email = target.email.value;
    const password = target.password.value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h5>Log In</h5>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        style={{ maxWidth: 300 }}
      >
        <input name="email" type="email" />
        <input name="password" type="password" />
        <button type="submit">Sign in</button>
        <p>
          Don't have an account?{" "}
          <a
            onClick={() => {
              set("register");
            }}
          >
            Register
          </a>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
