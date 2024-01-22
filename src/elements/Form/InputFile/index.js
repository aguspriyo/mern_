import propTypes from "prop-types";
import { useRef } from "react";
import "./index.scss";

export default function InputFile(props) {
  const { value, prepend, name, accept, append, placeholder, outerClassName, inputClassName } = props;
  const refInputFile = useRef(null);
  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input type="file" name={name} accept={accept} value={value} className="d-none" placeholder={placeholder} onChange={props.onChange} ref={refInputFile} />
        <input onClick={() => refInputFile.current.click()} defaultValue={value} placeholder={placeholder} className={["form-control", inputClassName].join(" ")} />
        {append && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
    </div>
  );
}

InputFile.defaultProps = {
  placeholder: "Browse a file...",
};

InputFile.propTypes = {
  name: propTypes.string.isRequired,
  accept: propTypes.string.isRequired,
  value: propTypes.isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};
