import React from "react";

class Register extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     registerEmail: "",
  //     registerPassword: "",
  //     registerName: "",
  //   };
  // }
  state = { registerEmail: "", registerPassword: "", registerName: "" };

  onNameChange = (event) => {
    this.setState({ registerName: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ registerEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ registerPassword: event.target.value });
  };

  onSubmitRegister = () => {
    fetch("http://localhost:5000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.registerEmail,
        password: this.state.registerPassword,
        name: this.state.registerName,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <main className="register pa4 black-80 br3 shadow-3 w-50 center">
        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6">Name</label>
              <input
                onChange={this.onNameChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6">Email</label>
              <input
                onChange={this.onEmailChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6">Password</label>
              <input
                onChange={this.onPasswordChange}
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                onClick={this.onSubmitRegister}
                type="submit"
                value="Register"
              />
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={() => onRouteChange("signin")}
                className="f6 link dim black db pointer"
              >
                Sign in
              </p>
            </div>
          </fieldset>
        </div>
      </main>
    );
  }
}

export default Register;
