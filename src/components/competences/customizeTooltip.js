import { Typography, Box } from "@mui/material"

function CustomizeTooltip ({ active, label, payload }) {
    if (active) {
        const style = {
            bgcolor: "secondary.light",
            color: "primary.main",
            p: "10px",
            borderRadius: "10px",
            border: "solid 3px",
            borderColor: "primary.dark"
        }
        return (
            <Box sx={style}>
                <Typography variant="h3">{label} ({payload[0].payload.mark}/{payload[0].payload.fullMark})</Typography>
                <Typography variant="subtitle2">{payload[0].payload.detail}</Typography>
            </Box>
        )
    } else {
        return null
    }
}

export default CustomizeTooltip