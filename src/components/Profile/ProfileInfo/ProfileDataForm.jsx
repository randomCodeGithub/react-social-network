import React from "react";
import classes from "./ProfileInfo.module.css";
import { Formik, Form } from "formik";
import FieldElement from "../../common/Formik/Form/FieldElement";
const ProfileDataForm = ({ profile, dataSubmission }) => {
  return (
    <div>
      <Formik
        initialValues={profile}
        onSubmit={(values, { setSubmitting, setStatus }) => {
          dataSubmission(values, setStatus);
          setSubmitting(false);
          // resetForm({ values: "" });
        }}
      >
        {({ values, status }) => (
          <Form>
            <div>
            {status && <span>{status}</span>}
              <button type={"submit"}>Save</button>
            </div>
            <div>
              <b>Full name: </b>
              <FieldElement
                fieldType="input"
                type={"input"}
                name={"fullName"}
                placeholder={"Full Name"}
              />
            </div>
            <div>
              <b>Looking for a job: </b>
              <FieldElement
                fieldType="input"
                type={"checkbox"}
                name={"lookingForAJob"}
                checked={values.lookingForAJob}
              />
            </div>
            <div>
              <b>My professional skills: </b>
              {profile.lookingForAJobDescription}
              <FieldElement
                fieldType={"textarea"}
                name={"lookingForAJobDescription"}
                placeholder={"My professional skills"}
              />
            </div>
            <div>
              <b>About me: </b>
              {profile.aboutMe}
              <FieldElement
                fieldType={"textarea"}
                name={"aboutMe"}
                placeholder={"About me"}
              />
            </div>
            <div>
              <b>Contacts: </b>
              {Object.keys(profile.contacts).map((key) => {
                return (
                  <div key={key} className={classes.contact}>
                    <b>{key}: </b>
                    <FieldElement
                      fieldType={"input"}
                      type={"input"}
                      name={"contacts." + key}
                      placeholder={key}
                    />
                  </div>
                );
              })}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default ProfileDataForm;
