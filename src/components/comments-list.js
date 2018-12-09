import React from "react";
import PropTypes from "prop-types";
import ViewComment from "./view-comment";
import "./comments-list.css";

export default class CommentsList extends React.Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    updateId: PropTypes.string.isRequired,
    handleAddCommentReaction: PropTypes.func.isRequired
  };

  render() {
    const { comments, updateId, handleAddCommentReaction } = this.props;
    return (
      <div className="comments-list-container">
        {comments
          .sort((a, b) => {
            if (a.created > b.created) {
              return -1;
            } else {
              return 1;
            }
          })
          .map(comment => (
            <ViewComment
              key={comment.id}
              handleAddCommentReaction={handleAddCommentReaction}
              updateId={updateId}
              {...comment}
              goodReactions={comment.reactions.good}
              badReactions={comment.reactions.bad}
            />
          ))}
      </div>
    );
  }
}
