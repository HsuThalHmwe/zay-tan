import express from "express";
import cors from "cors";
import { availability } from "./data";

const app = express();
const port = 5001;

app.use(cors());

app.get("/availabilty", (req, res) => {
  //@ts-ignore
  const selectMonth = parseInt(req.query.months, 10);

  const foundedAvalityInData = availability.filter(
    (ele) => ele.month === selectMonth
  );
  console.log(foundedAvalityInData);
  res.send(foundedAvalityInData);
});

app.listen(port, () => {
  console.log("server running", port);
});
