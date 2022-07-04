function ChooseOption({ set }) {
  return (
    <div>
      <h4>Choose option</h4>
      <p>Welcome to travel land! Have a good time! 🐱‍👓</p>
      <button
        onClick={() => {
          set("log in");
        }}
      >
        Log in
      </button>
      <button
        onClick={() => {
          set("register");
        }}
      >
        Register
      </button>
    </div>
  );
}

export default ChooseOption;
