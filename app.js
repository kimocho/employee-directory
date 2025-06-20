import express from 'express';
import employees from '#db/employees';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello employees');
});

app.get('/employees', (req, res) => {
  res.send(employees);
});

app.get('/employees/random', (req, res) => {
  const randomEmployeeObj = employees[Math.floor(Math.random() * 10)];
  res.send(randomEmployeeObj);
});

app.get('/employees/:id', (req, res) => {
  const { id } = req.params;
  if (!employees.find((obj) => obj.id === +id)) res.status(404).send('employee not found');
  res.send(employees.find((obj) => obj.id === +id));
});

app.listen(3000);

export default app;