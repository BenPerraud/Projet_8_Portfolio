import { Box, Typography } from "@mui/material"
import boxStyle from "../style/boxStyle"
import RadarChartsGeneral from '../components/competences/radarChartsGeneral'
import RadarChartsResponsive from "../components/competences/radarChartsResponsive" 
import skillsDevFront from "./../assets/datas/skillDevFront.json"
import skillsDevBack from "./../assets/datas/skillsDevBack.json"
import skillsFinance from "./../assets/datas/skillsFinance.json"
import skillsOthers from "./../assets/datas/skillsOthers.json"
import theme from "../style/theme"

function Competences () {
    const styleBoxCharts = {
        display: "flex",
        flexDirection: "row",
        columnGap: "150px",
        rowGap: "50px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        [theme.breakpoints.down('tablet')] : {
            display: "none"
        }
    }

    const styleBoxChartsResponsive = {
        display: "flex",
        flexDirection: "column",
        rowGap: "20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        [theme.breakpoints.up('tablet')] : {
            display: "none"
        }
    }

    const styleTitle = {
        [theme.breakpoints.down('tablet')] : {
            display: "none",    
        }
    }

    return (
        <Box sx={boxStyle}>
            <Typography variant='h1' sx={styleTitle}>Des compétences de développement Web front-end et backend couplées à de fortes connaissances en finance d'entreprise et management</Typography>
            <Box sx={styleBoxCharts}>
                <RadarChartsGeneral datas={skillsDevFront} title="Frontend" />
                <RadarChartsGeneral datas={skillsDevBack} title="Backend" />
                <RadarChartsGeneral datas={skillsFinance} title="Finance d'entreprise" />
                <RadarChartsGeneral datas={skillsOthers} title="Autres compétences" />
            </Box>
            <Box sx={styleBoxChartsResponsive}>
                <RadarChartsResponsive datas={skillsDevFront} title="Frontend" />
                <RadarChartsResponsive datas={skillsDevBack} title="Backend" />
                <RadarChartsResponsive datas={skillsFinance} title="Finance d'entreprise" />
                <RadarChartsResponsive datas={skillsOthers} title="Autres compétences" />
            </Box>
        </Box>
    )
}

export default Competences