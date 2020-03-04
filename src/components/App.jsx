import React from 'react';
import Nav from './Nav.jsx';
import BugTile from './BugTile.jsx';
import exampleData from '../example-data/exampleData';

import '../styles/App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'None',
      bugs: exampleData,
    };
    this.filterHandler = this.filterHandler.bind(this);
  }

  filterHandler(filter) {
    this.setState({ filter });
  }

  
  render() {
    return (
      <table>
        <Nav
          filterHandler={this.filterHandler}
        />
        {this.state.bugs.map((bug) => (
          this.state.filter === 'None' ? (
            <BugTile
              bugName={bug.bugName}
              bugDescription={bug.bugDescription}
              reportedBy={bug.reportedBy}
              createdDate={bug.createdDate}
              assignedTo={bug.assignedTo}
              threatLevel={bug.threatLevel}
              key={bug.bugName}
            />
          ) : bug.threatLevel === this.state.filter ? (
            <BugTile
              bugName={bug.bugName}
              bugDescription={bug.bugDescription}
              reportedBy={bug.reportedBy}
              createdDate={bug.createdDate}
              assignedTo={bug.assignedTo}
              threatLevel={bug.threatLevel}
              key={bug.bugName}
            />
          ) : null
        ))}

      </table>
    );
  }
}

export default App;