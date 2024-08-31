import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Layout = ({ children }) => {
  return (
    <Grid container columns={24} className="fixed top-0 left-0 w-full h-full">
      <Grid size={1} className="bg-earthy content-center">
        <Typography variant="h5" className="-rotate-90 text-nowrap">
          Movie Movie Cinema
        </Typography>
      </Grid>
      <Grid size={22}>
        <Typography variant="h5">Anifest 2022</Typography>
        {children}
      </Grid>
      <Grid size={1} className="bg-purple content-center">
        <Typography variant="h5" className="rotate-90 text-nowrap">
          Movie Movie NowTV Ch116
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Layout;
