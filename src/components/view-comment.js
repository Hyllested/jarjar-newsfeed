import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import AddReactions from "./add-reactions";
import "./view-comment.css";

export default class ViewComment extends React.PureComponent {
  static propTypes = {
    by: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
    goodReactions: PropTypes.number.isRequired,
    badReactions: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
  };

  handleAddCommentReaction = (reaction, commentId) => {
    const { handleAddCommentReaction, updateId } = this.props;
    handleAddCommentReaction(reaction, commentId, updateId);
  };

  render() {
    const {
      by,
      text,
      imageSrc,
      created,
      goodReactions,
      badReactions,
      id
    } = this.props;
    return (
      <div className="card card-body view-comment-container">
        <div className="row view-comment-top-container">
          <div className="view-comment-user-details">
            <div>
              <img src={imageSrc} alt="avatar" className="view-comment-image" />
            </div>
            <div className="view-comment-by-container">
              <p>{`${by}`}</p>
            </div>
          </div>
          <div className="view-comment-reactions-container">
            <AddReactions
              goodReactions={goodReactions}
              badReactions={badReactions}
              handleAddReaction={this.handleAddCommentReaction}
              id={id}
            />
          </div>
        </div>

        <p>{text}</p>
        <p className="text-muted">
          <small>{moment(created).fromNow()}</small>
        </p>
      </div>
    );
  }
}
