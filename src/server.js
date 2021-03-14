import express from 'express';
import routes from './routes'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.listen(3303, () => {
  console.log("Server online!!!!")
})

export default app;
