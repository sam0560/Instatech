import { Avatar,Box, Wrap, WrapItem} from '@chakra-ui/react'
import Link from "next/link";
import FetchNew from '../../api/fetchNews'



export default async function page() {
  const data = await FetchNew();

  return (
    <div className="px-4 lg:px-8 mx-auto max-w-7xl">
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 self-center place-items-center justify-self-center">
         {
         data.map(item => (
          <Box className="max-w-[280px] w-full" key={item.url}>
            <Box w={280} maxW="100%" h={250}>
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
            </Box>
            <Box mt={2}>
              <Box className="center-row-div justify-start">
                <Wrap>
                <WrapItem>
                  <Avatar size="sm" src={item.urlToImage} name="Small Avatar" bg="pink.100"/>
                </WrapItem>
                </Wrap>
                <p>{item.source.name}</p>
              </Box>
              <Box className=" text-sm my-3">
                <h6 className="text-justify">
                  {item.title.slice(0,30)} ...
                </h6>
                <p className="mt-3 text-justify">
                  {item.description?.slice(0,90)} 
                  <span><Link href="" className="text-primary text-xs"> read more</Link></span>
                </p>
              </Box>
            </Box>
            <Box display="flex" gap={4} fontSize={14}>
              <p className="text-primary">{item.source.name}</p>
              <p>•</p>
              <p>8 mins ago</p>
            </Box>
          </Box>
         ))}
      </div>
    </div>
  );
}
