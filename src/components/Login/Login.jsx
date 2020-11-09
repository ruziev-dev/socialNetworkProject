import React from 'react';
import {Field, reduxForm} from "redux-form";
import s from './Login.module.css'
import {Input} from "../common/FormsControl/FormsControls";
import {maxLenghtCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import Redirect from "react-router-dom/es/Redirect";


const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth === true) {
        return <Redirect to={"/profile"}/>
    }
    return <div className={s.loginModule}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}
let maxLenght15 = maxLenghtCreator(30);

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder={"Login"}
                           validate={[required, maxLenght15]}
                           name={"email"}
                           component={Input}/>
                </div>
                <div>
                    <Field placeholder={"Password"} type={"password"}
                           validate={[required, maxLenght15]}
                           name={"password"}
                           component={Input}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
                </div>
                {error && <div className={s.formSummaryError}> {error}</div>}

                {captchaUrl &&
                <div className={s.captcha}>
                    <img src={captchaUrl}/>
                    <Field validate={required}
                           name={"captcha"}
                           component={Input}/>
                </div>}

                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);