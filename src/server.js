import express from 'express';
import routes from './routes'
import methodOverride from 'method-override';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(methodOverride());

app.use(cors({
  preflightContinue: true,
  allowedHeaders: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  origin: '*',
}));

app.use(routes);

app.get("/", (req, res) => {
  res.send("Teste")
})

app.listen(3303, () => {
  console.log("Server online!!!!")
})

export default app;
