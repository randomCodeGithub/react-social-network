import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FieldElement from "../common/Formik/Form/FieldElement";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import styles from "../common/Formik/Form/FieldElement.module.css"

const validateLoginForm = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required 1";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const validationSchemaLoginForm = Yup.object().shape({
  password: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .required("Required 2"),
  email: Yup.string().email("Invalid email address").required("Required email"),
});

const LoginForm = (props) => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
        }}
        // validate={validateLoginForm}
        validationSchema={validationSchemaLoginForm}
        onSubmit={(values,  { setSubmitting, setStatus }) => {
          props.login(values.email, values.password, values.rememberMe, setStatus);
          setSubmitting(false);
        }}
      >
        {({ errors, touched, isValid, dirty, status }) => (
          <Form>
            {status && <span className={styles.summaryError}>{status}</span>}
            <div>
              <FieldElement
                fieldType="input"
                type={"email"}
                name={"email"}
                placeholder={"e-mail"}
              />
            </div>

            <div>
              <FieldElement
                fieldType="input"
                name={"password"}
                type={"password"}
                placeholder={"password"}
              />
            </div>

            <div>
              <FieldElement
                fieldType="input"
                name={"rememberMe"}
                type="checkbox"
                id="rememberMe"
              />

              <label htmlFor={"rememberMe"}> remember me </label>
            </div>

            <button type={"submit"}>Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const Login = (props) => {
  if (props.isAuth) {
    return <Redirect to="/profile" />;
  } else {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm {...props} />
      </div>
    );
  }
};

const mapStateToProsp = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProsp, { login })(Login);
