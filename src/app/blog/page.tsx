import { Avatar, Box, Wrap, WrapItem } from "@chakra-ui/react";
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
              <div
                style={{
                  backgroundImage: `url(${item.cover_image})`,
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
            </Box>
            <Box mt={2}>
              <Box className="center-row-div justify-start">
                <Wrap>
                  <WrapItem>
                    <Avatar
                      size="sm"
                      src={item.social_image}
                      name="Small Avatar"
                      bg="pink.100"
                    />
                  </WrapItem>
                </Wrap>
                <p>{item.user.name}</p>
              </Box>
              <Box className=" text-sm my-3">
                <h6 className="text-justify">{item.title.slice(0, 30)} ...</h6>
                <p className="mt-3 text-justify">
                  {item.description?.slice(0, 90)}
                  <span>
                    <Link href="" className="text-primary text-xs">
                      {" "}
                      read more
                    </Link>
                  </span>
                </p>
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" gap={4} fontSize={14}>
              <div className="">
                <p className="text-[#444444] pb-1">Published by:</p>
                <div className="flex items-center gap-1">
                <Wrap>
                  <WrapItem>
                    <Avatar
                      size="xs"
                      src={item.user.profile_image}
                      name="Small Avatar"
                      bg="pink.100"
                    />
                  </WrapItem>
                </Wrap>
                <p>{item.user.name}</p>
                </div>
              </div>

              <div>
                <p className="text-[#444444] pb-1">Published Date:</p>

                <p className="text-right">{item.readable_publish_date}</p>
              </div>
            </Box>
          </Box>
        ))}
      </div>
    </div>
  );
}
