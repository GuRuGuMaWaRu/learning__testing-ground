import React from "react";
import { userType } from "./types";

function User({ user }) {
  return (
    <div>
      <h1>
        {user.firstName} {user.lastName}
      </h1>
    </div>
  );
}

User.propTypes = {
  user: userType.isRequired
};

export default User;
