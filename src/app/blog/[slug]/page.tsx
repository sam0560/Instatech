import { Box } from '@chakra-ui/react';
import fetchBlog from '../../../../useFetch/fetchBlog'
import Link from 'next/link';

export default async function page({params}:any) {
const blogs = await fetchBlog();

const blog = blogs.find((i:any) => i.slug === params.slug)



  return (
    <>
      {blog ? (
        <div className="flex flex-col lg:flex-row items-center mx-auto max-w-7xl gap-8 p-6 lg:px-8">
          <Box w={["100%", "100%", "50%"]} h={["250px", "250px", "450px"]}>
            <div
              style={{
                backgroundImage: `url(${blog?.social_image})`,
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
              <h4>{blog?.title}</h4>
            </Box>
            <Box paddingY="1rem">
              <p className="leading-normal">
                {blog?.description}{" "}
                <span className="text-primary underline">
                  <Link href={`${blog?.url}`} target="_blank">
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
                  Date:{" "}
                  <span className="text-primary">{blog?.readable_publish_date}</span>
                </p>
              </Box>
              <Box>
                <p>
                  author: <span className="text-primary">{blog?.user.name}</span>
                </p>
              </Box>
            </Box>
          </Box>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center text-center p-8 lg:p-0">
          <h1 className="text-dark-text">Oooops!!!! Not available</h1>
          <small className="text-primary max-w-3xl">This is because this page returns undefined but other blogs works perfectly</small>
        </div>
      )}
    </>
  )
}
