import * as React from "react";
import "./App.css";
import "./Components/BasicSelect";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import BasicSelect from "./Components/BasicSelect";
import PieWithOptions from "./Components/PieWithOptions"
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import configData from './config.json'

ChartJS.register(ArcElement, Tooltip, Legend);

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

      <Box hidden={!user} sx={{ width: "100%" }}>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <p>
              <h3>Games Played Per Side</h3>
              <div>
                <PieWithOptions data={chartData.sideData} />
              </div>
            </p>
          </Grid>
          <Grid item xs={6}>
            <p>
              <h3>Games Played Per Side</h3>
              <div>
                <PieWithOptions data={chartData.sideData} />
              </div>
            </p>
          </Grid>
        </Grid>
      </Box>
      <div hidden={user}>Please select a user from the dropdown!</div>
    </div>
  );
}

function getUserData(user, chartData, setChartData) {
  console.log(user);
  fetch(configData.apiBaseUrl + "/getChartData?user=" + user)
  .then((response) => response.json())
  .then((jsonData) => {
    setChartData(jsonData);
  })
  setChartData({ test: {}, ...chartData });
}

export default App;
