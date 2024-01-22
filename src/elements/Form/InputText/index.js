import propTypes from "prop-types";
import { useState } from "react";
import "./index.scss";

export default function InputText(props) {
  const { value, type, prepend, name, append, placeholder, outerClassName, inputClassName, errorResponse } = props;

  const [Haserror, setHasError] = useState(null);
  let pattern = "";
  if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (type === "tel") pattern = "[0-9]*";

  const onChange = (event) => {
    const target = {
      target: {
        name: name,
        value: event.target.value,
      },
    };
    if (type === "email") {
      if (!pattern.test(event.target.value)) setHasError(errorResponse);
      else setHasError(null);
    }
    if (type === "tel") {
      if (event.target.validity.valid) props.onChange(target);
    } else {
      props.onChange(target);
    }
  };

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input type={type} name={name} pattern={pattern} value={value} className={["form-control", inputClassName].join(" ")} placeholder={placeholder} onChange={onChange} />
        {append && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
        {Haserror && <div className="error-helper">{Haserror}</div>}
      </div>
    </div>
  );
}

InputText.defaultProps = {
  type: "text",
  pattern: "",
  placeholder: "Please type here...",
  errorResponse: "Please match the requested format.",
};

InputText.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  type: propTypes.string,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};
