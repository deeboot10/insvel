import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase-config";
import { setDoc, doc } from "firebase/firestore";
function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    const password = target.password.value;
    const passwordConfirm = target.passwordConfirm.value;
    const name = target.name.value;
    const surname = target.surname.value;

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      await setDoc(doc(db, "users", user.user.uid), {
        name: name,
        surname: surname,
      });
    } catch (error) {
      console.log(error.message);
    }
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
        <input name="email" type="email" />
        <input name="password" type="password" />
        <input name="passwordConfirm" type="password" />
        <input name="name" type="text" placeholder="Name" />
        <input name="surname" type="text" placeholder="Surname" />
        {/* nationality */}
        {/* gender */}
        {/* photo */}
        <input type="date" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
