import { AppBar, Toolbar, Avatar, Button, IconButton, Menu, MenuItem } from "@mui/material"
import theme from "../style/theme"
import bp_navbar from "../assets/images/bp_navbar.jpg"
import { Link } from "react-router-dom"
import { useState } from "react"
import DownloadIcon from '@mui/icons-material/Download'
import MenuIcon from '@mui/icons-material/Menu'
import CV from "../assets/datas/CV-Benjamin-Perraud.pdf"

function AppBarResponsive () {
    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState()

    function handleMenu (event) {
        setOpen(!open)
        setAnchorEl(event.currentTarget)
    }

    function handleCloseNavMenu () {
        setOpen(!open)
    }

    const styleAppBar = {
        [theme.breakpoints.up('tablet')] : {
        display: "none"},
        position: "fixed",
        backgroundColor: "primary.dark",
        borderBottom: "solid 3px",
        borderColor: "secondary.main",
    }

    const styleToolbar = {
        display: "flex",
        justifyContent: "space-between",
        pb: "10px",
        pt: "10px"
    }

    const styleAvatar = {
        height: "100%",
        width:"10%" 
    }

    const styleButton = {
        width: "20%", 
    }

    const styleMenuItem = {
        color: "primary.dark",
        "&:hover": {
            backgroundColor: "primary.dark",
            color: "secondary.main"
        }
    }

    function goToPres () {
        window.location.href="/presentation";
    }

    function goToComp () {
        window.location.href="/competences";
    }

    function goToReal () {
        window.location.href="/realisations";
    }

    return (
        <AppBar sx={styleAppBar}>
            <Toolbar sx={styleToolbar}>
                <Avatar 
                sx={styleAvatar} 
                component={Link} 
                to="/" 
                alt="Logo du portfolio" 
                src={bp_navbar} />
                <Button 
                sx={styleButton} 
                variant="fullLight" 
                startIcon={<DownloadIcon />}
                href={CV} target="_blank">
                CV
            </Button>
            <IconButton onClick={handleMenu}>
                <MenuIcon color= "secondary"/>
            </IconButton>
            <Menu
                open={open}
                anchorEl={anchorEl}
                onClose={handleCloseNavMenu}>
                <MenuItem sx={styleMenuItem} onClick={goToPres}>Presentation</MenuItem>
                <MenuItem sx={styleMenuItem} onClick={goToComp}>Compétences</MenuItem>
                <MenuItem sx={styleMenuItem} onClick={goToReal}>Réalisations</MenuItem>
            </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default AppBarResponsive