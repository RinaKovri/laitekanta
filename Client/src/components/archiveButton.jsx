import React, { useState } from 'react';
//import AddingForm from './AddingForm';
import './addButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import DeviceList from './DeviceList';

const ArchiveButton = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div className="container">
      {showForm ? (
        <DeviceList />
      ) : (
        <button onClick={handleButtonClick} className='btn'>
          <span className="label">Arkistoi laite</span>
          <span className="icon">
            <FontAwesomeIcon icon={faBoxArchive} />
          </span>
        </button>
      )}
    </div>
  )
}

export default ArchiveButton

