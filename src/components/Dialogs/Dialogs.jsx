import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updateNewMessageTextCreator,
} from "../../redux/dialogs-reducer";
import { Redirect } from "react-router-dom";
import FieldElement from "../common/Formik/Form/FieldElement";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let messagesElements = state.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  // if(!props.isAuth) return <Redirect to="/login" />

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {/* <DialogItem name={dialogs[0].name} id={dialogs[0].id} />
        <DialogItem name={dialogs[1].name} id={dialogs[1].id} />
        <DialogItem name={dialogs[2].name} id={dialogs[2].id} /> */}
        {dialogsElements}
        {/* <DialogItem name="Artur" id="1" />
        <DialogItem name="Edgar" id="2" />
        <DialogItem name="Vadim" id="3" /> */}
      </div>
      <div className={classes.messages}>
        {/* <Message message={messages[0].message} />
        <Message message={messages[1].message} />
        <Message message={messages[2].message} /> */}
        {messagesElements}
        <AddMessageForm sendMessage={props.sendMessage} />
        {/* <Message message="Hi" />
        <Message message="How are you?" />
        <Message message="Bye!" /> */}
      </div>
    </div>
  );
};

const validationSchemaForm = Yup.object().shape({
  newMessageBody: Yup.string()
    .max(30, "Max length 30")
    .required("Required field"),
});

const AddMessageForm = (props) => {
  let addNewMessage = (values) => {
    props.sendMessage(values);
  };
  return (
    <div>
      <Formik
        initialValues={{
          newMessageBody: "",
        }}
        validationSchema={validationSchemaForm}
        onSubmit={(values, { resetForm }) => {
          addNewMessage(values.newMessageBody);
          resetForm({ values: "" });
        }}
      >
        {() => (
          <Form>
            <div>
              <FieldElement
                fieldType={"textarea"}
                name={"newMessageBody"}
                placeholder={"Enter your message"}
              />
            </div>
            <div>
              <button type={"submit"}>Add message</button>
              {/* <button onClick={onSendMessageClick}>Add message</button> */}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Dialogs;
