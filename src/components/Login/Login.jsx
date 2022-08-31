import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FieldElement from "../common/Formik/Form/FieldElement";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate, Redirect } from "react-router-dom";
import styles from "../common/Formik/Form/FieldElement.module.css";

const validateLoginForm = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required 1";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

// const validationSchemaLoginForm = Yup.object().shape({
//   password: Yup.string()
//     .min(2, "Must be longer than 2 characters")
//     .required("Required 2"),
//   email: Yup.string().email("Invalid email address").required("Required email"),
//   // captcha: Yup.string().required("Required captcha"),
// });

const LoginForm = ({ login, captchaUrl }) => {
  const validationSchemaLoginForm = Yup.object().shape({
    password: Yup.string()
      .min(2, "Must be longer than 2 characters")
      .required("Required password"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Required email"),
    captcha: captchaUrl
      ? Yup.string().required("Required captcha")
      : Yup.string(),
  });
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
          captcha: "",
        }}
        // validate={validateLoginForm}
        validationSchema={validationSchemaLoginForm}
        onSubmit={(values, { setSubmitting, setStatus }) => {
          login(
            values.email,
            values.password,
            values.rememberMe,
            values.captcha,
            setStatus
          );
          setSubmitting(false);
        }}
      >
        {({ errors, touched, isValid, dirty, status }) => (
          <Form>
            {status && <span className={styles.summaryError}>{status}</span>}
            <FieldElement
              fieldType="input"
              type={"email"}
              name={"email"}
              placeholder={"e-mail"}
            />

            <FieldElement
              fieldType="input"
              name={"password"}
              type={"password"}
              placeholder={"password"}
            />
            <FieldElement
              fieldType="input"
              name={"rememberMe"}
              type="checkbox"
              id="rememberMe"
              text="remember me"
            />

            {/* <label htmlFor={"rememberMe"}> remember me </label> */}
            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && (
              <FieldElement
                fieldType="input"
                name={"captcha"}
                type={"input"}
                placeholder={"Symbold from image"}
              />
            )}
            <button type={"submit"}>Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const Login = (props) => {
  if (props.isAuth) {
    return <Navigate to="/profile" />;
  } else {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm {...props} captchaUrl={props.captchaUrl} />
      </div>
    );
  }
};

const mapStateToProsp = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProsp, { login })(Login);
