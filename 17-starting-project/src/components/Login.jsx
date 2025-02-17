import { useRef, useState } from "react";

export default function Login() {
  const email = useRef("");
  const password = useRef("");

  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submited");

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    console.log(enteredEmail);
    console.log(enteredPassword);
    // event.target.reset();
  }

  function handleReset(event) {
    event.target.reset();
  }

  function handleEmailChange() {
    setEmailIsValid(true);
  }

  function handlePasswordChange() {
    setPasswordIsValid(true);
  }

  function handleEmailBlur() {
    const enteredEmail = email.current.value;

    if (enteredEmail.includes("@")) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  }

  function handlePasswordBlur() {
    const enteredPassword = password.current.value;

    if (enteredPassword) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            ref={email}
          />
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
            ref={password}
          />
        </div>
      </div>
      <div className="control-error">
        {!emailIsValid && <p>Please enter a valid email</p>}
        {!passwordIsValid && <p>Please enter a valid password</p>}
      </div>

      <p className="form-actions">
        <button className="button button-flat" onClick={handleReset}>
          Reset
        </button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}
