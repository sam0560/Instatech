import Link from "next/link";
import QuoteModal from "./Modals/QuoteModal"
import { useState } from "react";

const getQuotes = async () => {
  const res = await fetch("https://api.quotable.io/quotes?tags=technology");

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await res.json();
  return data.results;
};

export default async function FetchQuotes() {
  const results = await getQuotes();

  // Random get one quote
  const randomIndex = Math.floor(Math.random() * results.length);
  const randomQuote = results[randomIndex];

  return (
    <>
      {<div>
        {(randomQuote.content).slice(0,60)}...
          <QuoteModal/>
        <div>
          <p className="text-sm">
            Author: <span><em>{randomQuote.author}</em></span>
          </p>
          
        </div>
      </div>
      }
    </>
  );
}
