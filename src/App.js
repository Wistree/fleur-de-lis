import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

// createUserProfileDocument is used whenever we get back the user object
import { auth, createUserProfileDocument } from './firebase/firebase.util';

// update app component so it be able to update reducer value with the new SET_CURRENT_USER action => modifies the app with `connect` as well
import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';
// only 1 reason when one need to pass 'props' to 'super()'
// when u want to access 'this.props' in constructor
class App extends Component {

  unsubcribeFromAuth = null;

  /*
  if userAuth object is not null (sign out),

  remember what we get back from the function `createUserProfileDocument()`?
  => the userRef object

  make sure to passing back the userRef object, in this case, we name the var as userRef, you can use any other name

  we want it because we want to check it our database has updated as that reference with any new data

  very similar to onAuthStateChanged, kinda saying if the snapshot is changed
  but chance are we not, because we not updating the user ever inside of our code

  but the pro of that method will do is the moment it instanciated - the moment ur code run it , it will still send us a snapshotObject representing the data that is currently stored in ur database

  And that method is `.onSnapshot()`

  calling onSnapshot is very similar to calling onAuthStateChanged

  we get back is the snapShot object. And on that snapShot object is where we going to get the data that related to this user data that we just possibly store (if it is a new authentication) or the data of user that is already stored in ur database

  console.log the snapShot will show you the snapshotObj but not actual properties
  you need .data() method to see what ur data actually look like

  The properties object you get from the database is the main thing you need to use, but you need the id, you can get it from the snapShot objet, you can find the id of where u are currently in the userRef, as well as the id that represent the data of snapshot

  => u need those 2 things combine and call setState of `currentUser`
  in
  userRef.onSnapshot()
  */
  componentDidMount() {

    /*
    what is this.props for?

    I think I got this. the reason of this.props is because we link the App component to the Store (global state). The Store will pass the state as props to components that need it. which is why in the App component. The state in the Store become the props
    */
    const {setCurrentUser} = this.props;

    this.unsubcribeFromAuth = auth.onAuthStateChanged(
      async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth)

          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        }

        setCurrentUser(userAuth);
      }
    );
  };

  componentWillUnmount () {
    this.unsubcribeFromAuth();
  };

  // to setup the signout, make sure the header aware of when the user signin or signout by giving it the `currentUser` state

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route path = '/shop' component = {Shop} />
          <Route path = '/signin' component = {SignInAndSignUp} />
        </Switch>
      </div>
    )
  }
};

// 2nd arg of current is mapDispatchToProps which is a func that get `dispatch` props and then return an obj where...
// the props name will be watever props we want to pass in, that dispatch the new action that we try to pass, which is setCurrentUser in this case

// dispatch is a func. a way for redux to know that whatever (obi) u passing into it, is going to be an action obj that it's going to pass to every reducers
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
// connect the app the the outcome of the initial connect call using the second arg of connect which is mapDispatchTheProps
// the 1st arg is `mapStateToProp, the 2nd is mapDispatchToProps
// the 1st arg is mapStateToProp but the App doesn't need currentUser anymore so the 1st arg will be null
export default connect(null, mapDispatchToProps)(App);
