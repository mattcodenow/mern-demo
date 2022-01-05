import express, { Application, Request, Response } from "express";

const app: Application = express();

const port: number = 3000;

app.use(express.json());

// landing
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the mern-demo."});
});

// get all users
app.get("/users", (req: Request, res: Response) => {
  res.json({ users: []});
});

// create user
app.post("/users", (req: Request, res: Response) => {
  res.json({ users: []});
});

// get user by id
app.get("/users/:userId", (req: Request, res: Response) => {
  res.json({ users: []});
});

// update user by id
app.put("/users/:userId", (req: Request, res: Response) => {
  res.json({ users: []});
});

// delete user by id
app.delete("/users/:userId", (req: Request, res: Response) => {
  res.json({ users: []});
});

app.listen(port, () => console.log(`listening on localhost:${port}`));
