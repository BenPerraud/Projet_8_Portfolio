import theme from "../style/theme"

const boxStyle = {
  mt: "35px",
  mb: "35px",
  p: "35px",
  backgroundColor: "primary.main",
  color: "secondary.light",
  borderRadius: "25px",
  display: "flex",
  flexDirection: "column",
  rowGap: "50px",
  justifyContent: "center",
  [theme.breakpoints.down('tablet')] : {
    p: "5px",
    pt: "30px",
    pb: "30px",
    rowGap: "25px",
    mt: "0px",
    mb: "0px",
    borderRadius: "0px"}
}

export default boxStyle