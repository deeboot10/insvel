import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase-config";
import { setDoc, doc } from "firebase/firestore";
import { useState } from "react";

function Register({ set }) {
  const [status, setStatus] = useState({ type: null, mess: null });

  const handleSubmit = async (e) => {
    // prevent page from refreshing
    e.preventDefault();
    // get user input
    const target = e.target;
    const email = target.email.value;
    const password = target.password.value;
    const passwordConfirm = target.passwordConfirm.value;
    const name = target.name.value;
    const surname = target.surname.value;
    const nationality = target.nationality.value;
    const date = target.date.value;
    const gender = target.gender.value;
    const image = target.image.files[0];

    // data control
    if (email === "") {
      setStatus({
        type: "err",
        mess: "You must enter your email",
      });
    } else if (password.length < 8)
      setStatus({
        type: "err",
        mess: "Password must be at least 8 characters long",
      });
    else if (password !== passwordConfirm)
      setStatus({
        type: "err",
        mess: "Passwords must be same",
      });
    else if (name === "")
      setStatus({
        type: "err",
        mess: "You must enter your name",
      });
    else if (surname === "")
      setStatus({
        type: "err",
        mess: "You must enter your surname",
      });
    else if (nationality === "unset")
      setStatus({
        type: "err",
        mess: "You must set your nationality",
      });
    else if (gender === "unset")
      setStatus({
        type: "err",
        mess: "You must set your gender",
      });
    else setStatus({ type: "load", mess: "loading ..." });

    console.log(
      email,
      password,
      passwordConfirm,
      name,
      surname,
      nationality,
      date,
      gender,
      image
    );
    // try {
    //   await createUserWithEmailAndPassword(auth, email, password);
    //   await setDoc(doc(db, "users", user.user.uid), {
    //     name: name,
    //     surname: surname,
    //   });
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  return (
    <div>
      <h5>Register 📚</h5>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        style={{ maxWidth: 300 }}
      >
        <input placeholder="Email" name="email" type="email" maxLength={30} />
        <input
          placeholder="Password"
          name="password"
          type="password"
          autoComplete="on"
          maxLength={30}
        />
        <input
          autoComplete="on"
          placeholder="Confirm password"
          name="passwordConfirm"
          type="password"
          maxLength={30}
        />
        <input maxLength={30} name="name" type="text" placeholder="Name" />
        <input
          maxLength={30}
          name="surname"
          type="text"
          placeholder="Surname"
        />
        <select name="nationality">
          <option value="unset" style={{ display: "none" }}>
            nationality
          </option>
          <option value="sr">Serbia</option>
          <option value="us">The United States of America</option>
          <option value="gr">Greece</option>
          <option value="ru">Russia</option>
          <option value="ch">China</option>
        </select>
        <select name="gender">
          <option value="unset" style={{ display: "none" }}>
            gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input name="image" type="file" accept="image/*" />
        <input name="date" type="date" />
        <hr />
        {status.type == "err" && <p style={{ color: "red" }}>{status.mess}</p>}
        {status.type == "load" && (
          <p style={{ color: "blue" }}>{status.mess}</p>
        )}
        {status.type == "succ" && (
          <p style={{ color: "green" }}>{status.mess}</p>
        )}
        <button type="submit">Register</button>
        <p>
          Already have an account?{" "}
          <a
            onClick={() => {
              set("sign in");
            }}
          >
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;
