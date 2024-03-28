import { Avatar, Box, Wrap, WrapItem } from "@chakra-ui/react";
import fetchNews from "../../../useFetch/fetchNews";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Suspense } from "react";

export default async function News() {
  const news = await fetchNews();

  const t: number = 15;
  const heroNews = news[t];

  // SideNews
  const sideNews = news.slice(t, t + 5);
  return (
    <>
      <div className="relative col-span-3 lg:col-span-3 rounded-2xl">
        <div className="absolute left-0 max-lg:bottom-0 lg:-left-20 lg:top-20 bg-card-bg-2 z-10 lg:max-w-[25rem]">
          {
            <Box p={8}>
              <div className="center-row-div justify-start">
                {/* avatar */}
                <Wrap>
                  <WrapItem>
                    <Avatar
                      size="sm"
                      src={heroNews.urlToImage}
                      name="Small Avatar"
                      bg="pink.100"
                    />
                  </WrapItem>
                </Wrap>
                <h5>{heroNews.source.name}</h5>
                <span>1 hr ago</span>
              </div>

              <div>
                <h4 className="mt-2 text-purple-900">
                  {heroNews.title.slice(0, 55)} ...
                </h4>
                <p className="my-4 text-pin">
                  {heroNews.description.slice(0, 65)}
                  <Link href="" className="text-primary text-base">
                    {" "}
                    Read more
                  </Link>
                </p>
              </div>

              <div className="center-row-div justify-between">
                <p>Aug 03, 2022</p>
                <div className="inline-flex gap-4">
                  <button>
                    <ChevronLeft size={16} />
                  </button>
                  <button>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </Box>
          }
        </div>
        <Box maxW="700px" h={430} w={{ base: "100%", sm: "700px" }}>
          {/* <Loading/> */}
          <Suspense fallback={<p>Loading ...</p>}>
            <div
              style={{
                backgroundImage: `url(${heroNews.urlToImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100%",
                height: "430px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></div>
          </Suspense>
        </Box>
      </div>

      {/* hero side news */}
      <div className="p-4 lg:p-0 lg:flex flex-col gap-4 flex md:hidden items-center">
        {sideNews.map((item:any) => (
          <div className="flex items-start gap-2" key={item.url}>
            {/* News items */}
            <Box w={120} h={70}>
              <div
                style={{
                  backgroundImage: `url(${item.urlToImage})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "12px",
                }}
              ></div>
            </Box>

            <div>
              <div className="center-row-div justify-start">
                {/* avatar */}
                <Wrap>
                  <WrapItem>
                    <Avatar
                      size="xs"
                      src={item.urlToImage}
                      name="Small Avatar"
                      bg="pink.100"
                    />
                  </WrapItem>
                </Wrap>
                <p>{item.source.name}</p>
              </div>
              <div className="max-w-[12.5rem] text-sm mt-2">
                <h6 className="text-sm">{item.title.slice(0, 50)} ...</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
