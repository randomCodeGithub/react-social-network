import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { FormError } from "../../common/FormsControls/FormError";
import { Textarea } from "../../common/FormsControls/FormsControls";
import FormikController from "../../common/Formik/FormikController";
import FieldElement from "../../common/Formik/Form/FieldElement";

const MyPosts = (props) => {
  // let postData = [
  //   { id: 1, message: "hi there", likesCount: 14 },
  //   { id: 2, message: "hi bro", likesCount: 3 },
  // ];

  // let postsElements = postData.map((post) => (
  //   <Post message={post.message} likeCount={post.likesCount} />
  // ));

  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likeCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  return (
    <div className={classes.postBlock}>
      <h3>my post</h3>
      <div>
        <AddNewPostForm addPost={props.addPost} />
      </div>
      <div className={classes.posts}>
        {/* <Post
          message={postData[0].message}
          likeCount={postData[0].likesCount}
        />
        <Post
          message={postData[1].message}
          likeCount={postData[1].likesCount}
        /> */}
        {postsElements}
        {/* <Post message="hi there" likeCount="14" />
        <Post message="hi bro" likeCount="3" /> */}
      </div>
    </div>
  );
};

const validationSchemaForm = Yup.object().shape({
  newPostBody: Yup.string()
    .max(30, "Max length 30")
    .required("Field is required!"),
});

const AddNewPostForm = (props) => {
  let addNewPost = (values) => {
    props.addPost(values);
  };
  return (
    <div>
      <Formik
        initialValues={{
          newPostBody: "",
        }}
        validationSchema={validationSchemaForm}
        onSubmit={(values, { resetForm }) => {
          addNewPost(values.newPostBody);
          resetForm({ values: "" });
        }}
      >
        {(props) => (
          <Form>
            <FieldElement
              fieldType={"textarea"}
              name={"newPostBody"}
              placeholder={"Enter your post"}
            />
            <div>
              <button type={"submit"}>Add post</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyPosts;
