import React, { useState } from 'react';
import AddingForm from './AddingForm';


const AddButton = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      {showForm ? (
        <AddingForm />
      ) : (
        <input
          type={'button'}
          value={'Lisää laite'}
          onClick={handleButtonClick} />
      )}
    </div>
  )
}

export default AddButton
