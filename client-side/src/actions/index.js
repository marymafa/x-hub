import axios from "axios";

export function getLogin(user) {
  return {
    type: "LOGIN",
    payload: user
  };
}
