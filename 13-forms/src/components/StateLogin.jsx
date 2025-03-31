import { useState } from "react";

export default function StateLogin() {
  const [enteredCredentials, setEnteredCredentials] = useState({
    email: "",
    password: "",
  });

  function handleCredentialsInputChange(identifier, value) {
    setEnteredCredentials((prevCreds) => ({
      ...prevCreds,
      [identifier]: value,
    }));
  }
}
