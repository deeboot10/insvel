function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    const password = target.password.value;
    const passwordConfirm = target.passwordConfirm.value;
    console.log(email, password, passwordConfirm);
  };

  return (
    <div>
      <h5>Register 📚</h5>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input name="email" type="email" />
        <input name="password" type="password" />
        <input name="passwordConfirm" type="password" />
        <input type="text" />
        <input type="text" />
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
