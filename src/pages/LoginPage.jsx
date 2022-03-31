import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/auth/actions";
import { selectToken, selectMe } from "../store/auth/selectors";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  const me = useSelector(selectMe);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      <h1>Login</h1>
      {me ? (
        <h1>You are logged in {me.name}</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <p>
            <label>
              Email:{" "}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </p>
          <p>
            <label>
              Password:{" "}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </p>
          <p>
            <button type="submit">Login</button>
          </p>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
