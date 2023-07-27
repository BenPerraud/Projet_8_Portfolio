import { Card, CardMedia, CardActions, Grow, Slider, IconButton } from "@mui/material"
import ZoomInIcon from '@mui/icons-material/ZoomIn'
import ZoomOutIcon from '@mui/icons-material/ZoomOut'
import { useState } from "react"
import theme from "../style/theme"

function Gallery ({img, state, timeOut, timeIn}) {
    const [scale, setScale] = useState("100%")
    const [disabledOut, setDisabledOut] = useState(false)
    const [disabledIn, setDisabledIn] = useState(false)
    
    function heightImg (value) {
        const newHeight = value.target.value+"%"
        if (value.target.value <= 10) {
            setDisabledOut(!disabledOut)
            setScale(newHeight)
        } else {
            if (value.target.value >= 190) {
                setDisabledIn(!disabledIn)
                setScale(newHeight)
            } else {
                setScale(newHeight)
            }
        }
        
    }

    function ZoomOut () {
        const result = (parseInt(scale)-10)+"%"
        if (parseInt(scale) <= 10) {
            setDisabledOut(!disabledOut)
        } else {
            setScale(result)
        }
    }

    function ZoomIn () {
        const result = (parseInt(scale)+10)+"%"
        if (parseInt(scale) >= 190) {
            setDisabledIn(!disabledIn)
        } else {
            setScale(result)
        }
    }
    
    const image = require(`../assets/images/${img}`)
    
    const time = 500*timeOut
    const timeExit = 500*timeIn

    const styleCard = {
        borderRadius: "25px"
    }

    const styleImg = {
        maxHeight: "350px",
        maxWidth: "350px",
        height: {scale},
        width: {scale},
        borderRadius: "25px",
        [theme.breakpoints.down('tablet')] : {
            maxHeight: "250px",
            maxWidth: "250px",
        }
    }

    const styleActions = {
        p: "15px",
        columnGap: "15px",
        [theme.breakpoints.down('tablet')] : {
            p: "8px",
            columnGap: "10px"}
    }

    const styleButton = {
        p: 0
    }

    const styleIconOut = {
        ...parseInt(scale) <= 10 ? 
            {color: "primary.light", fontSize: 35, [theme.breakpoints.down('tablet')] : {fontSize: 20}} :
            {fontSize: 40, color: "primary.main", [theme.breakpoints.down('tablet')] : {fontSize: 25}}
    }

    const styleIconIn = {
        ...parseInt(scale) >= 190 ? 
        {color: "primary.light", fontSize: 35, [theme.breakpoints.down('tablet')] : {fontSize: 20}} :
        {fontSize: 40, color: "primary.main", [theme.breakpoints.down('tablet')] : {fontSize: 25}}
    }

    return (
        <Grow 
            in={state}
            {...state ? {timeout: time} : {timeout: timeExit}}
        >
            <Card sx={styleCard}>
                <CardMedia component="img" image={image} sx={styleImg}/>
                <CardActions sx={styleActions}>
                    <IconButton sx={styleButton} onClick={ZoomOut} disabled={disabledOut}>
                        <ZoomOutIcon sx={styleIconOut}/>
                    </IconButton>
                    <Slider
                        min={0}
                        max={200}
                        value={parseInt(scale)} 
                        defaultValue={100}
                        valueLabelDisplay="auto"
                        onChange={heightImg}
                    />
                    <IconButton sx={styleButton} onClick={ZoomIn} disabled={disabledIn}>
                        <ZoomInIcon sx={styleIconIn}/>
                    </IconButton>
                </CardActions>
            </Card>
        </Grow>
    )
}

export default Gallery