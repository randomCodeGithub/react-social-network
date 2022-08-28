import { Field } from "formik";
import FormikController from "../FormikController";
import styles from "../Form/FieldElement.module.css";
const FieldElement = (props) => {
  const { name, ...rest } = props;
  return (
    <div>
      <Field name={name} component={FieldElementComponent} data={rest} />
    </div>
  );
};

const FieldElementComponent = ({
  data,
  field,
  form: { touched, errors },
  meta,
}) => {
  const { fieldType, ...rest } = data;
  const errorExist = touched[field.name] && errors[field.name];
  return (
    <div className={errorExist ? styles.error : ""}>
      <FormikController {...field} {...data} />
      {errorExist && <span>{errors[field.name]}</span>}
    </div>
  );
};

// export const createField = (fieldType, name, placeholder, props) => {
//   return (
//     <FieldElement
//       fieldType={fieldType}
//       name={name}
//       placeholder={placeholder}
//       {...props}
//     />
//   );
// };

export default FieldElement;
