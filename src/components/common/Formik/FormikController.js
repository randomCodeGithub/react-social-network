import Checkbox from "./FormElements/Checkbox";
import Input from "./FormElements/Input";
import Textarea from "./FormElements/Textarea";

const FormikController = (props) => {
  const { fieldType, ...rest } = props;
  switch (fieldType) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;

    default:
      return null;
  }
};

export default FormikController;
