import React, {ChangeEvent, FormEvent} from 'react';

import {FormInput, CustomButton} from '..';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './SignIn.scss';

interface Props {

}

interface State {
  email: string,
  password: string,
}

export class SignIn extends React.Component<Props, State> {
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        email: '',
        password: '',
      });
    } catch (e) {
      console.error(e);
    }
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    let obj: State | any = {};
    obj[name] = value;
    this.setState(obj);
  };

  render () {
    const {
      state: {
        email,
        password,
      },
      handleSubmit,
      handleChange,
    } = this;
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account.</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={handleSubmit}>
          <FormInput name='email' type='email' label='Email' value={email} handleChange={handleChange} required/>
          <FormInput name='password' type='password' label='Password' value={password} handleChange={handleChange} required/>
          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}