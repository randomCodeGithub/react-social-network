export const textareaValidation = (maxLenght,values) => {
  let error;
  if (!values.newPostBody) {
    error = "Required";
  } else if (values.newPostBody.length < 30) {
    error = "Max length is 30";
  }

  return error;
};
