import { useState } from 'react'; 

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
 const [showModal, setShowModal] = useState();

 function showModalHandler() {
     setShowModal(true);
 }

 function closeModalHandler() {
     setShowModal(false);
 }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
             <button className='btn' onClick={showModalHandler}>
               Delete
             </button>
            </div>
            {showModal && <Backdrop onCancel={closeModalHandler} />}
            {showModal && <Modal text='Are u sure?' onClose={closeModalHandler} /> }
        </div>
    );
}

export default Todo;