/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from "react";
import "../csss/items.css";



class DocumentItem extends Component {
  handleLogin = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div  className="member" onClick={this.handleLogin}>
        <a id="document_link" onClick={()=> window.open(this.props.url)}>
          <div  className="member_name">
          
            <h3> {this.props.name}</h3>
            
          </div>
          </a>
      </div>
    );
  }
}

export default DocumentItem