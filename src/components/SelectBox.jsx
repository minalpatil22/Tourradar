import React from "react";
import ReactDOM from "react-dom";
import { Form } from "semantic-ui-react";
import PropTypes from "prop-types";

export default class SelectBox extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e, data) {
    const { onDropDownChange } = this.props;
    onDropDownChange(data);
  }
  render() {
    const { options, label, value } = this.props;
    return (
      <div className="main-container">
        <Form.Select
          label={label}
          selection
          options={options}
          value={value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

SelectBox.PropTypes = {
  isValid: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};
SelectBox.defaultProps = {
  isValid: "false",
  label: ""
};
