import React from 'react';

class TaskList extends React.Component {

    render() {
        return (
            <div className="field">
              {this.props.children}
            </div>
        );
    }
}

export default TaskList;