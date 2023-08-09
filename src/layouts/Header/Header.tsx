import { Box, Button, Typography } from "@mui/material";
import { BsFillSunFill } from "react-icons/bs";

export const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={(theme) => ({
          textTransform: "uppercase",
          fontSize: 40,
          fontWeight: 700,
          letterSpacing: 15,
          color: theme.palette.common.white,
        })}
      >
        Todo
      </Typography>
      <Button
        sx={(theme) => ({
          "& svg": {
            color: theme.palette.common.white,
          },
        })}
      >
        <BsFillSunFill size={26} />
      </Button>
    </Box>
  );
};
