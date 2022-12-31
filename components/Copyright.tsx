import { Typography, Link as MuiLink } from "@mui/material";

export function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <MuiLink color="inherit" href="https://turingg.com.au/">
        Turingg Pty Ltd
      </MuiLink>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
