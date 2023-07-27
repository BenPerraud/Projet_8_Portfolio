import { Box, Typography } from "@mui/material"
import boxStyle from "../style/boxStyle"
import Cards from '../components/cards'
import projects from "./../assets/datas/projects.json"
import theme from "../style/theme"


function Realisations () {
    const title = "Ma principale réalisation est un outil de suivi de production pour une entreprise industrielle, le reste étant les projets pour OpenClassrooms"
    
    const styleTitle = {
        [theme.breakpoints.down('tablet')] : {
            display: "none",    
        }
    }

    const style = {
        display: "flex",
        flexDirection: "row",
        columnGap: "75px",
        rowGap: "75px",
        flexWrap: "wrap",
        justifyContent: "space-around",
        [theme.breakpoints.down('tablet')] : {
            rowGap: "20px",    
        }
    }
    
    return (
        <Box sx={boxStyle}>
            <Typography variant='h1' sx={styleTitle}>{title}</Typography>
            <Box sx={style}>
                {projects.map(project => <Cards project={project} key={project.name}/>)}
            </Box>
        </Box>
    )
}

export default Realisations