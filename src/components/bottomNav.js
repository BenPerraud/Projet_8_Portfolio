import PaletteIcon from '@mui/icons-material/Palette'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy'
import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import { Link, useLocation } from "react-router-dom"
import theme from "../style/theme"

function BottomNav () {
    const currentLocation = useLocation()

    const styleBottomBavigation = {
        display: "flex",
        flexDirection: "row",
        columnGap: "20px",
        [theme.breakpoints.down('tablet')] : {
            display: "none"
        }
    }

    const styleLabel = {
        fontSize: "25px",
        "&:hover": {
            color: "primary.main"},
        [theme.breakpoints.down('tablet')] : {
            fontSize: "18px"}
    }
    
    const styleLabelActive = {
        textDecoration: "underline",
        fontSize: "30px",
        color: "primary.main"
    }

    const stylePresentation = { 
        ".MuiBottomNavigationAction-label": styleLabel,
        ...currentLocation.pathname === "/presentation" && {".MuiBottomNavigationAction-label": styleLabelActive}
    }

    const styleCompetences = { 
        ".MuiBottomNavigationAction-label": styleLabel,
        ...currentLocation.pathname === "/competences" && {".MuiBottomNavigationAction-label": styleLabelActive}
    }

    const styleRealisation = { 
        ".MuiBottomNavigationAction-label": styleLabel,
        ...currentLocation.pathname === "/realisations" && {".MuiBottomNavigationAction-label": styleLabelActive}
    }

    return (
        <BottomNavigation showLabels sx={styleBottomBavigation}>
            <BottomNavigationAction component={Link} to="/presentation" sx={stylePresentation} label="Présentation" icon={<TheaterComedyIcon color="primary" fontSize="large"/> } />
            <BottomNavigationAction component={Link} to="/competences" sx={styleCompetences} label="Compétences" icon={<PaletteIcon color="primary" fontSize="large" />} />
            <BottomNavigationAction component={Link} to="/realisations" sx={styleRealisation} label="Réalisations" icon={<WorkHistoryIcon color="primary" fontSize="large"/>} />
        </BottomNavigation>
    )
}

export default BottomNav