import { Avatar, Box, Skeleton, SkeletonCircle, SkeletonText, Wrap, WrapItem } from "@chakra-ui/react";
import blogs from "../../../useFetch/fetchBlog";
import Link from "next/link";

interface Blogs {
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  cover_image: string;
  social_image: string;
  user: { name: string; profile_image: string };
}

export default async function page() {
  const data: Blogs[] = await blogs();

  return (
    <div className="px-4 lg:px-8 mx-auto max-w-7xl">
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 self-center place-items-center justify-self-center">
        {data.map((item) => (
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
                        src={item.social_image}
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
                  <h6 className="text-justify">{item.title.slice(0, 30)} ...</h6>
                </Skeleton>
                <SkeletonText isLoaded width="100%" height="55px">
                  <p className="mt-3 text-justify">
                    {item.description?.slice(0, 90)}
                    <span>
                      <Link href={`/blog/${item.slug}`} className="text-primary text-sm">
                        ...read more
                      </Link>
                    </span>
                  </p>
                </SkeletonText>
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="start" gap={4} fontSize={14} mt="16px">
              <Box>
                <Skeleton isLoaded>
                  <p className="text-[#444444] pb-1">Published by:</p>
                </Skeleton>
                <div className="flex items-center gap-1">
                <Wrap>
                  <SkeletonCircle isLoaded>
                    <WrapItem>
                      <Avatar
                        size="xs"
                        src={item.user.profile_image}
                        name="Small Avatar"
                        bg="pink.100"
                      />
                    </WrapItem>
                  </SkeletonCircle>
                </Wrap>
                <Skeleton isLoaded height="20px">
                  <p>{item.user.name}</p>
                </Skeleton>
                </div>
              </Box>

              <Box>
                <Skeleton isLoaded>
                  <p className="text-[#444444] pb-1">Published at:</p>
                </Skeleton>
                <Skeleton isLoaded height="20px" mt="6px">
                  <p className="text-right">{item.readable_publish_date}</p>
                </Skeleton>
              </Box>
            </Box>
          </Box>
        ))}
      </div>
    </div>
  );
}
