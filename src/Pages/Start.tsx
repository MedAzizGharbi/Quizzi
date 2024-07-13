import { Button, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
export default function Start() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    // alert('You clicked on start the game!');
    navigate("/quizz");
  };
  return (
    <>
      <div className="bg-quizzi-black h-screen flex justify-center items-center">
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <p className="text-white text-[50px] text-center">
                Test your knowledge in React
              </p>
            </Grid>
            <Grid item xs={12}>
              <div className="flex justify-center">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#5A72A0",
                    "&:hover": {
                      backgroundColor: "#83B4FF",
                    },
                  }}
                  onClick={handleSubmit}
                >
                  <Link to={"/"}>Start now</Link>
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
