/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "../css/items.css";


//single document item
class DocumentItem extends Component {
  render() {
    return (
      <div className="member" >
        <a id="document_link" onClick={() => window.open(this.props.url)}>
          <div className="member_name">
            <h3> {this.props.name}</h3>
          </div>
        </a>
      </div>
    );
  }
}

export default DocumentItem