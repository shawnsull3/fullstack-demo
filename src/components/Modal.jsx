import React from 'react'

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bugDescription: '',
            reportedBy: '',
            assignedTo: '',
            threatLevel: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

   handleChange(e) {
    e.preventDefault;
    this.setState({
        [e.target.id]: e.target.value
    })
   }

  render() {
      return (
          this.props.show ? 
          <div className='modal'>
            <section className="modal-main">
              <table>
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Reported By</th>
                    <th>Assigned To</th>
                    <th>Threat Level</th>
                </tr>
                </thead>
                <tbody>
                    <tr className="bugTile">
                    <td><input onChange={(e) => this.handleChange(e)} type='text' id='bugDescription' placeholder='Description...'></input></td>
                    <td><input onChange={(e) => this.handleChange(e)} type='text' id='reportedBy' placeholder='Your name...'></input></td>
                    <td><input onChange={(e) => this.handleChange(e)} type='text' id='assignedTo' placeholder='Assigned to...'></input></td>
                    <td><input onChange={(e) => this.handleChange(e)} type='text' id='threatLevel' placeholder='Threat Level...'></input></td>
                    </tr>
                </tbody>
              </table>
              <button onClick={() => {this.props.handleClose(), this.props.addBug(this.state)} }>close</button>
            </section>
          </div>
          : null
      )
  } 

};

export default Modal;