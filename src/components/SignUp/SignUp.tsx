import React, {ChangeEvent, FormEvent} from 'react';

import {FormInput, CustomButton, PasswordFormInput} from '..';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './SignUp.scss';

interface PasswordInputProps {
  score: number,
  password: string,
  isValid: boolean
}

interface Props {}

interface State {
  displayName: string,
  email: string,
  password: string,
  confirmPassword: string,
  passwordMatchError: boolean,
}

export class SignUp extends React.Component<Props, State> {
  state: State;
  password: any;
  password2: any;

  constructor(props: Props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
      passwordMatchError: false,
    };
  }

  handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const {
      displayName,
      email,
      password,
      confirmPassword
    } = this.state;

    if (password !== confirmPassword) {
      this.setState({ passwordMatchError: true });
      return;
    } else {

    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });

      this.password.clear();
      this.password2.clear();
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        passwordMatchError: false,
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

  handlePwChange = ({score, password, isValid}: PasswordInputProps) => {
    this.setState({
      password,
    }, this.checkMatch);
  };

  handlePw2Change = ({score, password, isValid}: PasswordInputProps) => {
    this.setState({
      confirmPassword: password,
    }, this.checkMatch);
  };

  checkMatch = (): void => {
    const {
      confirmPassword,
      password,
    } = this.state;

    if (password === confirmPassword) {
      this.setState({
        passwordMatchError: false,
      });
    }
  };

  render() {
    const {
      handleChange,
      handleSubmit,
      handlePwChange,
      handlePw2Change,
      state: {
        email,
        displayName,
        password,
        confirmPassword,
        passwordMatchError,
      }
    } = this;

    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput handleChange={handleChange} name='displayName'
            value={displayName} type='text' label='Username' required/>
          <FormInput handleChange={handleChange} name='email'
            value={email} type='email' label='Email' required/>
          <PasswordFormInput handleChange={handlePwChange} name='password'
            label='Password' value={password} required
            passRef={ref => this.password = ref}/>
          <PasswordFormInput handleChange={handlePw2Change} name='confirmPassword'
            label='Confirm Password' value={confirmPassword} required
            passRef={ref => this.password2 = ref}/>
          {passwordMatchError ? <p className='error'>Passwords do not match.</p> : null}
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}
