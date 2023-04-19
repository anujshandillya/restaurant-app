import { Box, Typography, useTheme } from "@mui/material";
import Form from "./Form";
import "./index.css"

const AdminLoginPage = () => {
  const theme = useTheme();
  return (
    <Box className="admin" >
      {/* <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontFamily="Courier" fontWeight="bold" fontSize="32px" color="dark">
          restaurant name
        </Typography>
      </Box> */}

      <Box
        className="innerBox"
        width="20%"
        p="2rem"
        m="15rem auto"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography 
          fontWeight="500" 
          variant="h5" 
          sx={{ mb: "1.5rem" }}
          color= {theme.palette.neutral.dark}
        >
          Admin login
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default AdminLoginPage;
