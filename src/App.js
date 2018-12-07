import React, { Component } from "react";
import "./App.css";
import data, { comment, update } from "./data";
import JarJarNewsfeed from "./components/newsfeed";

class App extends Component {
  state = {
    updates: []
  };

  componentDidMount() {
    this.setState({
      updates: data.updates
    });
  }

  handleAddUpdate = (by, text, imageSrc, created) => {
    let newUpdate = update(by, text, imageSrc, [], created);
    let updates = [newUpdate, ...this.state.updates];
    this.setState({
      updates: updates
    });
  };

  handleAddUpdateReaction = (reaction, updateId) => {
    let updates = [...this.state.updates];
    updates.forEach(update => {
      if (update.id === updateId && reaction === "good") {
        update.reactions.good = update.reactions.good + 1;
      } else if (update.id === updateId && reaction === "bad") {
        update.reactions.bad = update.reactions.bad + 1;
      }
    });
    this.setState({
      updates: updates
    });
  };

  handleAddComment = (updateId, by, text, imageSrc, created) => {
    let newComment = comment(by, text, imageSrc, created);
    let updates = [...this.state.updates];
    updates.forEach(update => {
      if (update.id === updateId) {
        update.comments = [newComment, ...update.comments];
      }
    });
    this.setState({
      updates: updates
    });
  };

  handleAddCommentReaction = (reaction, commentId, updateId) => {
    let updates = [...this.state.updates];
    updates.forEach(update => {
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
      updates: updates
    });
  };

  render() {
    const { updates } = this.state;
    return (
      <div className="container" style={{ backgroundColor: "transparent" }}>
        {/* Display the newsfeed */}
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
