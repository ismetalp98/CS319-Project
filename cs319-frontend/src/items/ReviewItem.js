/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "../csss/items.css";
import Popup from 'reactjs-popup';



class ReviewItem extends Component {
  handleLogin = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Popup
        trigger={<div className="review_div" onClick={this.handleLogin}>
          <div className="review_texts">
            <h2 id="review_name"> {this.props.name}</h2>
            <h3 id="review_content"> {this.props.review}</h3>
          </div>
        </div>}
        modal
        nested
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
</button>
            <div className="header">{this.props.name}'s Review </div>
            <div className="review_content_popup">
              <ul id="peerReviewMembers">
                {this.props.review}
              </ul>
            </div>
            <div className="actions">


            </div>
          </div>
        )}
      </Popup>

    );
  }
}

export default ReviewItem

