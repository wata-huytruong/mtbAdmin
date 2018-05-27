import React from 'react';
import { Redirect } from 'react-router-dom';
import LANGUAGES from '../../core/languages';

const ENG = LANGUAGES.ENG
class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    handleLogin = () => {
        if (!this.email.value || !this.password.value)
            return;
        this.props.login(this.email.value, this.password.value);
    }

    render() {
        if (localStorage.access_token) {
            const { from } = this.props.location.state || { from: { pathname: "/" } };
            return <Redirect to={from} />;
        }
        return (
            <div>
                {this.props.loading ? <div className='container'>
                    <div className='col-sm-6 offset-sm-3 ' style={{
                        top: '30vh',
                        textAlign: 'center'
                    }}>
                        <h1>{ENG.MOBILE_TECH_RX_ADMIN_PORTAL}</h1>
                        <h2>{ENG.LOGGING_IN}</h2>
                        <div className='spinner'>
                            <div className='bounce1' />
                            <div className='bounce2' />
                            <div className='bounce3' />
                        </div>
                    </div>
                </div> :
                    <div className="login-page">
                        <div className="login-form">
                            <div className="menu-logo"></div>
                            <p><strong>{ENG.MOBILE_TECH_RX}</strong></p>
                            <p><strong>{ENG.BACK_OFFICE_ADMIN_PORTAL_LOGIN}</strong></p>
                            <div className="form-group">
                                <label htmlFor="email">{ENG.EMAIL}:</label>
                                <input type="email" ref={input => this.email = input} className="form-control" id="email" placeholder="Enter email" name="email" required="" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pwd">{ENG.PASSWORD}:</label>
                                <input type="password" ref={input => this.password = input} className="form-control" id="pwd" placeholder="Enter password" name="pwd" required="" />
                            </div>
                            <a href="https://mobiletechrx.com/forgot">{ENG.FORGOT_PASSWORD}</a>
                            <button onClick={this.handleLogin} className="btn btn-default">{ENG.LOGIN}</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Login;