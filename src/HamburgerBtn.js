// HamburgerBtn.js

import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import style from './HamburgerBtn.module.css';

export default function HamburgerBtn() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
    >
      <List
        className={style.opt}
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingTop: '30px',
          height: '100vh',
        }}
      >
        {/* Your list items here */}
      </List>
    </Box>
  );

  return (
    <div>
      <Button
        onClick={toggleDrawer('left', true)}
        style={{
          fontSize: '20px',
          color: 'white', // Set the text color
          padding: '10px', // Adjust padding as needed
        }}
      >
        <GiHamburgerMenu />
      </Button>

      <Drawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </div>
  );
}
