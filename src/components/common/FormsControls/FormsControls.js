import React from "react";
export const Textarea = ({ field, form, ...props }) => {
  return (
    <div>
      <textarea {...field} {...form} {...props} />
      {console.log(props)}
    </div>
  );
};
