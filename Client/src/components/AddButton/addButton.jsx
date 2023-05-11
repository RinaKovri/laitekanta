import React, { useState } from 'react';
import AddingForm from './AddingForm';
import './addButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddButton = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <form className="container1">
      {showForm ? (
        <AddingForm />
      ) : (
        <button onClick={handleButtonClick} className='addbtn'>
          <span className="label">Lisää laite</span>
          <span className="icon">
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </button>
      )}
    </form>
  )
}

export default AddButton
