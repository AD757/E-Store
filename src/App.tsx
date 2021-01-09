import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {Dispatch} from 'redux';
import { connect } from 'react-redux';

import {HomePage, Page404, SignInAndSignUp, Checkout, ShopPage} from './pages';
import {Header} from './components';

import firebase, { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser, clearCurrentUser, selectCurrentUser, RootState} from './redux';
import { User } from './types';

interface UserSnapShot {
  displayName: string,
  email: string,
  createdAt: {
    seconds: number,
    nanoseconds: number,
  }
}

interface StateProps {
  currentUser: User | null,
}

interface DispatchProps {
  setCurrentUser: (user: User) => void,
  clearCurrentUser: () => void,
}

type Props = DispatchProps & StateProps;

class App extends React.Component<Props> {
  unsubscribeFromAuth: Function;

  constructor(props: Props) {
    super(props);

    this.unsubscribeFromAuth = () => {};
  }

  componentDidMount(): void {
    const {
      setCurrentUser,
      clearCurrentUser,
    } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef?.onSnapshot((snapShot: firebase.firestore.DocumentSnapshot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data() as UserSnapShot,
          });
        });
      } else {
        clearCurrentUser();
      }
    });
  }

  componentWillUnmount(): void {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className=''>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/checkout' component={Checkout}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/signin'
            render={() => (this.props.currentUser ? <Redirect to='/'/> : <SignInAndSignUp/>)}
          />
          <Route component={Page404}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  setCurrentUser: (user: User) => dispatch(setCurrentUser(user)),
  clearCurrentUser: () => dispatch(clearCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
