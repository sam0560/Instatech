import type {article} from '../types/index';

export default async function fetchNews(): article {
    const API_KEY = "9e86051ea3494bb5b4443b14817a7ec3";

    const qArray = ["technology", "coding"];
    // , "software"
    const qLoop = Math.floor(Math.random() * qArray.length)
    const q = qArray[qLoop];
    
    const URL = `https://newsapi.org/v2/everything?q=${q}&apiKey=${API_KEY}`;
    
    const res = await fetch(URL, {next: {revalidate: 30000}});
    
    if (!res.ok) {
        throw new Error("Failed to fetch.");
    }
    
    const data: {articles: article[]} = await res.json();
    return data.articles;
}
