import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, '../public')));

app.get('/hello', (req: Request, res: Response) => {
  res.json({ msg: "Hello world!" });
});

app.get('/echo/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ id });
});
app.use(express.json());

app.post('/sum', (req, res) => {
    const { numbers } = req.body;
  
  
    const sum = numbers.reduce((summa: any, luku: any) => summa + luku, 0);
  
    res.json({ sum });
  });

interface TUser {
  nimi: string;
  sposti: string;
}

let users: TUser[] = [];

app.post('/users', (req: Request, res: Response) => {
  const { nimi, sposti }: TUser = req.body;
  users.push({ nimi, sposti });
  res.json({ message: 'User successfully added' });
});

app.get('/users', (req: Request, res: Response) => {
  res.status(200).json(users);
});

app.listen(port, () => {
  console.log(`Kukkuuko http://localhost:${port}`);
});
