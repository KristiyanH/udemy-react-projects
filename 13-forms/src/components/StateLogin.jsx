import { useState } from "react";

export default function StateLogin() {
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
            value={enteredCredentials.email}
            onChange={handleCredentialsInputChange}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredCredentials.password}
            onChange={handleCredentialsInputChange}
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
