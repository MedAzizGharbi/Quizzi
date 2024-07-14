import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const handleMainMenu = () => {
    navigate("/");
  };
  return (
    <>
      <div className="bg-quizzi-black h-screen flex justify-center items-center">
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <p className="text-white text-[50px] text-center">
                Your results are : {localStorage.getItem("userScore")}
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
                  onClick={handleMainMenu}
                >
                  Main Menu
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};
export default Result;
