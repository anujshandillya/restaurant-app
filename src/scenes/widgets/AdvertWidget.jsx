import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <a href="www.quickheal.co.in"><img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/ad.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      /></a>
      <FlexBetween>
        <Typography color={main}>QuickHeal</Typography>
        <Typography color={medium}>www.quickheal.co.in</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Protect your PC from ransomware. Now availbale at reduced price.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
