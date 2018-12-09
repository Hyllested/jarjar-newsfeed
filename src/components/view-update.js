import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import CommentsList from "./comments-list";
import AddComment from "./add-comment";
import AddReactions from "./add-reactions";
import "./view-update.css";

export default class ViewUpdate extends React.Component {
  static propTypes = {
    update: PropTypes.object.isRequired,
    onAddComment: PropTypes.func.isRequired,
    goodReactions: PropTypes.number.isRequired,
    badReactions: PropTypes.number.isRequired,
    handleAddUpdateReaction: PropTypes.func.isRequired,
    handleAddCommentReaction: PropTypes.func.isRequired
  };

  state = {
    showComments: false,
    showAddComment: false
  };

  toogleComments = () => {
    this.setState({
      showComments: !this.state.showComments
    });
  };

  toogleAddComments = () => {
    this.setState({
      showAddComment: !this.state.showAddComment
    });
  };

  closeAddComment = () => {
    this.setState({
      showAddComment: false
    });
  };

  showComments = () => {
    this.setState({
      showComments: true
    });
  };

  render() {
    const {
      onAddComment,
      goodReactions,
      badReactions,
      handleAddUpdateReaction,
      handleAddCommentReaction,
      update
    } = this.props;
    const { by, text, imageSrc, created, comments, id } = update;
    return (
      <div className="card card-body view-update-container">
        <div className="row view-update-top-container">
          <div className="view-update-personal-details">
            <div className="view-update-image-container">
              <img src={imageSrc} alt="avatar" className="view-update-image" />
            </div>
            <div className="view-update-by-container">
              <p>{`${by}`}</p>
            </div>
          </div>
          <AddReactions
            goodReactions={goodReactions}
            badReactions={badReactions}
            handleAddReaction={handleAddUpdateReaction}
            id={id}
          />
        </div>
        <p className="view-update-text">{`${text}`}</p>
        <div className="row view-update-bottom-container">
          <div className="col-sm">
            <p className="text-muted">
              <small>{`${moment(created).fromNow()}`}</small>
            </p>
          </div>
          <div className="col-sm">
            <button
              className="btn btn-secondary view-update-add-comment-button"
              onClick={this.toogleAddComments}
            >
              {this.state.showAddComment ? "Cancel comment" : "New comment"}
            </button>
            <button
              className="btn btn-secondary view-update-comment-button"
              onClick={this.toogleComments}
            >
              {this.state.showComments ? "Hide comments" : "Show comments"}
            </button>
          </div>
        </div>
        {this.state.showAddComment ? (
          <AddComment
            onAddComment={onAddComment}
            close={this.closeAddComment}
            updateId={id}
            showComments={this.showComments}
          />
        ) : null}
        {this.state.showComments ? (
          <CommentsList
            updateId={id}
            comments={comments}
            handleAddCommentReaction={handleAddCommentReaction}
          />
        ) : null}
      </div>
    );
  }
}
