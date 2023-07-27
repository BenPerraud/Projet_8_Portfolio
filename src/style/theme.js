import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 780,
      desktop: 990,
    }
  }
})

theme.palette.primary = {
  dark: "#013a46",
  main: "#025464",
  light: "#728caf"
}

theme.palette.secondary = {
  dark: "#a8a8a1",
  main: "#f1f1e6",
  light: "#f3f3eb"
}

theme.components = {
  MuiButton: {
    variants : [ 
      {
        props: { variant: "fullDark" },
        style: {
          backgroundColor: "#025464",
          color: "#f3f3eb",
          "&:hover": {
            backgroundColor: "#013a46"
          }
        }
      },
      {
        props: { variant: "fullLight" },
        style: {
          backgroundColor: "#f3f3eb",
          color: "#025464",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#a8a8a1"
          }
        }
      }
    ]
  }
}

theme.typography.h1 = {
  fontSize:"35px",
  fontWeight: "bold",
  lineHeight: "125%",
  textAlign: "center",
  textDecoration: "underline",
  [theme.breakpoints.down('desktop')] : {
    fontSize: "29px"
  },
  [theme.breakpoints.down('tablet')] : {
    fontSize: "25px"
  }
}

theme.typography.h2 = {
  fontSize:'28px',
  textDecoration: "underline",
  fontWeight: "bold",
  lineHeight: "150%",
  textAlign: "justify",
  [theme.breakpoints.down('desktop')] : {
    fontSize: "25px"
  },
  [theme.breakpoints.down('tablet')] : {
    fontSize: "20px"
  }
} 

theme.typography.h3= {
  fontSize:'20px',
  fontWeight: "bold",
  [theme.breakpoints.down('tablet')] : {
    fontSize: "18px"
  }
}

theme.typography.subtitle1 = {
  fontSize: '16px',
  fontStyle: "italic"
}

theme.typography.subtitle2 = {
  fontSize: '12px',
  fontStyle: "italic"
}

export default theme

