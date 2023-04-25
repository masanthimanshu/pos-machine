import style from "./style.module.css";
import { Grid, Box, Typography, Divider, Button } from "@mui/material";

export const Home = () => {
  const beepSound = new Audio("/sound/beep-sound.mp3");

  return (
    <Grid container>
      <Grid item md={4}>
        <div className={style.full_box}>
          {[...Array(5)].map((e, index) => {
            return (
              <Box key={index}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography>
                    <b>Product Name Goes Here</b>
                  </Typography>
                  <Typography color="yellowgreen">
                    <b>$ 200</b>
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography color="gray">+ Quantity</Typography>
                  <Typography color="gray">2</Typography>
                </Box>
                <br />
                <Divider />
                <br />
              </Box>
            );
          })}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h6">
              <b>Total</b>
            </Typography>
            <Typography variant="h6">
              <b>$ 200</b>
            </Typography>
          </Box>
          <br />
          <Button
            onClick={() => beepSound.play()}
            variant="contained"
            color="success"
            fullWidth
          >
            <b>Print Receipt</b>
          </Button>
        </div>
      </Grid>
      <Grid item md={8} bgcolor="lightgray">
        <div className={style.full_box}>
          <Grid container spacing={5}>
            {[...Array(15)].map((e, index) => {
              return (
                <Grid item md={4} key={index}>
                  <Box p={2} bgcolor="white" borderRadius={2}>
                    <img
                      src="https://m.media-amazon.com/images/I/41tp0JPPlmL._SL1200_.jpg"
                      style={{ width: "100%" }}
                      alt="Product"
                    />
                    <br />
                    <Typography>
                      <b>Product Name Goes Here</b>
                    </Typography>
                    <Typography color="yellowgreen">
                      <b>$ 200</b>
                    </Typography>
                    <br />
                    <Grid container spacing={2}>
                      <Grid item md={6}>
                        <Button
                          onClick={() => beepSound.play()}
                          variant="contained"
                          color="success"
                          fullWidth
                        >
                          <b>Add</b>
                        </Button>
                      </Grid>
                      <Grid item md={6}>
                        <Button
                          onClick={() => beepSound.play()}
                          variant="outlined"
                          color="error"
                          fullWidth
                        >
                          <b>Remove</b>
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};
