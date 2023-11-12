import React, { useState } from "react";

export default function Profile() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isUpdating, setIsUpdating] = useState();

  function changeProfilePicture() {
    console.log("Profile picture change requested...");
  }

  function handleSave(){
    setIsUpdating(!isUpdating);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="card" style={{ padding: 20 }}>
            <img
              className="card-img-top"
              src="./profile.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <button
                type="button"
                className="btn btn-primary"
                onClick={changeProfilePicture}
                disabled={isUpdating}
              >
                Change Image
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="fname">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="fname"
                  placeholder="John"
                  disabled={isUpdating}
                />
              </div>
              <div class="form-group col-md-6">
                <label for="lname">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="lname"
                  placeholder="Doe"
                  disabled={isUpdating}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                  disabled={isUpdating}
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                  disabled={isUpdating}
                />
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">Address</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
                disabled={isUpdating}
              />
            </div>
            <div class="form-group">
              <label for="inputAddress2">Address Line 2</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
                disabled={isUpdating}
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity" disabled={isUpdating}/>
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control" disabled={isUpdating}>
                  <option selected>Choose...</option>
                  <option>Maharastra</option>
                  <option>Karnataka</option>
                  <option>Uttar Pradesh</option>
                </select>
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" class="form-control" id="inputZip" disabled={isUpdating}/>
              </div>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  disabled={isUpdating}
                />
                <label class="form-check-label" for="gridCheck" disabled={isUpdating}>
                  Remember me
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary" onClick={handleSave}>
              { isSignedIn ? "Update Details" : "Save"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
