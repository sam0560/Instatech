import { Box,Wrap,WrapItem, } from '@chakra-ui/react';
import getVideos from '../../../../hooks/fetchVideos'

interface video {
  id: {videoId: string} 
  snippet: {
    title: string
    description: string
    thumbnails: {
      default:{
        url: string

      }
    }
  channelId: string
  channelTitle: string
  }
}

export default async function page() {
  const data = await getVideos();
  const videos: video[] = data.items;

  return (
    <div>
      <div className="px-4 md:px-8 mx-auto flex flex-col max-w-7xl">
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 mt-8">
          {videos.map((i:any)=>(<Box className="max-w-[500px] w-full rounded-md" key={i.id.videoId}>
            <Box maxWidth={500} h={200}>
              <iframe
              id={`youtube-${i.id.videoId}`}
              src={`https://www.youtube.com/embed/${i.id.videoId}?modestbranding=1`}
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
                  <h6 className="text-justify">{i.snippet.title.slice(0, 50)} ...</h6>
                  <p className="mt-3 uppercase">
                    {i.snippet.channelTitle}
                  </p>
                </Box>
              </Box>
          </Box>))}
        </div>
      </div>
    </div>
  )
}
