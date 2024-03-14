interface Article {
    source: {id: string; name: string}
    urlToImage: string
    url: string
    title: string
    author: string
    publishedAt: string
    content: string
    description: string
    }

export default async function fetchNews() {
    const API_KEY = "9e86051ea3494bb5b4443b14817a7ec3";

    const qArray = ["technology", "coding", "software"];
    const qLoop = Math.floor(Math.random() * qArray.length)
    const q = qArray[qLoop];

    // console.log(q)
    
    const URL = `https://newsapi.org/v2/everything?q=${q}&apiKey=${API_KEY}`;
    
    const res = await fetch(URL, {next: {revalidate: 30000}});
    
    if (!res.ok) {
        throw new Error("Failed to fetch.");
    }
    
    const data: {articles: Article[]} = await res.json();
    return data.articles;
}
