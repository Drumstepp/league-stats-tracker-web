import logo from "./logo.svg";
import * as React from "react";
import "./App.css";
import "./BasicSelect";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
import BasicSelect from "./BasicSelect";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

ChartJS.register(ArcElement, Tooltip, Legend);
var setSideData;

function App() {
  const defaultData = {
    sideData: {
      labels: ["Red", "Blue"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 3],
          backgroundColor: ["rgb(255, 99, 132)", "rgb(100, 60, 255)"],
          borderColor: ["rgb(255, 99, 132)", "rgb(10, 60, 255)"],
          borderWidth: 1,
        },
      ],
    },
  };
  const [chartData, setChartData] = React.useState(defaultData);
  const [user, setUser] = React.useState("");
  React.useEffect(() => {
    getUserData(user, chartData, setChartData);
  }, [user]);

  return (
    <div className="App">
      <div
        style={{
          paddingTop: "100px",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        <BasicSelect setUser={setUser} user={user} />
      </div>

      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <p>
              <h3>Games Played Per Side</h3>
              <div>
                <Pie data={chartData.sideData} />
              </div>
            </p>
          </Grid>
          <Grid item xs={6}>
            <p>
              <h3>Games Played Per Side</h3>
              <div>
                <Pie data={chartData.sideData} />
              </div>
            </p>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

function getUserData(user, chartData, setChartData) {
  console.log(user);
  setChartData({ test: {}, ...chartData });
}

export default App;
