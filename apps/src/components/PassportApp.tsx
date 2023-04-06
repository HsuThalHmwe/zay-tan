import { Box } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { useEffect, useState } from "react";

const PassportApps = () => {
  const [month, setMonth] = useState<number>();

  useEffect(() => {
    fetchAvailabilty();
  }, [month]);

  const fetchAvailabilty = async () => {
    const response = await fetch(
      `http://localhost:5001/availabilty?months=${month}`
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <Box>
      <Box sx={{ margin: "0 auto", mt: 2 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            disablePast
            onChange={(value) => {
              const newMonth = value as Dayjs;
              setMonth(newMonth.month());
            }}
          />
        </LocalizationProvider>
      </Box>
    </Box>
  );
};

export default PassportApps;
