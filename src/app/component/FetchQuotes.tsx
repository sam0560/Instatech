import { useEffect, useState } from "react";

const getQuotes = async() => {
    const res = await fetch("https://api.quotable.io/quotes?tags=technology")

    if(!res.ok){
        throw new Error("Failed to fetch")
    }

    const data = await res.json();
    return data.results;
}

export default async function FetchQuotes() {
  const [quote, setQuote] = useState("This is a quote fetched from an API that will be rendered on the page");

  const results = await getQuotes();
  const randomIndex = Math.floor(Math.random() * results.length);
  const randomQuote = results[randomIndex];
  // console.log(randomQuote);
  
  setQuote(randomQuote.content)
  

    // useEffect(() => {
    //     const fetchQuote = async () => {
    //         try {
    //             const results = await getQuotes();
    //             const randomIndex = Math.floor(Math.random() * results.length);
    //             const randomQuote = results[randomIndex];
    //             setQuote(randomQuote.content)
    //         } catch (error) {
    //             console.error("Error fetching quotes:", error);
    //         }
    //     }
    //     fetchQuote();
    //   },[]);

  return (
    <>
      <div>
        {quote}
      </div>
    </>
  );
}
