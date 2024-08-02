export default async function fetchBlog() {
    const url = `https://dev.to/api/articles?tag=coding`;

    const res = await fetch(url, {next: {revalidate: 7200}});

    if(!res.ok){
        throw new Error("Failed to blog")
    }

    return res.json();
}