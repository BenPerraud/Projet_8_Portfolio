import { Box, Typography } from "@mui/material"
import boxStyle from "../style/boxStyle"
import presentations from "../assets/datas/presentations.json"
import Mobile from "../components/presentation/mobile"
import General from "../components/presentation/general"
import theme from "../style/theme"

function Presentation () {

    const title = "Benjamin PERRAUD, 31 ans, développeur Web front-end et backend en reconversion professionnelle après 7 années dans le domaine de la fusion-acquisition"
    
    const styleTitle = {
        [theme.breakpoints.down('tablet')] : {
            display: "none",    
        }
    }

    return (
        <Box sx={boxStyle}>
            <Typography variant='h1' sx={styleTitle}>{title}</Typography>
            {presentations.map(elem => <Mobile key={elem.index} year={elem.year} title={elem.description} detail={elem.detail} />)}
            <General />
        </Box>
    )
}

export default Presentation