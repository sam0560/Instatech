import { Box, Wrap, WrapItem } from "@chakra-ui/react";
import fetchVideos from "../useFetch/fetchVideos";

export default async function Videos() {
  const data = await fetchVideos();
  const videos = data.items.slice(0, 3);
  return (
    <>
      {videos.map((i: any) => (
        <Box className="max-w-[380px] w-full rounded-md" key={i.id.videoId}>
          <Box maxWidth={500} h={200}>
            <iframe
              id={`youtube-${i.id.videoId}`}
              src={`https://www.youtube.com/embed/${i.id.videoId}`}
              allowFullScreen
              frameBorder="0"
              height="200px"
              className="w-full"
            />
          </Box>

          <Box mt={1}>
            <Box className="center-row-div justify-start">
              <Wrap>
                <WrapItem>
                  {/* <Avatar
                        size="sm"
                        src={i.thumbnails.default.url}
                        name="Small Avatar"
                        bg="pink.100"
                      /> */}
                </WrapItem>
              </Wrap>
            </Box>
            <Box className=" text-base my-3">
              <h6 className="text-justify">
                {i.snippet.title.slice(0, 50)} ...
              </h6>
              <p className="mt-3 uppercase">{i.snippet.channelTitle}</p>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
}
