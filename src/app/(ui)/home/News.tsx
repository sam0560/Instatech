import { Avatar, Box, Skeleton, SkeletonCircle, SkeletonText, Wrap, WrapItem } from "@chakra-ui/react";
import fetchNews from "../../../../hooks/fetchNews";
import Link from "next/link";
// import { ChevronLeft, ChevronRight } from "lucide-react";

export default async function News() {
  const news = await fetchNews();

  const t = 15;
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
                  <SkeletonCircle isLoaded>
                    <WrapItem>
                    <Avatar
                      size="sm"
                      src={heroNews.urlToImage}
                      name="Small Avatar"
                      bg="pink.100"
                    />
                  </WrapItem>
                  </SkeletonCircle>
                  
                </Wrap>
                <Skeleton isLoaded>
                  <h5>{heroNews.source.name}</h5>
                </Skeleton>
                <Skeleton isLoaded><span>1 hr ago</span></Skeleton>
              </div>

              <div>
                <Skeleton isLoaded>
                  <h4 className="mt-2 text-purple-900">
                    {heroNews.title.slice(0, 55)} ...
                  </h4>
                </Skeleton>
                <SkeletonText isLoaded>
                  <p className="my-4 text-pin">
                    {heroNews.description.slice(0, 65)}
                    <Link
                       href={`${heroNews?.url}`} target="_blank"
                      className="text-primary text-base"
                    >
                      {" "}
                      Read more
                    </Link>
                  </p>
                </SkeletonText>
              </div>

              <div className="center-row-div justify-start">
                <Skeleton isLoaded mt={4}>
                  <p>Aug 03, 2022</p>
                </Skeleton>
                {/* <div className="inline-flex gap-4">
                  <button>
                    <ChevronLeft size={16} />
                  </button>
                  <button>
                    <ChevronRight size={16} />
                  </button>
                </div> */}
              </div>
            </Box>
          }
        </div>
        <Box maxW="700px" h={430} w={{ base: "100%", sm: "700px" }}>
          <Skeleton isLoaded>
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
          </Skeleton>
        </Box>
      </div>

      {/* hero side news */}
      <div className="p-4 lg:p-0 lg:flex flex-col gap-4 flex md:hidden items-center">
        {sideNews.map((item: any) => (
          <Link href={`${item?.url}`} target="_blank" key={item.title}>
            <div className="flex items-start gap-2" key={item.url}>
              {/* News items */}
              <Box w="120px" h={70}>
                <Skeleton isLoaded height="100%">
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
                </Skeleton>
              </Box>

              <div>
                <div className="center-row-div justify-start">
                  {/* avatar */}
                  <Wrap>
                    <Skeleton isLoaded>
                      <WrapItem>
                      <Avatar
                        size="xs"
                        src={item.urlToImage}
                        name="Small Avatar"
                        bg="pink.100"
                      />
                    </WrapItem>
                    </Skeleton>
                    
                  </Wrap>
                  <Skeleton isLoaded>
                    <h6>{item.source.name}</h6>
                  </Skeleton>
                </div>
                <div className="w-full text-sm mt-2">
                  <Skeleton isLoaded>
                    <p className="text-sm">{item.title.slice(0, 40)} ...</p>
                  </Skeleton>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
