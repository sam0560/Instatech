// import components
import TechVideos from "../video/page";

import Image from "next/image";
import Link from "next/link";

// Image
import War from "../../../public/testImage/ukrainewar.webp";

import {
  Badge,
  Box,
  Center,
  Grid,
  GridItem,
  Highlight,
} from "@chakra-ui/react";
import { ArrowDownCircle, ChevronLeft, ChevronRight } from "lucide-react";

export default function page() {
  return (
    <div>
      <div className="container">
        <Box
          bg="#f5f5f5"
          w="100%"
          p={8}
          color="white"
          borderRadius={{ base: "0", lg: "16px" }}
        >
          <div className="text-center max-w-[28rem] mx-auto text-dark-text">
            <p className="uppercase tracking-widest mb-2">
              welome to <span className="text-secondary">InstaTech</span>
            </p>
            <h4>
              {/* <FetchQuotes/> */}
              This is a quote fetched from an API that will be rendered on the
              page
            </h4>
          </div>
        </Box>

        {/* Hero */}
        <div className="my-[4rem]">
          <div className="grid lg:grid-flow-col grid-col-3 gap-4">
            <div className="relative col-span-3 lg:col-span-3 rounded-2xl">
              <div className="hidden lg:block lg:absolute -left-20 top-20 bg-gray lg:max-w-[25rem]">
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
                    <h4 className="mt-2">
                      Lorem ipsum dolor sit, amet consectetu ullam.
                    </h4>
                    <p className="my-4">
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
                <h6 className="text-justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
                  sequi.
                </h6>
                <p className="mt-3 text-justify">
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
                <h6 className="text-justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
                  sequi.
                </h6>
                <p className="mt-3 text-justify">
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
                <h6 className="text-justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
                  sequi.
                </h6>
                <p className="mt-3 text-justify">
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
                <h6 className="text-justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
                  sequi.
                </h6>
                <p className="mt-3 text-justify">
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
          bg="#f5f5f5"
          w="100%"
          p={8}
          color="white"
          borderRadius={{ base: "0", lg: "16px" }}
        >
          <div className="text-center max-w-[28rem] mx-auto text-dark-text">
            <p className="uppercase tracking-widest mb-2">
              Watch <span className="text-secondary">Tech Videos</span>
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
    </div>
  );
}
