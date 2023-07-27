import { Box, Link } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import theme from "../style/theme"

function Footer () {
    const linkedin = "https://www.linkedin.com/in/benjamin-perraud?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BaO3Heo6WQSq%2F0Sj6d5iBQg%3D%3D"
    const mailto = "mailto:benjaminperraud@outlook.com"

    const styleBox = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        rowGap: "10px",
        borderColor: "primary.main",
        border: "solid 3px",
        borderRadius: "25px",
        backgroundColor: "primary.dark",
        p: "12px",
        [theme.breakpoints.down('tablet')] : {
            borderRadius: "0px",
            border: "none",
            borderTop: "solid 3px",
            borderColor: "secondary.main"
        }
    }

    const styleMail = {
        color: "secondary.main"
    }

    const styleLinkedin = {
        fontSize: 60,
        color: "secondary.main"
    }

    return (
        <Box sx={styleBox}>
            <Link href={mailto} target="_blank" sx={styleMail}>Contactez moi</Link>
            <Link href={linkedin} target="_blank">
                <LinkedInIcon sx={styleLinkedin}/>
            </Link>
        </Box>
    )
}

export default Footer