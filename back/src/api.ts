import { Router, Request, Response, json } from "express";
import { Article, NewArticle } from "./interfaces/article";
import { User } from "./interfaces/User";

export const generateId = (): string => {
  return Date.now() + "_" + Math.round(Math.random() * 1e12);
};

let articles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.66, qty: 123 },
  { id: "a2", name: "Marteau", price: 3, qty: 78 },
];

const app = Router();

const date = (req: Request, res: Response) => {
  res.json({ date: new Date() });
};

app.get("/date", date);

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.use(json());

app.post("/articles", (req, res) => {
  const newArticle: NewArticle = req.body;
  const article = { ...newArticle, id: generateId() };
  articles.push(article);
  res.status(201).end();
});

app.delete("/articles", (req, res) => {
  const ids: string[] = req.body;
  articles = articles.filter((a) => !ids.includes(a.id));
  res.status(204).end();
});

app.delete("/articles/:id", (req, res) => {
  const id = req.params.id;
  articles = articles.filter((a) => a.id !== id);
  res.status(204).end();
});

app.post("/connect", (req, res) => {
  const { login, password } = req.body;
  console.log("login: ", login);
  console.log("password: ", password);
  if (login === "jc") {
    const user: User = { displayName: "Jean-Claude VAN DAMNE" };
    res.json(user);
    return;
  }
  res.status(401).end();
});

export default app;
