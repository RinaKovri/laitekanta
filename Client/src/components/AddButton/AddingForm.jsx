import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './AddingForm.css'


const AddingForm = () => {

    const [email, setEmail] = useState("");
    const [serialNumber, setSerialNumber] = useState("");
    const [issuingDate, setIssuingDate] = useState("");
    const [returningDate, setReturningDate] = useState("");
    const [deviceList, setDeviceList] = useState([]);
    const [newSerial, setNewSerial] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [showForm, setShowForm] = useState(true);



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
        <form className="container2">
            {showForm ? (
                <div className='modal-overlay'>
                    <div className='modal-content'>
                        <table>
                            <th>Add device base</th>
                            <tr>
                                <td>
                                    <label>Email:</label>
                                    <input style={{ width: "150px", height: "20px" }} type="text" name="email" onChange={(e) => { setEmail(e.target.value) }} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Serial Number:</label>
                                    <input style={{ width: "150px", height: "20px" }} type="text" name="serialNumber" onChange={(e) => { setSerialNumber(e.target.value) }} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Issuing Date</label>
                                    <input style={{ width: "150px", height: "20px" }} type="date" name="issuingDate" onChange={(e) => { setIssuingDate(e.target.value) }} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Returning Date</label>
                                    <input style={{ width: "150px", height: "20px" }} type="date" name="returningDate" onChange={(e) => { setReturningDate(e.target.value) }} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={addDevice} className='button'>Lisää</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={() => setShowForm(false)} className='button'>Sulje</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Search:</label>
                                    <input style={{ width: "150px", height: "20px" }} type="text" onChange={handleSearchTermChange} />

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
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </form>
    );

}

export default AddingForm