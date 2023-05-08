import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios';

const AddingForm = () => {

    const [email, setEmail] = useState("");
    const [serialNumber, setSerialNumber] = useState("");
    const [issuingDate, setIssuingDate] = useState("");
    const [returningDate, setReturningDate] = useState("");
    const [deviceList, setDeviceList] = useState([]);
    const [newSerial, setNewSerial] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect (() => {
        Axios.get("http://localhost:3001/api/get").then((response)=>{
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
        ])
        
    };

    const deleteDevice = (item) => {
        Axios.delete(`http://localhost:3001/api/delete/${item}`).then(() => {
            setDeviceList(deviceList.filter((val) => {
                return val.email !== item;
            }))
        })
    }
    

    const updateDevice = (item) => {
        Axios.put("http://localhost:3001/api/update", {
            email: item, 
            serialNumber: newSerial,
        })
        setNewSerial("")
    }
    
    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const searchDevice = (device) => {
        if (
            device.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            device.serialNumber.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
            return true;
        }
        return false;
    };

    return (
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
          <button onClick={addDevice}>Lisää</button>
          <br />
          <br />
          <label>Search:</label>
          <input type="text" onChange={handleSearchTermChange} />
    
          {searchTerm !== "" && deviceList.filter(searchDevice).map((val) => {
            
    const issuingDateFormatted = val.issuingDate ? new Date(val.issuingDate).toLocaleDateString('fi-FI') : '';
    const returningDateFormatted = val.returningDate ? new Date(val.returningDate).toLocaleDateString('fi-FI') : '';
    return (
        <div className='card'>
            <h1>EMAIL:{val.email}</h1>
            <h3>SERIAL NUMBER: {val.serialNumber}</h3>
            <h3>ISSUING DATE: {issuingDateFormatted}</h3>
            <h3>RETURNING DATE: {returningDateFormatted}</h3>

            <button onClick={() => {
                if (window.confirm(`Are you sure you want to delete the device with email ${val.email}?`)) {
                    deleteDevice(val.email)
                }
            }}>DELETE</button>

            <input type="text" placeholder='update serial no' id="updateInput" onChange={(e) => { setNewSerial(e.target.value) }} />
            <button onClick={() => { updateDevice(val.email) }}>UPDATE</button>
        </div>
    )
})}

        </div>
      </div>
    )
    
}

export default AddingForm
