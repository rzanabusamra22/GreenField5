import React from 'react'
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: false,
    }
    this.changeLogInStatus = this.changeLogInStatus.bind(this)
  }
  changeLogInStatus() {
    this.setState({
      islogin: !this.state.islogin
    })
    console.log("hello darkness my old firend ")
  }

  render() {
    return (
      <div className="test">

        <div className="row">

          <div id="signin" className="col-sm-4 left form-group">
            <form action="#">
              <h2>do you have an acount please sign in here</h2>
              <input type="email" className="form-control" name="email" placeholder="moon19 allah" />
              <input type="passowrd" className="form-control" name="password" placeholder="put the password or die" />
              <small id="emailHelp" className="form-text text-muted" style={{ "display": 'inline-block' }} onClick={this.props.toggleLogin}>have account? thanks mays</small>

            </form>
          </div>

        </div>
      </div>
    )
  }
}



export default Login;