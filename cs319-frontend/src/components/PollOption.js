import React from "react";
import Button from "@material-ui/core/Button";
import "../css/PollCreatePage.css";
import AddIcon from "@material-ui/icons/Add";
import MinusIcon from "@material-ui/icons/Remove";
import Icon from "@material-ui/core/Icon";

function addPro() {
  this.props.add();
}
const OptionList = props => {
  return props.OptionDetails.map((val, idx) => {
    let option = `option-${idx}`;
    return (
      <div className="search_form_div">
        <div className="input">
          <input
            id="option"
            placeholder="Enter poll option"
            onFocus={e => (e.target.placeholder = "")}
            onBlur={e => (e.target.placeholder = "Enter poll option")}
            autoComplete="off"
            type="text"
          />
        </div>
        {idx === 0 ? (
          <div />
        ) : (
          <Button id="deleteOptionBtn" onClick={() => props.delete(val)}>
            <MinusIcon />
          </Button>
        )}
      </div>
    );
  });
};

export default OptionList;
