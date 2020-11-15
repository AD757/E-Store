import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import { SignUpContainer, Title } from "./SignUp.styles";

const INITIAL_CREDENTIALS = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const SignUp = () => {
  const [signUpCredentials, setSignUpCredentials] = useState(
    INITIAL_CREDENTIALS
  );
  const { displayName, email, password, confirmPassword } = signUpCredentials;

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setSignUpCredentials(INITIAL_CREDENTIALS);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setSignUpCredentials({ ...signUpCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <Title>I do not have an account</Title>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
