import { useState, useContext } from "react";
import { Grid } from "@mui/material";
// import UserContext from "@/context/user";
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import eventEmitter from "@/plugins/eventEmitter";
// import { Menu, MenuItem } from '@mui/material';
// import MenuItem from '@mui/material/MenuItem';
// import MenuIcon from "@material-ui/icons/Menu";
import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo-header.svg'
import logoText from '@/assets/images/logo-text-header.svg'

import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useLocation } from "react-router-dom"
import { styled } from '@mui/material/styles';

const drawerWidth = 340;
const Drawer = styled(MuiDrawer)(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box'
  }),
);
function Layout({ children }, prop) {


  // const { user } = useContext(UserContext);
  // async function connectWalletHandler() {
  //   eventEmitter.emit('connect')
  // }

  function Header() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <div>
        {/* <MenuIcon
            id="headerMenu"
            fontSize="large"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>

          </MenuIcon> */}
        {/* <Menu
            id="menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem ><Link to="/">Home</Link></MenuItem>
            <MenuItem onClick={(e) => { navigate('/explore-collection') }}>Explore</MenuItem>
            <MenuItem> <Link to="/create">Create</Link></MenuItem>
            <MenuItem><Link to="/how-it-work">How it works</Link></MenuItem>
            <MenuItem >Contact Us</MenuItem>

          </Menu> */}
        <header className="flex align-i-center justify-between fs-18">
          <div className="flex">
            <img src={logo} alt="logo" id="logo-header" />
            <img src={logoText} alt="logo-name" />
          </div>
          <div className="flex links light">
            <div onClick={(e) => { navigate('/') }}>DASHBOARD</div>
            <div onClick={(e) => { navigate('/') }}>PRODUCT MASTER</div>
            <div onClick={(e) => { navigate('/') }}>STORE</div>
            <div onClick={(e) => { navigate('/') }}>CRM</div>
            <div onClick={(e) => { navigate('/') }}>PROMOTIONS</div>
            <div onClick={(e) => { navigate('/') }}>NEWS</div>
            <div onClick={(e) => { navigate('/') }}>EVENTS</div>
          </div>
          <div className="bold pointer">APPLE GCC</div>
        </header>


      </div>
    );
  }

  const SideBar = props => {
    const location = useLocation()
    const navigate = useNavigate();
    const items = {
      "/product": [
        { text: 'PRODUCT DATABASE', to: "/dashboard", onClick: () => navigate('/') },
        { text: 'ADD PRODUCT', to: '/endpoints', onClick: () => navigate('/') },
        { text: 'UPLOAD PRODUCTS', to: '/targets', onClick: () => navigate('/') },
        { text: 'XML FEED', to: '/sources', onClick: () => navigate('/') },
      ],
      "/test": [
        { text: 'PRODUCT DATABASE', to: "/dashboard", onClick: () => navigate('/') },
        { text: 'ADD PRODUCT', to: '/endpoints', onClick: () => navigate('/') },
        { text: 'UPLOAD PRODUCTS', to: '/targets', onClick: () => navigate('/') },
        { text: 'XML FEED', to: '/sources', onClick: () => navigate('/') },
      ]
    };
  
    return (
      <Drawer variant="permanent" open={true}>
        <List>
          {items[location.pathname].map((item, index) => (
            <ListItemButton
              key={item.text}
              className={item.to === location.pathname ? 'selected' : ''}
              onClick={item.onClick}
              sx={{
                minHeight: 48,
                justifyContent: 'initial',
                px: 2.5,
              }}
            >
              <ListItemText primary={item.text} sx={{ opacity: 1, textAlign: 'left', color: '#C3C3C3', marginBottom: 6, fontWeight: 300 }} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    );
  }

  return (
    <div className="container">
      <Header />
      <div className="flex">
        <SideBar />
        {children}
      </div>

    </div>
  )


}
export default Layout;

