import { Badge, Box, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";

// Image
import War from "../../../public/testImage/ukrainewar.webp";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div>
      <div className="container">
        <Box bg="#f5f5f5" w="100%" p={8} color="white" borderRadius={16}>
          <div className="text-center max-w-[28rem] mx-auto text-dark-text">
            <p className="uppercase tracking-widest mb-2">
              welome to <span className="text-secondary">InstaTech</span>
            </p>
            <h4>
              This is q quote fetch from an Api that will be rendered on the
              Page
            </h4>
          </div>
        </Box>

        {/* Hero */}
        <div className="my-[4rem]">
          <div className="grid lg:grid-flow-col grid-col-3 gap-4">
            <div className="relative col-span-3 lg:col-span-3 rounded-2xl max-h-[400px]">
              <div className="hidden lg:block lg:absolute -left-20 top-20 bg-gray lg:max-w-[25rem]">
                <Box p={8}>
                  <div className="center-row-div justify-start">
                    {/* avatar */}
                    <Image
                      src={War}
                      alt=""
                      width={16}
                      height={16}
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
                width={400}
                height={800}
                className="bg-cover bg-center w-full  lg:min-h-[27rem]"
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
                    height={96}
                    className="bg-cover bg-center h-24 rounded-md"
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
      <section className="px-8  pt-8 mx-auto flex flex-col max-w-7xl">
        <div className="center-row-div justify-between">
          <div>
            <h5>Latest News</h5>
          </div>
          <div>
            <Link href="" className="text-lg text-danger center-row-div">
              See all
              <span>
                <ChevronRight color="red" />
              </span>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 mt-8 overflow-x-scroll lg:overflow-hidden">
          <Box className="min-w-[250px] w-full">
            <Box>
              <Image src={War} alt="" width={300} height={400} className="rounded-xl"/>
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
                  sequi.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
                  sequi.
                </p>
              </Box>
            </Box>
            <Box display="flex" gap={4} fontSize={14}>
              <p className="text-danger">tech</p>
              <p>•</p>
              <p>8 mins ago</p>
            </Box>
          </Box>
          <Box className="min-w-[250px] w-full">
            <Box>
              <Image src={War} alt="" width={300} height={400} className="rounded-xl"/>
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
                  sequi.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
                  sequi.
                </p>
              </Box>
            </Box>
            <Box display="flex" gap={4} fontSize={14}>
              <p className="text-danger">tech</p>
              <p>•</p>
              <p>8 mins ago</p>
            </Box>
          </Box>
          <Box className="min-w-[250px] w-full">
            <Box>
              <Image src={War} alt="" width={300} height={400} className="rounded-xl"/>
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
                  sequi.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
                  sequi.
                </p>
              </Box>
            </Box>
            <Box display="flex" gap={4} fontSize={14}>
              <p className="text-danger">tech</p>
              <p>•</p>
              <p>8 mins ago</p>
            </Box>
          </Box>
          <Box className="min-w-[250px] w-full">
            <Box>
              <Image src={War} alt="" width={300} height={400} className="rounded-xl"/>
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
                  sequi.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
                  sequi.
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
      </section>
      {/* Latest news */}
    </div>
  );
}
