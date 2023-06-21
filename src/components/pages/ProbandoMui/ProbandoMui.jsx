import { Box, Grid } from "@mui/material";

const ProbandoMui = () => {
  return (
    <Box>
      <h1>Material ui</h1>

      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <h2 style={{ width: "100%", heigh: "300px", backgroundColor: "red" }}>
            Caja 1
          </h2>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <h2
            style={{ width: "100%", heigh: "300px", backgroundColor: "blue" }}
          >
            Caja 2
          </h2>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProbandoMui;
