const Textarea = (props) => {
    // const { className, ...rest } = props;
  return (
    <div>
        {/* {console.log(className)} */}
      <textarea {...props} />
    </div>
  );
};

export default Textarea;
