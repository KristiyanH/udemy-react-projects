import { useState } from "react";

export default function Login() {
  const [enteredCredentials, setEnteredCredentials] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    console.log(enteredCredentials);
  }

  function handleCredentialsInputChange(identifier, value) {
    setEnteredCredentials((prevCreds) => ({
      ...prevCreds,
      [identifier]: value,
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
            onChange={(event) =>
              handleCredentialsInputChange("email", event.target.value)
            }
            value={enteredCredentials.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleCredentialsInputChange("password", event.target.value)
            }
            value={enteredCredentials.password}
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
