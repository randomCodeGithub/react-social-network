const Input = (props) => {
  const { text, ...rest } = props;
  return (
    <div>
      <input {...rest} />
      {text && <label htmlFor={props.name}> {text} </label>}
    </div>
  );
};

export default Input;
