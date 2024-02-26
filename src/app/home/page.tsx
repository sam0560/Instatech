// import components
import TechVideos from "../video/page";
import FetchQuotes from "../component/FetchQuotes";

import Image from "next/image";
import Link from "next/link";

// Animation icons
// import { Player, Controls } from '@lottiefiles/react-lottie-player';


// Image
import War from "../../../public/testImage/ukrainewar.webp";

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Highlight,
  Text,
} from "@chakra-ui/react";
import {
  ArrowDownCircle,
  ChevronLeft,
  ChevronRight,
  User2,
} from "lucide-react";

export default function page() {
  return (
    <div>
      <div className="container">
        <Box
          w="100%"
          p={8}
          borderRadius={{ base: "0", lg: "16px" }}
          className="bg-card-bg"
        >
          <div className="text-center max-w-[28rem] mx-auto text-dark-text">
            <p className="uppercase tracking-widest mb-2">
              welome to <span className="text-primary">InstaTech</span>
            </p>
            <h4 className="text-secondary">
              <FetchQuotes />
            </h4>
          </div>
        </Box>

        {/* Hero */}
        <div className="my-[4rem]">
          <div className="grid lg:grid-flow-col grid-col-3 gap-4">
            <div className="relative col-span-3 lg:col-span-3 rounded-2xl">
              <div className="hidden lg:block lg:absolute -left-20 top-20 bg-card-bg-2 z-10 lg:max-w-[25rem]">
                <Box p={8}>
                  <div className="center-row-div justify-start">
                    {/* avatar */}
                    <Image
                      src={War}
                      alt=""
                      width={32}
                      height={32}
                      className="bg-cover bg-center rounded-full w-8 h-8"
                    />
                    <h5>BBC news</h5>
                    <span>1 hr ago</span>
                  </div>

                  <div>
                    <h4 className="mt-2 text-purple-900">
                      Lorem ipsum dolor sit, amet consectetu ullam.
                    </h4>
                    <p className="my-4 text-pin">
                      Lorem ipsum dolor sit amet consaute or sit amet consautem.{" "}
                      <Link href="">Read more</Link>
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
              </div>
              <Image
                src={War}
                alt=""
                width={800}
                height={380}
                className="bg-cover bg-center w-[800px] max-h-[380px]"
              />
            </div>

            {/* mobie screen */}
            <div className="block lg:hidden static p-4 lg:p-0 col-span-3">
              <div className="center-row-div mb-4">
                {/* avatar */}
                <Image
                  src={War}
                  alt=""
                  width={16}
                  height={16}
                  className="bg-cover bg-center rounded-full w-8 h-8"
                />
                <h6>BBC news</h6>
                <span>1 hr ago</span>
              </div>

              <div>
                <h5>Lorem ipsum dolor sit, amet consectetu ullam.</h5>
                <p className="my-4">
                  Lorem ipsum dolor sit amet consaute or sit amet consautem.{" "}
                  <Link href="">Read more</Link>
                </p>
              </div>

              <div className="center-row-div justify-between">
                <p>Aug 03, 2022</p>
                <div className="inline-flex gap-4">
                  <p>a</p>
                  <p>b</p>
                </div>
              </div>
            </div>

            {/* hero side news */}
            <div className="col-span-3 md:col-span-1 p-4 lg:p-0 flex flex-col md:flex-row md:flex-wrap lg:flex-col gap-4">
              <div className="flex items-start gap-2">
                {/* News items */}
                <div>
                  <Image
                    src={War}
                    alt=""
                    width={120}
                    height={120}
                    quality={70}
                    className="rounded-md w-[120px] h-[120px]"
                  />
                </div>

                <div>
                  <div className="center-row-div justify-start">
                    {/* avatar */}
                    <Image
                      src={War}
                      alt=""
                      width={16}
                      height={16}
                      className="bg-cover bg-center rounded-full w-8 h-8"
                    />
                    <h6>BBC news</h6>
                    <span>1 hr ago</span>
                  </div>
                  <div className="max-w-[15rem] text-sm mt-2">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ab, sequi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero */}
      </div>

      {/* Latest news */}
      <div className="px-8 mx-auto flex flex-col max-w-7xl">
        <div className="center-row-div justify-between">
          <div>
            <h5>Latest News</h5>
          </div>
          <div>
            <Link href="/news" className="text-lg text-danger center-row-div">
              See all
              <span>
                <ChevronRight color="red" />
              </span>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between gap-8 mt-8 overflow-x-scroll lg:overflow-hidden">
          <Box className="max-w-[250px] w-full">
            <Box w={250} h={250}>
              <div
                style={{
                  backgroundImage: `url(${War.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "250px",
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
                {/* avatar */}
                <Image
                  src={War}
                  alt=""
                  width={16}
                  height={16}
                  className="bg-cover bg-center rounded-full w-8 h-8"
                />
                <p>BBC news</p>
                <span>1 hr ago</span>
              </Box>
              <Box className=" text-sm my-3">
                <h6>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
                  sequi.
                </h6>
                <p className="mt-3 ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
                  sequi. Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Ab, sequi.
                </p>
              </Box>
            </Box>
            <Box display="flex" gap={4} fontSize={14}>
              <p className="text-danger">tech</p>
              <p>•</p>
              <p>8 mins ago</p>
            </Box>
          </Box>
          <Box className="max-w-[250px] w-full">
            <Box w={250} h={250}>
              <div
                style={{
                  backgroundImage: `url(${War.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "250px",
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
                {/* avatar */}
                <Image
                  src={War}
                  alt=""
                  width={16}
                  height={16}
                  className="bg-cover bg-center rounded-full w-8 h-8"
                />
                <p>BBC news</p>
                <span>1 hr ago</span>
              </Box>
              <Box className=" text-sm my-3">
                <h6 className="">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
                  sequi.
                </h6>
                <p className="mt-3 ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
                  sequi. Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Ab, sequi.
                </p>
              </Box>
            </Box>
            <Box display="flex" gap={4} fontSize={14}>
              <p className="text-danger">tech</p>
              <p>•</p>
              <p>8 mins ago</p>
            </Box>
          </Box>
          <Box className="max-w-[250px] w-full">
            <Box w={250} h={250}>
              <div
                style={{
                  backgroundImage: `url(${War.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "250px",
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
                {/* avatar */}
                <Image
                  src={War}
                  alt=""
                  width={16}
                  height={16}
                  className="bg-cover bg-center rounded-full w-8 h-8"
                />
                <p>BBC news</p>
                <span>1 hr ago</span>
              </Box>
              <Box className=" text-sm my-3">
                <h6 className="">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
                  sequi.
                </h6>
                <p className="mt-3 ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
                  sequi. Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Ab, sequi.
                </p>
              </Box>
            </Box>
            <Box display="flex" gap={4} fontSize={14}>
              <p className="text-danger">tech</p>
              <p>•</p>
              <p>8 mins ago</p>
            </Box>
          </Box>
          <Box className="max-w-[250px] w-full">
            <Box w={250} h={250}>
              <div
                style={{
                  backgroundImage: `url(${War.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "250px",
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
                {/* avatar */}
                <Image
                  src={War}
                  alt=""
                  width={16}
                  height={16}
                  className="bg-cover bg-center rounded-full w-8 h-8"
                />
                <p>BBC news</p>
                <span>1 hr ago</span>
              </Box>
              <Box className=" text-sm my-3">
                <h6 className="">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
                  sequi.
                </h6>
                <p className="mt-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
                  sequi. Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Ab, sequi.
                </p>
              </Box>
            </Box>
            <Box display="flex" gap={4} fontSize={14}>
              <p className="text-danger">tech</p>
              <p>•</p>
              <p>8 mins ago</p>
            </Box>
          </Box>
        </div>
      </div>
      {/* Latest news */}

      {/* Explore tech content by watching videos */}
      <section className="container py-20">
        <Box
          w="100%"
          p={8}
          color="white"
          borderRadius={{ base: "0", lg: "16px" }}
          className="bg-card-bg"
        >
          <div className="text-center max-w-[28rem] mx-auto text-secondary">
            <p className="uppercase tracking-widest mb-2">
              Watch <span className="text-primary">Tech Videos</span>
            </p>
            <h4>
              <Highlight query="tech" styles={{ p: 1, bg: "orange.100" }}>
                Explore latest tech videos around the world
              </Highlight>
            </h4>
            <button className="mt-8">
              <ArrowDownCircle />
            </button>
          </div>
        </Box>
      </section>
      {/* Video content */}
      <div className="px-8 mx-auto flex flex-col max-w-7xl">
        <div className="center-row-div justify-between">
          <div>
            <h5>Latest Videos</h5>
          </div>
          <div>
            <Link href="/video" className="text-lg text-danger center-row-div">
              See all
              <span>
                <ChevronRight color="red" />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <TechVideos />
      {/* Video content */}
      {/* Explore tech content by watching videos */}

      {/* Our mission */}
      <Box my="6rem">
        <Box>
          <Box textAlign="center" pb="2rem">
            <h2>Our Mission</h2>
          </Box>
          {/* className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center container" */}
          <Box display="grid" gridAutoFlow="row" gridTemplateColumns={{ sm: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap="16px" maxWidth="1280px" marginInline="auto" paddingInline="8"
          
          >
            <div className="group">
              <Card color="rgb(88 28 135/1)" backgroundColor="rgb(250 245 255/1)" borderRadius="14px" height="400px" paddingTop="8rem"
              display="flex" flexDirection="column" justifyItems="center" alignItems="center" alignContent="center" textAlign="center"
              className="group-hover:border-t-8 hover:transition duration-500 ease-in-out"
              >
                <div>
                {/* <Player
                  autoplay
                  loop
                  src=""
                  style={{ height: '300px', width: '300px' }}
                >
                  <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player> */}
                {/* <Player
                autoplay
                loop
                src="https://lottie.host/bcfbc395-09d1-4992-b543-4d07049ade3e/b0ennvhNRB.json"
                style={{ height: '100px', width: '100px' }}
                >
                  <Controls visible={false}/>
                </Player> */}
                <User2/>
                </div>
                <CardHeader py="0">
                  <Heading padding="16px 0 0" size="md" color="rgb(88 28 135/1)">Empowerment</Heading>
                </CardHeader>
                <CardBody>
                  <Box marginTop="-10px">
                    <Text fontSize="md" textAlign="center" color="rgb(88 28 135/1)">
                      We aim to empower individuals passionate about technology.
                    </Text>
                  </Box>
                </CardBody>
              </Card>
            </div>

            <div className="group">
              <Card backgroundColor="rgb(255 240 245/1)" color="#D7256D" borderRadius="14px" height="400px" paddingTop="8rem"
              display="flex" flexDirection="column" justifyItems="center" alignItems="center" alignContent="center" textAlign="center"
              className="group-hover:border-t-8 hover:transition duration-500 ease-in-out"
              >
                <User2 />
                <CardHeader py="0">
                  <Heading padding="16px 0 0" size="md" color="#D7256D">Comprehensive Information</Heading>
                </CardHeader>
                <CardBody>
                  <Box marginTop="-10px">
                    <Text fontSize="md" textAlign="center" color="rgb(102 14 57/1)">
                    Providing curated news, insightful articmative tech videos.
                    </Text>
                  </Box>
                </CardBody>
              </Card>
            </div>


            <div className="group">
              <Card backgroundColor="rgb(212 247 229/1)" color="rgb(6 95 70/1)" borderRadius="14px" height="400px" paddingTop="8rem"
              display="flex" flexDirection="column" justifyItems="center" alignItems="center" alignContent="center" textAlign="center"
              className="group-hover:border-t-8 hover:transition duration-500 ease-in-out"
              >
                <User2 />
                <CardHeader py="0">
                  <Heading padding="16px 0 0" size="md" color="rgb(6 95 70/1)">Community Engagement</Heading>
                </CardHeader>
                <CardBody>
                  <Box marginTop="-10px">
                    <Text fontSize="md" textAlign="center">
                    Fostering a vibrant community where enthusiasts can exchange ideas and expand their knowledge.
                    </Text>
                  </Box>
                </CardBody>
              </Card>
            </div>


            <div className="group">
              <Card backgroundColor="rgb(219 234 254/1)" color="rgb(30 64 175/1)" borderRadius="14px" paddingTop="8rem"
              height="400px" display="flex" flexDirection="column" justifyItems="center" alignItems="center" alignContent="center" textAlign="center"
              className="group-hover:border-t-8 hover:transition duration-500 ease-in-out"
              >
                <User2 />
                <CardHeader py="0">
                  <Heading padding="16px 0 0" size="md" color="rgb(30 64 175/1)">Staying Informed</Heading>
                </CardHeader>
                <CardBody>
                  <Box marginTop="-10px">
                    <Text fontSize="md" textAlign="center">
                    Our mission is to keep users informed and inspired in the ever-evolving world of technology.
                    </Text>
                  </Box>
                </CardBody>
              </Card>
            </div>
          </Box>
        </Box>
      </Box>
      {/* Our mission */}
    </div>
  );
}
