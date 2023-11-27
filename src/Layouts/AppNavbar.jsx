import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink, useLocation } from 'react-router-dom'
import { AuthContext } from '../Context/FirebaseAuthContext';
import useGetAdminStatus from '../hooks/getAdminStatusHook/useGetAdminStatus';



function AppNavbar() {
    const { user, Firebase_Logout_User } = React.useContext(AuthContext);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [adminStatus] = useGetAdminStatus();

    const location = useLocation();


    const activeLinkStyle = {
        backgroundColor: 'pink',
        color: 'black',
        display: 'block',
        borderRadius: '.5rem'
    };

    const inactiveLinkStyle = {
        color: 'black',
        display: 'block',
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogOutUser = () => {
        Firebase_Logout_User()
            .then().catch()
    }

    const NavLinks = <Box sx={{ display: { xs: 'flex' }, mr: 1 }}>
        <Button
            component={NavLink}
            to={'/'}
            onClick={handleCloseNavMenu}
            sx={{
                ...inactiveLinkStyle, // Existing styles
                ...(location.pathname === '/' ? activeLinkStyle : {}), // Conditional active styles
            }}
        >
            Home
        </Button>
        <Button
            component={NavLink}
            to={'/biodatas'}
            onClick={handleCloseNavMenu}
            sx={{
                ...inactiveLinkStyle, // Existing styles
                ...(location.pathname === '/biodatas' ? activeLinkStyle : {}), // Conditional active styles
            }}
        >
            Biodatas
        </Button>
        <Button
            component={NavLink}
            to={'/about'}
            onClick={handleCloseNavMenu}
            sx={{
                ...inactiveLinkStyle, // Existing styles
                ...(location.pathname === '/about' ? activeLinkStyle : {}), // Conditional active styles
            }}
        >
            About
        </Button>

        {!adminStatus ?
            <Button
                component={NavLink}
                to={'dashboard/userDashboard'}
                onClick={handleCloseNavMenu}
                sx={{
                    ...inactiveLinkStyle, // Existing styles
                    ...(location.pathname === 'dashboard/userDashboard' ? activeLinkStyle : {}), // Conditional active styles
                }}
            >
                Dashboard
            </Button>
            :
            <Button
                component={NavLink}
                to={'dashboard/adminDashboard'}
                onClick={handleCloseNavMenu}
                sx={{
                    ...inactiveLinkStyle, // Existing styles
                    ...(location.pathname === 'dashboard/userDashboard' ? activeLinkStyle : {}), // Conditional active styles
                }}
            >
                Admin Dashboard
            </Button>
        }

        <Button
            component={NavLink}
            to={'/contact'}
            onClick={handleCloseNavMenu}
            sx={{
                ...inactiveLinkStyle, // Existing styles
                ...(location.pathname === '/contact' ? activeLinkStyle : {}), // Conditional active styles
            }}
        >
            Cantact Us
        </Button>
    </Box>

    const MobileLink = <Box>
        <MenuItem
            component={NavLink}
            to={'/'}
            onClick={handleCloseNavMenu}
            sx={{
                ...inactiveLinkStyle, // Existing styles
                ...(location.pathname === '/' ? activeLinkStyle : {}), // Conditional active styles
            }}
        >
            <Typography textAlign="center">Home</Typography>
        </MenuItem>
        <MenuItem
            component={NavLink}
            to={'/biodatas'}
            onClick={handleCloseNavMenu}
            sx={{
                ...inactiveLinkStyle, // Existing styles
                ...(location.pathname === '/biodatas' ? activeLinkStyle : {}), // Conditional active styles
            }}
        >
            <Typography textAlign="center">Biodatas</Typography>
        </MenuItem>
        <MenuItem
            component={NavLink}
            to={'/about'}
            onClick={handleCloseNavMenu}
            sx={{
                ...inactiveLinkStyle, // Existing styles
                ...(location.pathname === '/about' ? activeLinkStyle : {}), // Conditional active styles
            }}
        >
            <Typography textAlign="center">About</Typography>
        </MenuItem>
        <MenuItem
            component={NavLink}
            to={'dashboard/userDashboard'}
            onClick={handleCloseNavMenu}
            sx={{
                ...inactiveLinkStyle, // Existing styles
                ...(location.pathname === '/dashboard' ? activeLinkStyle : {}), // Conditional active styles
            }}
        >
            <Typography textAlign="center">Dashboard</Typography>
        </MenuItem>
        <MenuItem
            component={NavLink}
            to={'/contact'}
            onClick={handleCloseNavMenu}
            sx={{
                ...inactiveLinkStyle, // Existing styles
                ...(location.pathname === '/contact' ? activeLinkStyle : {}), // Conditional active styles
            }}
        >
            <Typography textAlign="center">Cantact Us</Typography>
        </MenuItem>
    </Box>

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '0.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        BIYE
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' }
                            }}
                        >
                            {MobileLink}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '0rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        BIYE
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {NavLinks}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                {
                                    user?.photoURL ?
                                        <Avatar src={user?.photoURL} alt="Remy Sharp" />
                                        :
                                        <Avatar alt="Remy Sharp" />
                                }
                            </IconButton>
                        </Tooltip>
                    </Box>
                    {!user?.email ?
                        <Button
                            component={NavLink}
                            to={'/login'}
                            sx={{ background: 'green', color: 'white', fontWeight: 700, padding: '.5rem 1rem', marginLeft: '1rem' }}
                        >
                            Login
                        </Button>
                        :
                        <Button
                            onClick={handleLogOutUser}
                            sx={{ background: '#e43c3c', color: 'white', fontWeight: 700, padding: '.5rem 1rem', marginLeft: '1rem' }}
                        >
                            Logout
                        </Button>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default AppNavbar;