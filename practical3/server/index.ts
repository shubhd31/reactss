import express from 'express';
import errorHandler from './middleware/errorMiddleware';

import router from './routes/users'
import cors from 'cors';

const port = process.env.PORT || 5000
const app = express();
app.use(cors())

app.use(express.json());
app.use('/', router)

app.use(errorHandler)
require("./db/mongoose");
app.listen(port)






