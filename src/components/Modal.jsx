import React from 'react'

const Modal = ({ handleClose, show }) => {

    return (
      show ? 
      <div className='modal'>
        <section className="modal-main">
          <table>
            <tr>
                <th>Description</th>
                <th>Reported By</th>
                <th>Assigned To</th>
                <th>Threat Level</th>
            </tr>
            <tbody>
                <tr className="bugTile">
                <td><input type='text' id='description' placeholder='Description...'></input></td>
                <td><input type='text' id='reporter' placeholder='Your name...'></input></td>
                <td><input type='text' id='assignedTo' placeholder='Assigned to...'></input></td>
                <td><input type='text' id='threatLevel' placeholder='Threat Level...'></input></td>
                </tr>
            </tbody>
            <button onClick={handleClose}>close</button>
          </table>
        </section>
      </div>
      : null
    );
};

export default Modal;