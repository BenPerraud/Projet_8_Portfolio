import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from "recharts"
import { Typography, Box } from "@mui/material"
import CustomizeTooltip from "./customizeTooltip"
import theme from "../../style/theme"

function RadarChartsGeneral ({datas, title}) {
    const styleBox = {
        display: "flex",
        flexDirection: "column",
        rowGap: "5px",
        alignItems: "center",
        width: "450px",
        height: "400px",
        minWidth: 0
    }

    const styleTick = {
        fill: "#f1f1e6",
        fontSize: "20px",
    }

    function notTicks () {
        return null
    }

    return (
        <Box sx={styleBox}>
            <Typography variant="h2">{title}</Typography>
            <ResponsiveContainer width="100%" height={370}>
                <RadarChart outerRadius="78%" data={datas}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="skill" tick={styleTick} />
                    <PolarRadiusAxis domain={[0, 5]} axisLine={false} tickFormatter={notTicks}/>
                    <Radar dataKey="mark" stroke="#8884d8" fill={theme.palette.secondary.light} fillOpacity={0.6} />
                    <Tooltip content={<CustomizeTooltip />}/>
                </RadarChart>
            </ResponsiveContainer>
        </Box>
    )
}

export default RadarChartsGeneral