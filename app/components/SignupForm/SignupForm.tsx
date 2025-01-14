import { FormEvent, useState } from "react";
import "./SignupForm.css";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  // URL variables will not store real URLs - they will be used to catch
  // inputs from bots and have realistic form names to mask bot detecting
  // functionality.
  const [url, setURL] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");
  const submitHandler = async () => {
    const myRequest = new Request("/api/email", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await fetch(myRequest).then((response) => {
      if (response.status >= 400) {
        setSubmissionMessage(
          "Sorry something went wrong... please try again later"
        );
      } else {
        setSubmissionMessage("Success! You're officially signed up!");
      }
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionMessage("");
    if (url !== "") {
      //resets the input field so that it is blank
      setURL("");
      return;
    }
    await submitHandler();
    //resets the input field so that it is blank
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="sign-up-form">
      <label htmlFor="email-signup" className="sign-up-label">
        Sign up for more information
      </label>
      <div className="submit-container">
        <input
          className="sign-up-input-field"
          id="email-signup"
          name="email-signup"
          type="email"
          placeholder="example@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        {/* a form field to catch bots, it does not collect any data */}
        <div className="website-url-pot">
          <label htmlFor="website-url">Your website</label>
          <input
            type="text"
            id="website-url"
            name="website-url"
            value={url}
            tabIndex={-1}
            onChange={(e) => setURL(e.target.value)}
            autoComplete="off"
            placeholder="not for users, please skip"
          />
        </div>
        {/* a form field to catch bots, it does not collect user data */}

        <button className="sign-up-button">Submit</button>
      </div>
      <p>{submissionMessage}</p>
    </form>
  );
};

export default SignupForm;
