import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import FlexBetween from "../../components/FlexBetween";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <FlexBetween
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontFamily="Courier" fontWeight="bold" fontSize="32px" color="dark">
          restautrantName
        </Typography>
      </FlexBetween>

      <FlexBetween
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        {/* <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to restautrantName.
        </Typography> */}
        <Form />
      </FlexBetween>
    </Box>
  );
};

export default LoginPage;
