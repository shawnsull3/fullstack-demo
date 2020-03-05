import React from 'react';
import Nav from './Nav.jsx';
import BugTile from './BugTile.jsx';
import Modal from './Modal.jsx'; 

import '../styles/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'None',
      bugs: null,
      showModal: false
    };
    this.filterHandler = this.filterHandler.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.addBug = this.addBug.bind(this);
  }

  filterHandler(filter) {
    this.setState({ filter });
  }

  componentDidMount() {
    fetch('http://localhost:3000/')
      .then(data => data.json())
      .then(data => {
        this.setState({ bugs: data})
      })
  }

  showModal() {
    this.setState({ showModal: true });
  };

  hideModal() {
    this.setState({ showModal: false });
  };

  addBug(newBug) {
    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBug)
    })
      .then( () => {
        this.componentDidMount();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  
  render() {
    return (
      <div>
        <button onClick={this.showModal}>Add Bug</button>
        <Modal 
          show={this.state.showModal} 
          handleClose={this.hideModal}
          addBug={this.addBug}
        />
        <table>
          <Nav filterHandler={this.filterHandler}/>
          {this.state.bugs ? 
            this.state.bugs.map((bug) => (
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
            )) : null
          }
        </table>
      </div>
    );
  }
}

export default App;