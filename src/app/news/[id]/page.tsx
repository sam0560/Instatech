import { Box } from "@chakra-ui/react";
import fetchNews from "../../../../useFetch/fetchNews";
import Link from "next/link";

export async function generateStaticParams() {
  const news = await fetchNews();

  return news.map((i) => ({
    id: i.title,
  }));
}

const getTitle = async (id: string) => {
  const news = await fetchNews();

  const modifiedTitles = news.map((i) =>
    i.title
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .trim()
      .replace(/\s+/g, "%20")
  );

  // Find matching title
  const findNews = modifiedTitles.find(
    (title) => title.toLowerCase == id.toLowerCase
  );

  return findNews;
};

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const data = await getTitle(id);
  const modData = id
    .replace(/20/g, " ")
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, " ");
  const getNews = await fetchNews();

  const news = getNews.find((n) => n.title === modData);

  return (
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
            {news?.content}{" "}
            <span className="text-primary underline">
              <Link href={`${news?.url}`} target="_blank">
                {" "}
                Read full
              </Link>
            </span>
          </p>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
          <Box>
            <p>source: <span className="text-primary">{news?.source.name}</span></p>
          </Box>
          <Box>
            <p>author: <span className="text-primary">{news?.author}</span></p>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
