import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import AddReactions from "./add-reactions";

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
      <div className="card" style={{ backgroundColor: "#efebe9" }}>
        <div className="container" style={{ marginTop: 15 }}>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: 15
              }}
            >
              <div>
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
            <div style={{ paddingRight: 15 }}>
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
      </div>
    );
  }
}
