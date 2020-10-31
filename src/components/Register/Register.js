import React from "react";

const Register = ({ onRouteChange }) => {
  return (
    <main className="pa4 black-80 br3 shadow-3 w-50 center">
      <form className="measure center">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">Register</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6">Name</label>
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6">Email</label>
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="email"
              name="email-address"
              id="email-address"
            />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6">Password</label>
            <input
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              onClick={() => onRouteChange("home")}
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
      </form>
    </main>
  );
};

export default Register;
