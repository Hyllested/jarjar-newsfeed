import React from "react";
import PropTypes from "prop-types";
import ViewUpdate from "./view-update";
import AddUpdate from "./add-update";
import Header from "./header";
import Toolbar from "./toolbar";

const NEW_UPDATES_LENGTH = 3;

export default class JarJarNewsfeed extends React.Component {
  static propTypes = {
    onAddUpdate: PropTypes.func.isRequired,
    updates: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired
      })
    ).isRequired,
    onAddComment: PropTypes.func.isRequired
  };

  state = {
    showAddUpdate: false,
    showNewUpdates: true
  };

  toogleAddUpdate = () => {
    this.setState({
      showAddUpdate: !this.state.showAddUpdate
    });
  };

  closeAddUpdate = () => {
    this.setState({
      showAddUpdate: false
    });
  };

  toogleShowNewUpdates = () => {
    this.setState({
      showNewUpdates: !this.state.showNewUpdates
    });
  };

  renderUpdates() {
    const {
      updates,
      onAddComment,
      handleAddUpdateReaction,
      handleAddCommentReaction
    } = this.props;
    let newUpdates = [...updates.slice(0, NEW_UPDATES_LENGTH)];
    let updatesToRender = this.state.showNewUpdates ? newUpdates : updates;
    return (
      <div>
        {updatesToRender
          .sort((a, b) => {
            if (a.created > b.created) {
              return -1;
            } else {
              return 1;
            }
          })
          .map(update => {
            return (
              <ViewUpdate
                key={update.id}
                update={update}
                goodReactions={update.reactions.good}
                badReactions={update.reactions.bad}
                onAddComment={onAddComment}
                handleAddUpdateReaction={handleAddUpdateReaction}
                handleAddCommentReaction={handleAddCommentReaction}
              />
            );
          })}
      </div>
    );
  }

  render() {
    const { onAddUpdate } = this.props;
    return (
      <div>
        <Header />
        <Toolbar
          showAddUpdate={this.state.showAddUpdate}
          showNewUpdates={this.state.showNewUpdates}
          toogleAddUpdate={this.toogleAddUpdate}
          toogleShowNewUpdates={this.toogleShowNewUpdates}
        />
        {this.state.showAddUpdate ? (
          <AddUpdate onAddUpdate={onAddUpdate} close={this.closeAddUpdate} />
        ) : null}
        {this.renderUpdates()}
      </div>
    );
  }
}
