import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Switch, BrowserRouter, Route, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/preloader";
import store from "./redux/redux-store";
import {WithSuspense} from "./hoc/withSuspense";
import {Redirect} from "react-router-dom";
import ProfileContainer  from'./components/Profile/ProfileContainer'

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer' ));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer' ));
const LoginPage = React.lazy(() => import('./components/Login/Login' ));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/'
                               render={ () => <Redirect to={"/profile"}/> }/>

                        <Route path='/dialogs'
                               render={WithSuspense(DialogsContainer)}/>

                        <Route path='/profile/:userId?'
                               render={() =>{return <ProfileContainer/>}}/>

                        <Route path='/users'
                               render={WithSuspense(UsersContainer)}/>

                        <Route path='/login'
                               render={WithSuspense(LoginPage)}/>

                        <Route path='/*'
                               render={() => <h1 align="center">404 NOT FOUND</h1>}/>
                    </Switch>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return <BrowserRouter /*basename={process.env.PUBLIC_URL}*/>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp