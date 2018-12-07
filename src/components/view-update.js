import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import CommentsList from "./comments-list";
import AddComment from "./add-comment";
import AddReactions from "./add-reactions";

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
      <div className="card" style={{ marginTop: 10, paddingTop: 15 }}>
        <div className="container">
          <div
            className="row"
            style={{ justifyContent: "space-between", paddingRight: 15 }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ paddingLeft: 15 }}>
                <img
                  src={imageSrc}
                  alt="avatar"
                  style={{ width: 30, height: 30, borderRadius: 4 }}
                />
              </div>
              <div style={{ paddingLeft: 10 }}>
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
          <p style={{ marginBottom: 0, paddingTop: 10 }}>{`${text}`}</p>

          <div className="row" style={{ paddingBottom: 15, paddingTop: 15 }}>
            <div className="col-sm">
              <p className="text-muted">
                <small>{`${moment(created).fromNow()}`}</small>
              </p>
            </div>
            <div className="col-sm">
              <button
                className="btn btn-secondary"
                style={{ float: "right", marginLeft: 10 }}
                onClick={this.toogleAddComments}
              >
                {this.state.showAddComment ? "Cancel comment" : "New comment"}
              </button>

              <button
                className="btn btn-secondary"
                style={{ float: "right" }}
                onClick={this.toogleComments}
              >
                {this.state.showComments ? "Hide comments" : "Show comments"}
              </button>
            </div>
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
