import { Main } from "src/components/Main/Main";
import { Footer } from "src/components/Footer/Footer";
import { Grid } from "@mui/material";
import {Sidebar} from "src/components/Sidebar/Sidebar";
export const Layout = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={8}>
        <Grid container>
          <Grid item xs={8} sx={{ border: "1px solid", borderTop: "none" }}>
            <Main />
          </Grid>
          <Grid item xs={4}>
            <Footer />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
