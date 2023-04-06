import React, { useState } from "react";
import "../App.css";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { busses, stations } from "../utils/data";
import Button from "@mui/material/Button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Searchstations } from "../typings/types";

/*
1. npx create-react-app apps --template typescript
2. install mui: npm install @mui/material @emotion/react @emotion/styled
3. Try to use Mui sample components
*/
function BusApp() {
  const [searchStations, setSearchStations] = useState<Searchstations>({
    startStation: null,
    endStation: null,
  });
  console.log(searchStations);
  const handleOnClick = () => {
    const busWithStartStation = busses.filter((bus) =>
      bus.stations.find(
        (station) => station.id === searchStations.startStation?.id
      )
    );

    const busWithEndStation = busses.filter((bus) =>
      bus.stations.find(
        (station) => station.id === searchStations.endStation?.id
      )
    );

    const directBus = busWithStartStation.filter((bus) =>
      bus.stations.find(
        (station) => station.id === searchStations.endStation?.id
      )
    );
    console.log("bus name A is", busWithStartStation);
    console.log("bus name B is", busWithEndStation);
    console.log("bus name Direct is", directBus);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mt: 5,
      }}
    >
      <Box sx={{ margin: "0 auto", textAlign: "center" }}>
        <Autocomplete
          disablePortal
          id="stations"
          options={stations}
          onChange={(evt, value) => {
            console.log("Station A is: ", value);
            setSearchStations({ ...searchStations, startStation: value });
          }}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="stations A" />}
        />
        <Autocomplete
          disablePortal
          id="stations"
          options={stations}
          onChange={(evt, value) => {
            console.log("Station B is: ", value);
            setSearchStations({ ...searchStations, endStation: value });
          }}
          sx={{ width: 300, mt: 2 }}
          renderInput={(params) => <TextField {...params} label="stations B" />}
        />
        <Button variant="outlined" sx={{ mt: 2 }} onClick={handleOnClick}>
          Search Bus
        </Button>
      </Box>
      <Box sx={{ margin: "0 auto", mt: 2 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
        </LocalizationProvider>
      </Box>
      <Box sx={{ margin: "0 auto", mt: 2 }}>
        {searchStations.startStation && (
          <h4>{searchStations.startStation.label}</h4>
        )}
        {searchStations.endStation && (
          <h4>{searchStations.endStation.label}</h4>
        )}
      </Box>
    </Box>
  );
}

export default BusApp;
