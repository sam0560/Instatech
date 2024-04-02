import type {news} from '../types/index';

export default async function fetchNews() : news {
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
    
    const data: {articles: news[]} = await res.json();
    return data.articles;
}
