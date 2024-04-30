import {
  Avatar,
  Box,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Link from "next/link";
import FetchNew from "../../../useFetch/fetchNews";

export default async function page() {
  const data = await FetchNew();

  return (
    <div className="px-4 lg:px-8 mx-auto max-w-7xl">
      <div className="md:grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 self-center place-items-center justify-self-center hidden ">
        {data.map((item: any) => (
          <Box className="max-w-[280px] w-full" key={item.url}>
            <Box w={280} maxW="100%" h={250}>
              <Skeleton isLoaded>
                <div
                  style={{
                    backgroundImage: `url(${item.urlToImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "250px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "12px",
                  }}
                ></div>
              </Skeleton>
            </Box>
            <Box mt={2}>
              <Box className="center-row-div justify-start">
                <Wrap>
                  <SkeletonCircle isLoaded>
                    <WrapItem>
                      <Avatar
                        size="sm"
                        src={item.urlToImage}
                        name="Small Avatar"
                        bg="pink.100"
                      />
                    </WrapItem>
                  </SkeletonCircle>
                </Wrap>
                <Skeleton isLoaded width="70%">
                  <p>{item.source.name}</p>
                </Skeleton>
              </Box>
              <Box className="my-3">
                <Skeleton isLoaded width="100%">
                  <h6 className="text-justify">
                    {item.title.slice(0, 30)} ...
                  </h6>
                </Skeleton>
                <SkeletonText isLoaded width="100%" height="55px">
                  <p className="mt-3 text-justify">
                    {item.description?.slice(0, 90)}
                    <span>
                      <Link
                        href={`/news/${item.title}`}
                        className="text-primary text-sm"
                      >
                        ...read more
                      </Link>
                    </span>
                  </p>
                </SkeletonText>
              </Box>
            </Box>
            <Box display="flex" gap={4} fontSize={14}>
              <Skeleton isLoaded width="50%">
                <p className="text-primary">{item.source.name}</p>
              </Skeleton>
              <p>•</p>
              <p>8 mins ago</p>
            </Box>
          </Box>
        ))}
      </div>

      {/* Smaller screen */}
      <div className="p-4 lg:p-0 flex flex-col gap-4 md:hidden items-center">
        {data.map((item: any) => (
          <div
            className="flex items-start gap-2 border border-gray rounded-lg p-2 w-full min-h-[80px] shadow-sm"
            key={item.url}
          >
            {/* News items */}
            <Box w="30%" h="80px">
              <Link href={`/news/${item.title}`}>
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
              </Link>
            </Box>

            <div className="w-[70%]">
              <div>
                <Link href={`/news/${item.title}`}>
                  <SkeletonText isLoaded height="50px">
                    <p className="text-sm">{item.title.slice(0, 65)} ...</p>
                  </SkeletonText>
                  <Skeleton height="16px" mt="4px" isLoaded>
                    <p className="text-xs text-primary">{item.source.name}</p>
                  </Skeleton>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
