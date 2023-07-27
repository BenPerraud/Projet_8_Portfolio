import { Box, Stepper, Step, StepButton, Typography, Button } from "@mui/material"
import presentations from "../../assets/datas/presentations.json"
import { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import theme from "../../style/theme"

function General () {
    const [count, setCount] = useState(0)

    function handleClick () {
        if (count < presentations.length) {
            setCount(count+1)
        } else {
            return null
        }
    }

    function previousCount () {
        setCount(count-1)
    }
    
    function nextCount () {
        setCount(count + 1)
    }

    function Connector () {
        return (
            <Box borderColor="primary.main" height= "40px" width= "27.5px" borderRight={4}></Box>
        )
    }

    function closed () {
        setCount(0)
    }

    const disabledButton = count === 0 ? true : false
    const disabledButtonNext = count === presentations.length ? true : false
    
    const styleBox = {
        [theme.breakpoints.down('tablet')] : {
            display: "none"
        }
    }
    
    const styleIconBox = {
        display:"flex",
        bgcolor:"secondary.light",
        color:"primary.main",
        height: "55px",
        width: "55px",
        borderRadius: "25px",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold"
    }

    return (
        <Box sx={styleBox}>
            <Box display="flex" justifyContent="space-between" paddingBottom="20px">
                <Button 
                    variant="fullLight"
                    disabled={disabledButton}
                    startIcon={<ArrowBackIosIcon />}
                    onClick={previousCount} >
                    Précédent
                </Button>
                <Button 
                    variant="fullLight"
                    disabled={disabledButton}
                    onClick={closed} >
                    Réinitialiser
                </Button>
                <Button
                    variant="fullLight"
                    disabled={disabledButtonNext}
                    endIcon={<ArrowForwardIosIcon />}
                    onClick={nextCount}>
                    Suivant
                </Button>
            </Box>
            <Stepper orientation='vertical' activeStep={-1} connector={<Connector />}>
                {presentations.map((presentation => (
                    <Step key={presentation.year}>
                        <Box display="flex" flexDirection="row" alignItems="center" columnGap="20px">
                            <StepButton 
                                sx={{width: "auto"}} 
                                icon={<Box sx={styleIconBox}>{presentation.year}</Box>} 
                                onClick={handleClick}>
                            </StepButton>
                            <Box>
                                <Typography variant='h2'>{presentation.description}</Typography>
                                <Typography variant='h3' className={count >= presentation.index ? "" : "hidden" }>{presentation.detail}</Typography> 
                            </Box>
                        </Box>
                    </Step>
                )))}
            </Stepper>
        </Box>
    )
}

export default General