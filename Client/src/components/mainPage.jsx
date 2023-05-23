import React from 'react';
import Searching from './Searching/searching';
import AddButton from './AddButton/addButton';
import ArchiveButton from './ArchiveButton/archiveButton';
import './mainPage.css';

function mainPage() {
    return (
        <>
            <h1>LAITEKANTA</h1>
            <div className='inputs'>
                <Searching />
                <AddButton />
                <ArchiveButton />
            </div>
        </>
    );
}

export default mainPage;