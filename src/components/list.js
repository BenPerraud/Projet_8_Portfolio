import { Box, Typography } from "@mui/material"

function List ({title, detail}) {
    const style = {
        display: "flex",
        flexDirection : "column"
    }
    
    return (
        <Box sx={style}>
            <Typography variant="h3">{title}</Typography>
            <Typography>{detail}</Typography>
        </Box>
    )
}

export default List