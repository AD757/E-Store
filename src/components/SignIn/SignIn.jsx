import React, { useState } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import { SignInContainer, Title, ButtonsContainer } from "./SignIn.styles";

export const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });
  const { email, password } = userCredentials;

  const handleChange = e => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserCredentials({
        email: "",
        password: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SignInContainer>
      <Title>I already have an account</Title>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          required={true}
          handleChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          required={true}
          handleChange={handleChange}
        />
        <ButtonsContainer>
          <CustomButton type="submit">LOG IN</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Log in with google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
