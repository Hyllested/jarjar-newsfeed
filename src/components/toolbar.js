import React from "react";
import PropTypes from "prop-types";
import "./toolbar.css";

export default class Toolbar extends React.PureComponent {
  static propTypes = {
    showNewUpdates: PropTypes.bool.isRequired,
    showAddUpdate: PropTypes.bool.isRequired,
    toogleShowNewUpdates: PropTypes.func.isRequired,
    toogleAddUpdate: PropTypes.func.isRequired
  };

  render() {
    const {
      showNewUpdates,
      toogleShowNewUpdates,
      showAddUpdate,
      toogleAddUpdate
    } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-sm toolbar-show-updates-button">
              <button
                className="btn btn-secondary"
                onClick={toogleShowNewUpdates}
              >
                {showNewUpdates ? "Show All updates" : " Show newest updates"}
              </button>
            </div>
            <div className="col-sm toolbar-add-update-button">
              <button className="btn btn-primary" onClick={toogleAddUpdate}>
                {showAddUpdate ? "Cancel new update" : "New update"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
