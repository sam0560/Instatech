import { Box } from "@chakra-ui/react";
import fetchNews from "../../../../useFetch/fetchNews";
import Link from "next/link";

export async function generateStaticParams() {
  const news = await fetchNews();

  return news.map((i) => ({
    id: i.title,
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  
  const modData = id
    .replace(/20/g, " ")
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, " ");
    

  const getNews = await fetchNews();

  const news = getNews.find((n) => n.title = modData);
  
  return (
    <>
      {news ? (
        <div className="flex flex-col lg:flex-row items-center mx-auto max-w-7xl gap-8 p-6 lg:px-8">
          <Box w={["100%", "100%", "50%"]} h={["250px", "250px", "450px"]}>
            <div
              style={{
                backgroundImage: `url(${news?.urlToImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></div>
          </Box>
          <Box w={["100%", "100%", "50%"]}>
            <Box>
              <h4>{news?.title}</h4>
            </Box>
            <Box paddingY="1rem">
              <p className="leading-normal">
                {news.content}
                <span className="text-primary underline">
                  <Link href={`${news?.url}`} target="_blank">
                    {" "}
                    Read full
                  </Link>
                </span>
              </p>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <p>
                  source:{" "}
                  <span className="text-primary">{news?.source.name}</span>
                </p>
              </Box>
              <Box>
                <p>
                  author: <span className="text-primary">{news?.author}</span>
                </p>
              </Box>
            </Box>
          </Box>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center text-center p-8 lg:p-0">
          <h1 className="text-dark-text">Oooops!!!! Not available</h1>
          <small className="text-primary max-w-3xl">This is because this page returns undefined but other article works perfectly</small>
        </div>
      )}
    </>
  );
}
