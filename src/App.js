import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';


import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css'


import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selectors'
import {connect} from 'react-redux';


import {auth, createUserProfileDocument} from  './firebase/firebase.utils';
import { setCurrentUser } from "./redux/user/user.actions";


class App extends React.Component{
 

  unsubscribe = null;

  componentDidMount(){

    const { setCurrentUser } = this.props;

    this.unsubscribe = auth.onAuthStateChanged(async userAuth =>{
     
      if(userAuth){
         const userRef = await createUserProfileDocument(userAuth);

         userRef.onSnapshot(snapShot =>{
          setCurrentUser({
             currentUser : {
               id: snapShot.id, 
             ...snapShot.data()
             }
          }, () => console.log(this.state) ); 
        });

        // console.log(this.state);
        
      }

      setCurrentUser( userAuth);
      


    })
  }
 

  componentWillUnmount() {
    this.unsubscribe();
  }

  render(){
    return (
      <div className="App">
        <Header /> 
        <Switch>
            <Route exact path='/' component ={ HomePage } />
            <Route path='/shop' component ={ ShopPage } />
            <Route exact path='/checkout' component ={ CheckoutPage } />
            <Route 
              exact path='/signin'
              render={() =>
                this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage /> ) 
              } 
             />
        </Switch>
         
      </div>
    );
  }
}


const mapStateToProps = (state) => createStructuredSelector({
  currentUser: selectCurrentUser
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps )(App);
