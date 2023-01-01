import type { NextApiRequest, NextApiResponse } from "next";

type Quote = {
  author: string;
  text: string;
};

const QUOTES: Quote[] = [
  {
    author: "Edsger Dijkstra",
    text: "Simplicity is a great virtue but it requires hard work to achieve it and education to appreciate it. And to make matters worse: complexity sells better.",
  },
  {
    author: "Alan Kay",
    text: "The best way to predict the future is to invent it.",
  },
  {
    author: "Alan Kay",
    text: "The best way to understand something is to try to change it.",
  },
  {
    author: "Alan Turing",
    text: "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
  },
];

type Data = {
  quotes: Quote[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ quotes: QUOTES });
}
