function LogIn() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    const password = target.password.value;
    // try {
    //   const user = await createUserWithEmailAndPassword(auth, email, password);
    //   console.log(user);
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
      <h5>Log In</h5>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input name="email" type="email" />
        <input name="password" type="password" />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default LogIn;
