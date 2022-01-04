import classes from "./Auth.module.css";
import { useRef } from "react";
import { authActions } from "../store/index-redux";
import { useDispatch } from "react-redux";

const Auth = () => {
  const emailInputRef = useRef();

  const passwordInputRef = useRef();

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const email = emailInputRef.current.value;

    const password = passwordInputRef.current.value;

    if (email === "" && password === "") {
      return;
    }

    dispatch(authActions.onLogin());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordInputRef} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
