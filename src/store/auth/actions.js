import axios from "axios";
import { API_URL } from "../../config";

export function tokenReceived(token) {
  return {
    type: "auth/tokenReceived",
    payload: { token: token },
  };
}

export function meReceived(me) {
  return {
    type: "auth/meReceived",
    payload: { me: me },
  };
}

export function login(email, password) {
  return async function loginThunk(dispatch, getState) {
    try {
      //get the token from database
      const loginResponse = await axios.post(`${API_URL}/login`, {
        email: email,
        password: password,
      });

      const token = loginResponse.data.jwt;
      localStorage.setItem("token", token);
      console.log(token);
      dispatch(tokenReceived(token));

      //get me
      const meResponse = await axios.get(`${API_URL}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const me = meResponse.data;
      console.log(me);
      dispatch(meReceived(me));
    } catch (error) {
      console.log("Something went wrong", error.message);
    }
  };
}

// console.log(
//   "TODO: make login request, get an access token",
//   email,
//   password
// );
