import React from "react";

const SignUpButton = ({ isActive }) => {
  if (isActive) {
    return (
      <button type="button" data-toggle="modal" data-target="#signUpModal" class="nav_Home rolesBTN">
        volunteer!
      </button>
    );
  } else {
    return (
      <button type="button" class="nav_Home rolesBTN btn-secondary" disabled>
        volunteer!
      </button>
    );
  }
};

export default SignUpButton;
