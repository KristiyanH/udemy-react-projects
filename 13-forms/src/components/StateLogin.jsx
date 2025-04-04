import { useState } from "react";

export default function StateLogin() {
  const [enteredCredentials, setEnteredCredentials] = useState({
    email: "",
    password: "",
  });

  const [didLostFocus, setDidLostFocus] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
  didLostFocus.email && !enteredCredentials.email.includes("@");

  function handleSubmit(event) {
    event.preventDefault();

    console.log(enteredCredentials);
  }

  function handleCredentialsInputChange(identifier, value) {
    setEnteredCredentials((prevCreds) => ({
      ...prevCreds,
      [identifier]: value,
    }));

    setDidLostFocus(prevFocus => ({
      ...prevFocus,
      [identifier]: false
    }));
  }

  function handleInputBlur(identifier) {
    setDidLostFocus((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
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
            onBlur={() => handleInputBlur("email")}
            value={enteredCredentials.email}
            onChange={(event) =>
              handleCredentialsInputChange("email", event.target.value)
            }
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={() => handleInputBlur("password")}
            value={enteredCredentials.password}
            onChange={(event) =>
              handleCredentialsInputChange("email", event.target.value)
            }
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
