import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Authoprovider(props) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/sidebar");
  }
 
  return (
    <div className="container justify-content-center">
      <div className="row">
        <div class="col-md-5 border">
            <h1>Login form</h1>
          <form action="">
          
            <div class="form-outline mb-3 mt-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="email"
                className="form-control"
                id="username"
                placeholder="Enter your Username"
              />
            </div>

            <div class="mt-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
              />
            </div>

            <div class="row mb-4 mt-3 ">
              <div class="col d-flex ">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example31"
                  />
                  <label class="form-check-label" for="form2Example31">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>
            </div>

            <div class="form-group mb-3 mt-3  d-none" id="otp">
              <label for="otp">
                <i class="fa fa-key"></i>
                OTP
              </label>
              <input
                type="password"
                name="otp"
                class="form-control w-75"
                placeholder="Otp"
                required
              />
            </div>

            <div class="  my-3 signup-section " id="otp1">
              <a href="#" onclick="loginWithOtp()">
                Login With Otp
              </a>
            </div>

            <div>
              <button
                type="submit"
                class="btn btn-primary mt-1"
                onClick={handleClick}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Authoprovider;
