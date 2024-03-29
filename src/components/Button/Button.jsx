import React from "react";

const Button = (props) => {
  const { children } = props;

  return (
    <>
      <button type="button" className="btn btn-primary">{children}</button>
    </>
  );
};

export default Button;
