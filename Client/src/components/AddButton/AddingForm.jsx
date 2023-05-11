import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import './AddingForm.css';

const AddingForm = ({ setShowFormState }) => {

    const [email, setEmail] = useState("");
    const [serialNumber, setSerialNumber] = useState("");
    const [issuingDate, setIssuingDate] = useState("");
    const [returningDate, setReturningDate] = useState("");
    const [deviceList, setDeviceList] = useState([]);
    const [newSerial, setNewSerial] = useState("");
    const [showForm, setShowForm] = useState(true);

    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) => {
            setDeviceList(response.data)
        })
        setShowForm(true); // update the showForm state variable
    }, [])

    const addDevice = () => {
        Axios.post("http://localhost:3001/api/insert", {
            email: email,
            serialNumber: serialNumber,
            issuingDate: issuingDate,
            returningDate: returningDate,
        });

        setDeviceList([
            ...deviceList, {
                email: email,
                serialNumber: serialNumber,
                issuingDate: issuingDate,
                returningDate: returningDate,
            },
        ])

    };

    const deleteDevice = (item) => {
        Axios.delete(`http://localhost:3001/api/delete/${item}`)
    }


    const updateDevice = (item) => {
        Axios.put("http://localhost:3001/api/update", {
            email: item,
            serialNumber: newSerial,

        })
        setNewSerial("")
    }

    return (
        <>
            {showForm && (
                <div className='form'>
                    <h1>Laitekanta Lisaa</h1>
                    <div className='form'>
                        <label>Email:</label>
                        <input type="text" name="email" onChange={(e) => { setEmail(e.target.value) }} />
                        <label>Serial Number</label>
                        <input type="text" name="serialNumber" onChange={(e) => { setSerialNumber(e.target.value) }} />
                        <label>Issuing Date</label>
                        <input type="date" name="issuingDate" onChange={(e) => { setIssuingDate(e.target.value) }} />
                        <label>Returning Date</label>
                        <input type="date" name="returningDate" onChange={(e) => { setReturningDate(e.target.value) }} />
                        <button onClick={addDevice} className='button'>Lisää</button>
                        <button onClick={() => setShowForm(false)} className='button'>Sulje</button>
                    </div>
                </div>
            )}
            {!showForm && (
                <button onClick={() => setShowForm(true)}>Lisää laite</button>
            )}

                        {deviceList.map((val) => {
                            return <div className='card'>
                                <h1>EMAIL:{val.email}</h1>
                                <h3>SERIAL NUMBER: {val.serialNumber}</h3>
                                <h3>ISSUING DATE: {val.issuingDate}</h3>
                                <h3>RETURNING DATE: {val.returningDate}</h3>

                                <button onClick={() => {
                                    if (window.confirm(`Are you sure you want to delete the device with email ${val.email}?`)) {
                                        deleteDevice(val.email)
                                    }
                                }}>DELETE</button>

                                <input type="text" placeholder='update serial no' id="updateInput" onChange={(e) => { setNewSerial(e.target.value) }} />
                                <button onClick={() => { updateDevice(val.email) }}>UPDATE</button>
                            </div>
                        })}
        </>
    )
}

export default AddingForm
