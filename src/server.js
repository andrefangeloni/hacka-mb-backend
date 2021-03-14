import express from 'express';
import routes from './routes'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(3303, () => {
  console.log("onlineeeeeee")
})

export default app;
