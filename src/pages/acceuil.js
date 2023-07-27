import { Typography, Box, FormControlLabel, Switch } from '@mui/material'
import boxStyle from '../style/boxStyle'
import Gallery from '../components/gallery'
import gallery from "../assets/datas/gallery.json"
import { useState } from "react"
import theme from "../style/theme"

function Accueil () {
    const [isOpen, setIsOpen] = useState(true) 

    function handleChange () {
        setIsOpen(!isOpen)
    }

    const styleDescription = {
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        rowGap: "20px",
    }
    
    const styleH3 = {
        width: "75%",
        textAlign: "center",
        [theme.breakpoints.down('tablet')] : {
            width: "95%"
        }
    }

    const description = "La trentaine passée, j'entame une reconversion professionnelle comme Développeur Web après une première carrière dans le domaine de la fusion-acquisition."
    const description1 = "Ce portfolio a été développé sous React et a été l'occasion de tester la librairie Material UI et plusieurs de ses composants. Toutes mes excuses par avance pour l'UI Design, qui n'est pas ma première compétence. "
    const description2 = "Je vous souhaite une très bonne visite."
    
    const styleGallery = {
        ...isOpen ? {
            display: "flex",
            flexDirection: "row",
            flexWrap: 'wrap',
            columnGap: "50px",
            rowGap: "50px",
            justifyContent: "space-between",
            [theme.breakpoints.down('tablet')] : {
                flexDirection: "column",
                justifyContent: "center",
                rowGap: "20px"
              }
        } : {display: "none"}
    }

    return (
        <Box sx={boxStyle} alignItems="center" >
            <Box sx={styleDescription}>
                <Typography variant='h1'>Bienvenue sur le portfolio de Benjamin PERRAUD</Typography>
                <Typography variant='h3' sx={styleH3}>{description}</Typography>
                <Typography variant='h3' sx={styleH3}>{description1}</Typography>
                <Typography variant='h3' sx={styleH3}>{description2}</Typography>
                <Typography variant='h3' sx={styleH3}>Amicalement</Typography>
            </Box>
            <hr width="10%" size="6px" color="#f3f3eb" />
            <Box sx={styleGallery}>
                {gallery.map(elem => <Gallery 
                    img={elem.id}
                    key={elem.id}
                    state={isOpen}
                    timeOut={elem.time}
                    timeIn={elem.timeExit}
                    />)}
            </Box>
            <FormControlLabel 
                control={<Switch 
                    color= "secondary"
                    onChange={handleChange}
                />}
                label="Masquer la galerie"
            />
        </Box>
    )
}

export default Accueil