import { Avatar, Box, Skeleton, SkeletonCircle, SkeletonText, Wrap, WrapItem } from "@chakra-ui/react";
import blogs from "../../../useFetch/fetchBlog";
import Link from "next/link";
import { Blogs } from "../../../types";
import { Heading6 } from "lucide-react";

export default async function page() {
  const data: Blogs[] = await blogs();

  return (
    <div className="px-4 lg:px-8 mx-auto max-w-7xl">
      <div className="md:grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 self-center place-items-center justify-self-center hidden ">
        {data.map((item: any) => (
          <Box className="max-w-[280px] w-full" key={item.id}>
            <Box w={280} maxW="100%" h={250}>
              <Skeleton isLoaded>
                <div
                  style={{
                    backgroundImage: `url(${item.social_image})`,
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
                        src={item.cover_image}
                        name="Small Avatar"
                        bg="pink.100"
                      />
                    </WrapItem>
                  </SkeletonCircle>
                </Wrap>
                <Skeleton isLoaded width="70%">
                  <p>{item.user.name}</p>
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
                        href={`/blog/${item.slug}`}
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
                <p className="text-primary">{item.user.name}</p>
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
            className="flex items-start gap-2 border border-gray rounded-lg p-2 w-full min-h-[80px] shadow-sm hover:shadow-md transition-shadow duration-100 hover:shadow-purple-100"
            key={item.url}
          >
            {/* News items */}
            <Box w="30%" h="80px">
              <Link href={`/blog/${item.slug}`}>
                <Skeleton isLoaded height="100%">
                <div
                  style={{
                    backgroundImage: `url(${item.social_image})`,
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
                <Link href={`/blog/${item.slug}`}>
                  <SkeletonText isLoaded height="30px">
                    <h6 className="text-sm">{item.title.slice(0, 100)} ...</h6>
                  </SkeletonText>
                  <Skeleton height="16px" mt="16px" isLoaded>
                    <p className="text-xs text-primary mt-4">{item.user.name}</p>
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
