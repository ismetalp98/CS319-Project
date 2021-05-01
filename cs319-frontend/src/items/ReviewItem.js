/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from "react";
import "../csss/items.css";



class ReviewItem extends Component {
  handleLogin = e => {
    e.preventDefault();

    
  };
  render() {
    return (
      <div  className="member" onClick={this.handleLogin}>      
          <div  className="member_name">      
            <h3> {this.props.name}</h3>  
            <h3> {this.props.review}</h3>  
          </div>
      </div>
    );
  }
}

export default ReviewItem