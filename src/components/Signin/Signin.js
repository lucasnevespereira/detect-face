import React from "react";

const Signin = ({ onRouteChange }) => {
  return (
    <main className="signin pa4 black-80 br3 shadow-3 w-50 center">
      <form className="measure center">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">Sign In</legend>
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
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3">
            <a
              onClick={() => onRouteChange("register")}
              className="f6 link dim black db pointer"
            >
              Register
            </a>
          </div>
        </fieldset>
      </form>
    </main>
  );
};

export default Signin;
