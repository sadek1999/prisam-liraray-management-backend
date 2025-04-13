import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import { globalErrorHandler } from "./app/middleware/globalErrorHandlar";
const app: Application = express();

app.use(cors());
app.use(express.json());



 
app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "this is ph healthCare ....",
  });
});


app.use('/api/v1',router)
app.use(globalErrorHandler)

export default app;