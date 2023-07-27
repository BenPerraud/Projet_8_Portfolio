import { Box, Card, CardContent, CardActions, Button, Typography } from "@mui/material"
import theme from "../../style/theme"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from "react"

function Mobile ({year, title, detail}) {
    const [isOpen, setIsOpen] = useState(false)

    function handleState () {
        setIsOpen(!isOpen)
    }

    const styleCard = {
        [theme.breakpoints.up('tablet')] : {
            display: "none"
        },
        backgroundColor: "primary.dark",
        border: "solid 2px",
        borderColor: "secondary.main",
        borderRadius: "10px",
    }

    const styleCardContent = {
        p: "10px",
        "&:last-child": {
            paddingBottom: "5px"
          },
        color: "secondary.main"
    }

    const styleBoxTitle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pb: "10px"
    }

    const styleCardActions = {
        p: 0
    }

    const styleButton = {
        p: 0,
        minWidth: 0
    }

    const styleIcon = {
        fontSize: "20px",
        color: "secondary.main"
    }

    const styleDetail = {
        ...isOpen ? 
            {pt: "10px", bt: "solid 2px", borderColor: "secondary.main"} :
            {display: "none"} 
    }

    const styleEndIcon = {
        ...isOpen ? 
        <KeyboardArrowDownIcon sx={styleIcon} onClick={handleState}/> :
        <KeyboardArrowUpIcon sx={styleIcon} onClick={handleState}/>
    }

    return (
        <Card sx={styleCard}>
            <CardContent sx={styleCardContent}>
                <Box sx={styleBoxTitle}>
                    <Typography variant="h3">{year}</Typography>
                    <CardActions sx={styleCardActions}>
                        <Button sx={styleButton} endIcon={styleEndIcon}></Button>
                    </CardActions>
                </Box>
                <Typography variant="subtitle1">{title}</Typography>
                <Typography variant="subtitle2" sx={styleDetail}>{detail}</Typography>
            </CardContent>
        </Card>
    )
}

export default Mobile