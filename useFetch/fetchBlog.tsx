export default async function fetchBlog() {
    // const tags = ["softwareengineering", "programming", "computerscience", "career","coding"];
    // const randomTag = Math.floor(Math.random() * tags.length)
    // const tag = tags[randomTag];
    
    const url = `https://dev.to/api/articles?tag=coding`;

    const res = await fetch(url, {cache: 'force-cache'});

    if(!res.ok){
        throw new Error("Failed to blog")
    }

    return res.json();
}