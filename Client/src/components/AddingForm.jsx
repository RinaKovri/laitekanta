import React, { useState, useEffect } from 'react'
import Axios from 'axios';

const AddingForm = () => {

    const [email, setEmail] = useState("");
    const [serialNumber, setSerialNumber] = useState("");
    const [issuingDate, setIssuingDate] = useState("");
    const [returningDate, setReturningDate] = useState("");
    const [deviceList, setDeviceList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) => {
            setDeviceList(response.data)
        })

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
        ]);

        // Reset the form
        setEmail("");
        setSerialNumber("");
        setIssuingDate("");
        setReturningDate("");
    };

    return (
        <div className='form'>
            <h1>Laitekanta Lisaa</h1>
            <div className='form'>
                <label>Email:</label>
                <input type="text" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <label>Serial Number</label>
                <input type="text" name="serialNumber" value={serialNumber} onChange={(e) => { setSerialNumber(e.target.value) }} />
                <label>Issuing Date</label>
                <input type="date" name="issuingDate" value={issuingDate} onChange={(e) => { setIssuingDate(e.target.value) }} />
                <label>Returning Date</label>
                <input type="date" name="returningDate" value={returningDate} onChange={(e) => { setReturningDate(e.target.value) }} />
                <button onClick={addDevice}>Lisää</button>
                <br />
                <br />
            </div>
        </div>
    )
}

export default AddingForm
