import React, { useState } from 'react';
import AddingForm from '../AddButton/AddingForm';
import './archiveButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';

const ArchiveButton = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div className="container">
        <button onClick={handleButtonClick} className='archbtn'>
          <span className="label">Arkistoi laite</span>
          <span className="icon">
            <FontAwesomeIcon icon={faBoxArchive} />
          </span>
        </button>
    </div>
  )
}

export default ArchiveButton

