import type { Article } from '../types/index';

interface ArticleProps extends Article{}

export default async function fetchNews() {
    const API_KEY = "9e86051ea3494bb5b4443b14817a7ec3";

    // const qArray = ["technology", "coding"];
    // const qLoop = Math.floor(Math.random() * qArray.length)
    // const q = qArray[qLoop];
    
    const URL = `https://newsapi.org/v2/everything?q=coding&apiKey=${API_KEY}`;

    const res = await fetch(URL);
    
    if (!res.ok) {
        throw new Error("Failed to fetch.");
    }
    
    const data: {articles: ArticleProps[]} = await res.json();
    return data.articles;
}
