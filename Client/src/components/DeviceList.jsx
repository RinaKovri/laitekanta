import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './searching.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const DeviceList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [deviceList, setDeviceList] = useState([]);


  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
        setDeviceList(response.data)
    })

}, [])

  const deleteDevice = (item) => {
    Axios.delete(`http://localhost:3001/api/delete/${item}`).then(() => {
      setDeviceList(deviceList.filter((val) => {
        return val.email !== item;
      }));
    });
  };

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
    <div>
      <div className='container'>
      <input type="text" placeholder='Search by email or Serial no' className='btn' onChange={handleSearchTermChange} />
      </div>

      {searchTerm !== "" && deviceList.filter(searchDevice).map((val) => {
        const issuingDateFormatted = val.issuingDate ? new Date(val.issuingDate).toLocaleDateString('fi-FI') : '';
        const returningDateFormatted = val.returningDate ? new Date(val.returningDate).toLocaleDateString('fi-FI') : '';
        return (<div style={{
            //height:'100vh',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            // justifyContent: 'center',
            rowGap: '10px',
            columnGap: '10px',
            marginTop: '10px', 
          
            // marginBottom: '10px',
            // paddingBottom: '10px'
            
        
            
          }}>
        
            <Card sx={{ maxWidth: 365 }} style={{background: 'pink'}}>
      
            <CardContent>
              <Typography gutterBottom variant="h10" component="div">
              EMAIL:{val.email}
              </Typography>
              <Typography gutterBottom variant="h10" component="div">
              SERIAL NUMBER: {val.serialNumber}
              </Typography>
              <Typography variant="body2" color="text.secondary">ISSUING DATE: {issuingDateFormatted}
              </Typography>
              <Typography variant="body2" color="text.secondary">RETURNING DATE: {returningDateFormatted}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => {
                    if (window.confirm(`Are you sure you want to delete the device with email ${val.email}?`)) {
                      deleteDevice(val.email);
                    }
                  }}>DELETE</Button>
              
            </CardActions>
          </Card>
          </div>
        )
      })}
    </div>
  );
};

export default DeviceList;





