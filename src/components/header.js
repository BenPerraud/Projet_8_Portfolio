import bp_navbar from "../assets/images/bp_navbar.jpg"
import { Box, Avatar, Button } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download'
import BottomNav from "./bottomNav"
import { Link, useLocation } from "react-router-dom"
import CV from "../assets/datas/CV-Benjamin-Perraud.pdf"
import AppBarResponsive from '../components/appBar'
import theme from "../style/theme"

function Header () {
    const currentLocation = useLocation()
    
    const styleGeneral = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "3px solid",
        borderColor: "primary.dark",
        pb: "15px",
        [theme.breakpoints.down('tablet')] : {
            border: "none",
            pb: "0",
        }
    }

    const styleAvatar = {
        ...currentLocation.pathname === "/" ? 
            { height: "100%",
            width:"10%",
            [theme.breakpoints.down('tablet')] : {
                display: "none"
              }} : 
            { height: "100%",
            width:"10%",
            opacity: 0.5, "&:hover": {opacity: 1},
            [theme.breakpoints.down('tablet')] : {
                display: "none"
            }} 
    }

    const styleButton = {
        width: "10%",
        [theme.breakpoints.down('tablet')] : {
            display: "none"
        }
    }

    return (
        <Box sx={styleGeneral}>
            <Avatar 
                sx={styleAvatar} 
                component={Link} 
                to="/" 
                alt="Logo du portfolio" 
                src={bp_navbar} />
            <BottomNav/>
            <Button 
                sx={styleButton} 
                variant="fullDark" 
                startIcon={<DownloadIcon />}
                href={CV} target="_blank">
                CV
            </Button>
            <AppBarResponsive />
        </Box>
    )
}

export default Header