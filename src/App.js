import React, { Component } from "react";
import "./App.css";
import data, { comment, update } from "./data";
import JarJarNewsfeed from "./components/newsfeed";

class App extends Component {
  state = {
    updates: []
  };

  componentDidMount() {
    let sortedUpdates = this.getNewUpdatesArray(data.updates);
    sortedUpdates.forEach(update => {
      let sortedComments = this.sortAfterNewest(update.comments);
      update.comments = sortedComments;
    });
    this.setState({
      updates: sortedUpdates
    });
  }

  sortAfterNewest = array => {
    array.sort((a, b) => {
      if (a.created > b.created) {
        return -1;
      } else {
        return 1;
      }
    });
    return array;
  };

  getNewUpdatesArray = updates => {
    let newUpdates = [];
    updates.forEach(update => {
      let newUpdate = Object.assign({}, update);
      let newComments = [...update.comments];
      newUpdate.comments = newComments;
      newUpdates.push(newUpdate);
    });
    let sortedUpdates = this.sortAfterNewest(newUpdates);
    return sortedUpdates;
  };

  handleAddUpdate = (by, text, imageSrc, created) => {
    let newCreatedUpdate = update(by, text, imageSrc, [], created);
    let updates = this.getNewUpdatesArray(this.state.updates);
    let newUpdates = [newCreatedUpdate, ...updates];
    this.setState({
      updates: newUpdates
    });
  };

  handleAddUpdateReaction = (reaction, updateId) => {
    let newUpdates = this.getNewUpdatesArray(this.state.updates);
    newUpdates.forEach(update => {
      if (update.id === updateId && reaction === "good") {
        update.reactions.good = update.reactions.good + 1;
      } else if (update.id === updateId && reaction === "bad") {
        update.reactions.bad = update.reactions.bad + 1;
      }
    });
    this.setState({
      updates: newUpdates
    });
  };

  handleAddComment = (updateId, by, text, imageSrc, created) => {
    let newComment = comment(by, text, imageSrc, created);
    let newUpdates = this.getNewUpdatesArray(this.state.updates);
    newUpdates.forEach(update => {
      if (update.id === updateId) {
        update.comments = [newComment, ...update.comments];
      }
      let sortedComments = this.sortAfterNewest(update.comments);
      update.comments = sortedComments;
    });
    this.setState({
      updates: newUpdates
    });
  };

  handleAddCommentReaction = (reaction, commentId, updateId) => {
    let newUpdates = this.getNewUpdatesArray(this.state.updates);
    newUpdates.forEach(update => {
      if (update.id === updateId) {
        update.comments.forEach(comment => {
          if (comment.id === commentId && reaction === "good") {
            comment.reactions.good = comment.reactions.good + 1;
          } else if (comment.id === commentId && reaction === "bad") {
            comment.reactions.bad = comment.reactions.bad + 1;
          }
        });
      }
    });
    this.setState({
      updates: newUpdates
    });
  };

  render() {
    const { updates } = this.state;
    return (
      <div className="container app-container">
        <JarJarNewsfeed
          title="Jar Jar"
          updates={updates}
          onAddUpdate={this.handleAddUpdate}
          onAddComment={this.handleAddComment}
          handleAddUpdateReaction={this.handleAddUpdateReaction}
          handleAddCommentReaction={this.handleAddCommentReaction}
        />
      </div>
    );
  }
}

export default App;
