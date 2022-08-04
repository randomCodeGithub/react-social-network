// import { ErrorMessage, Field } from "formik";
import { FormError } from "../../FormsControls/FormError";
import FieldElement from "../Form/FieldElement";

const TextElement = (props) => {
//   const { name, control, placeholder, ...rest } = props;
  return (
    <div>
        <FieldElement {...props} />
      {/* <div>
        <Field as={control} name={name} placeholder={placeholder} />
      </div>
      <ErrorMessage name={name}>{FormError}</ErrorMessage> */}
    </div>
  );
};

export default TextElement;
