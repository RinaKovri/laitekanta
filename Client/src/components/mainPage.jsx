import React from 'react';
import './mainPage.css';
import Searching from './Searching/searching';
import AddButton from './AddButton/addButton';
import ArchiveButton from './ArchiveButton/archiveButton';

    function MainPage({ navigation, route }) {
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

export default MainPage;