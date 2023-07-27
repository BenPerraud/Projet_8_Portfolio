import { Typography, Card, CardMedia, CardContent, CardActions, Button, Box } from "@mui/material"
import { useState } from "react"
import List from "./list"
import theme from "../style/theme"

function Cards ({project}) {
    const [isOpen, setIsOpen] = useState(false)
    
    function handleState () {
        setIsOpen(!isOpen)
    }

    const image = require(`../assets/images/${project.img}`)

    const styleCard = {
        width: 500,
        minHeight: 450,
        maxHeight: 700,
        borderRadius: 4,
        bgcolor:"secondary.light",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        [theme.breakpoints.down('tablet')] : {
            minHeight: 0,
            maxHeight: 1500,
        }

    }

    const styleMedia = {
        height: 250,
        [theme.breakpoints.down('tablet')] : {
            height: 150    
        }
    }

    const styleContent = { 
        color: "primary.main",
        maxHeight: 400,
        display: "flex",
        flexDirection: "column",
        rowGap: "15px",
        flexGrow: 1,
        [theme.breakpoints.down('tablet')] : {
            maxHeight: "100%",    
        }
    }

    const styleTitle = {
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
        height: "100px"
    }

    const styleDetails = {
        ...isOpen ? {
            display: "flex",
            flexDirection: "column",
            rowGap: "10px",
            borderTop: "solid 3px",
            pt: "10px"
        } : {
            display: "none"
        }
    }

    const styleActions = {
        display: "flex",
        justifyContent: "space-between",
        pl: "20px",
        pr: "20px",
        pb: "15px",
    }
    
    return (
        <Card sx={styleCard}>
            <CardMedia component="img" alt={project.alt} image={image} sx={styleMedia} />
            <CardContent sx={styleContent}>
                <Box sx={styleTitle}>
                    <Typography variant="h2">{project.name}</Typography>
                    <Typography variant="h3">{project.designation}</Typography>
                </Box>
                <Box sx={styleDetails} >
                    <List title="Projet :" detail={project.detail} />
                    <List title="Compétences requises :" detail={project.compétences} />
                    <List title="Difficultés rencontrées :" detail={project.special} />
                </Box>
            </CardContent>
            <CardActions sx={styleActions}>
                <Button variant="fullDark" onClick={handleState} >Détails</Button>
                <Button href={project.link} target="_blank" variant="fullDark">Code</Button>
            </CardActions>
        </Card>
    )
}

export default Cards