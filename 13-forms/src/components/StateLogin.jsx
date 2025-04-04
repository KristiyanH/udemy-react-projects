import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

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
    didLostFocus.email &&
    !isEmail(enteredCredentials.email) &&
    !isNotEmpty(enteredCredentials.email);

  const passwordIsInvalid =
    didLostFocus.password && !hasMinLength(enteredCredentials.password, 6);

  function handleSubmit(event) {
    event.preventDefault();

    console.log(enteredCredentials);
  }

  function handleCredentialsInputChange(identifier, value) {
    setEnteredCredentials((prevCreds) => ({
      ...prevCreds,
      [identifier]: value,
    }));

    setDidLostFocus((prevFocus) => ({
      ...prevFocus,
      [identifier]: false,
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
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          value={enteredCredentials.email}
          error={emailIsInvalid && "Please enter a valid email."}
          onBlur={() => handleInputBlur("email")}
          onChange={(event) =>
            handleCredentialsInputChange("email", event.target.value)
          }
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={enteredCredentials.password}
          error={passwordIsInvalid && "Please enter a valid password."}
          onBlur={() => handleInputBlur("password")}
          onChange={(event) =>
            handleCredentialsInputChange("password", event.target.value)
          }
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
