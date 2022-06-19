import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Covid, Help, Login } from './PopupContents';
import SignIn from '../../SignIn/SignIn';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export const style = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#2e3192',
  padding: '6px',
  position: 'fixed',
  top:"0",
  zIndex: "1000",
};
export const link = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '13px',
};
export const boldLink = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '13px',
  fontWeight: 'bold',
};
export const img = {
  width: '150px',
};
export const getbestprice = {
  backgroundColor: 'white',
  textDecoration: 'none',
  color: 'darkblue',
  fontWeight: 'bold',
  height: '25px',
  margin: '6px 0 5px',
  padding: '6px 10px 6.5px',
  borderRadius: '4px',
};
export const selectcity = {
  padding: '10.5px 11px 11px',
  fontWeight: 'bold',
  borderTopLeftRadius: '3px',
  borderBottomLeftRadius: '3px',
};
export const search = {
  padding: '10px 12px 11px',
  border: 'none',
  width: '250px',
  fontSize: '15px',
};
export const searchbutton = {
  padding: '9px 15px 11px',
  border: 'none',
  backgroundColor: '#00a699',
  borderTopRightRadius: '3px',
  borderBottomRightRadius: '3px',
  color: 'white',
  fontSize: '16.5px',
};
export const searchbuttonhover = {
  padding: '9px 15px 11px',
  border: 'none',
  backgroundColor: '#00756C',
  borderTopRightRadius: '3px',
  borderBottomRightRadius: '3px',
  color: 'white',
  fontSize: '16.5px',
};
export const right = {
  display: 'flex',
  textAlign: 'center',
  gap: '10px',
  paddingLeft: '100px',
  margin: '5px 15px 0 0',
};
export const left = {
  margin: '5px',
};
export const additional = {
  margin: '5px',
};
export const mic = {
  padding: '9px 9px 13px 9px',
  backgroundColor: 'white',
  border: 'none',
  margin: '0',
  color: '#00e',
};
export const icons = {
  fontSize: '15px',
  color: 'gray',
};
export const loginButton = {
  backgroundColor: '#2e3192',
  border: 'none',
  color: 'white',
  fontSize: '13px',
};

const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  height: 'auto',
  bgcolor: 'background.paper',
  boxShadow: '24',
  borderRadius: '15px',
};

export const NavbarLink = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [shopping, setShopping] = useState(false);
  const [covid, setCovid] = useState(false);
  const [sell, setSell] = useState(false);
  const [help, setHelp] = useState(false);
  const [messages, setMessages] = useState(false);
  const [login, setLogin] = useState(false);
  const [searchs, setSearchs] = useState(false);

  const onHover = (props) => {
    props(true);
  };
  const OffHover = (props) => {
    props(false);
  };
  return (
    <>
      <nav style={style}>
        <Link to='/'>
          <img src='indiamart.jpeg' alt='logo' style={img} />
        </Link>
        <div style={left}>
          <select style={selectcity}>
            <option>All India</option>
            <option>Bilaspur</option>
            <option>Pune</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Kolkata</option>

          </select>
          <input
            placeholder='Enter products/service to search'
            style={search}></input>
          <i className='fa-solid fa-microphone' style={mic}></i>
          <Link to='/inputsearched'>
            <button
              onMouseEnter={() => onHover(setSearchs)}
              onMouseLeave={() => OffHover(setSearchs)}
              style={searchs ? searchbuttonhover : searchbutton}>
              <i className='fa-solid fa-magnifying-glass'></i> Search
            </button>
          </Link>
        </div>
        <Link style={getbestprice} to='/getbestprice'>
          Get Best Price
        </Link>
        <div style={right}>
          <Link style={link} to='/imshpping'>
            <div
              onMouseEnter={() => onHover(setShopping)}
              onMouseLeave={() => OffHover(setShopping)}
              className='shopping'>
              <i
                className='fa-solid fa-tags'
               ></i>
              <p style={additional}>IM Shopping</p>
            </div>
          </Link>
          <Link style={link} to='/covidsupplies'>
            <div
              onMouseEnter={() => onHover(setCovid)}
              onMouseLeave={() => OffHover(setCovid)}>
              <i
                className='fa-solid fa-briefcase-medical'
                ></i>
              <p style={additional}>Covid Supplies</p>
            </div>
          </Link>
          <Link style={link} to='/sell'>
            <div
              onMouseEnter={() => onHover(setSell)}
              onMouseLeave={() => OffHover(setSell)}>
              <i
                className='fa-solid fa-shop'
                ></i>
              <p style={additional}>Sell</p>
            </div>
          </Link>
          <Link style={link} to='/help'>
            <div
              onMouseEnter={() => onHover(setHelp)}
              onMouseLeave={() => OffHover(setHelp)}>
              <i
                className='fa-solid fa-circle-question'
                ></i>
              <p style={additional}>Help</p>
            </div>
          </Link>
          <Link style={link} to='/messages'>
            <div
              onMouseEnter={() => onHover(setMessages)}
              onMouseLeave={() => OffHover(setMessages)}>
              <i
                className='fa-solid fa-message'
                ></i>
              <p style={additional}>Messages</p>
            </div>
          </Link>
          <button style={loginButton} onClick={handleOpen}>
            <div
              onMouseEnter={() => onHover(setLogin)}
              onMouseLeave={() => OffHover(setLogin)}>
              <i
                className='fa-solid fa-user'
                ></i>
              <p style={additional} id="userName">Login</p>
            </div>
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'>
            <Box sx={styles}>
              <SignIn a={setOpen}/>
            </Box>
          </Modal>
        </div>
      </nav>
      <div>{covid && <Covid />}</div>
      <div>{help && <Help />}</div>
      <div>{login && <Login />}</div>
    </>
  );
};