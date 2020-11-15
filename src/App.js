import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import SignInAndSignUp from "./pages/SignInAndSingUp/SignInAndSignUp";
import Header from "./components/Header/Header";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/userActions";
import { selectCurrentUser } from "./redux/user/userSelectors";
import "./App.css";

const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    setCurrentUser();

    const unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot =>
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        );
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => unsubscribeFormAuth();
  }, [setCurrentUser]);


  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" exact component={CheckoutPage} />
        <Route
          exact
          path="/signIn"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
