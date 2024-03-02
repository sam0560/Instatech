"use client"

// import components
import TechVideos from "../video/page";
import FetchQuotes from "../component/FetchQuotes";

import Image from "next/image";
import Link from "next/link";

import fetchNews from "../../api/fetchNews";

// Image
import War from "../../../public/testImage/ukrainewar.webp";
import NoImage from "../../../public/testImage/no-img.png";

import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Highlight,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {
  ArrowDownCircle,
  ChevronLeft,
  ChevronRight,
  User2,
} from "lucide-react";
import { useState } from "react";

export default async function page() {
  const [startNumber, setStartNumber] = useState<number>(0);
  
  const news = await fetchNews();
  
  const numbers: number[] = Array.from({length: 7}, (_, index) => index + 10);

  const navigateForward = (): void => {
    setStartNumber(prevIndex => {
      return prevIndex < numbers.length - 1 ? prevIndex + 1 : prevIndex;
    });
  }

  const navigateBackward = (): void => {
    setStartNumber(prevIndex => {
      return prevIndex > 0 ? prevIndex - 1 : prevIndex;
    });
  }

  const heroStartingNumber:number = numbers[startNumber];
  // HeroNews

  const heroNews = news[heroStartingNumber];
  
  // SideNews
  const sideNews = news.slice(heroStartingNumber, (heroStartingNumber + 5));
  // Latest news
  const latestNews = news.slice(0, 10);

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
              <div className="absolute left-0 max-lg:bottom-0 lg:-left-20 lg:top-20 bg-card-bg-2 z-10 lg:max-w-[25rem]">
                {
                  <Box p={8}>
                    <div className="center-row-div justify-start">
                      {/* avatar */}
                      <Wrap>
                        <WrapItem>
                          <Avatar
                            size="sm"
                            src={heroNews.urlToImage}
                            name="Small Avatar"
                            bg="pink.100"
                          />
                        </WrapItem>
                      </Wrap>
                      <h5>{heroNews.source.name}</h5>
                      <span>1 hr ago</span>
                    </div>

                    <div>
                      <h4 className="mt-2 text-purple-900">
                        {heroNews.title.slice(0, 55)} ...
                      </h4>
                      <p className="my-4 text-pin">
                        {heroNews.description.slice(0, 65)}
                        <Link href="" className="text-primary text-base">
                          {" "}
                          Read more
                        </Link>
                      </p>
                    </div>

                    <div className="center-row-div justify-between">
                      <p>Aug 03, 2022</p>
                      <div className="inline-flex gap-4">
                        <button onClick={navigateBackward} disabled={startNumber === 0}>
                          <ChevronLeft size={16} />
                        </button>
                        <button onClick={navigateForward} disabled={startNumber === numbers.length - 1}>
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  </Box>
                }
              </div>
              <Box maxW="700px" h={420} w={{base: '100%', sm: '700px'}}>
                <div
                    style={{
                      backgroundImage: `url(${heroNews.urlToImage})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      width: "100%",
                      height: "420px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  ></div>
              </Box>
            </div>

            {/* hero side news */}
            <div className="p-4 lg:p-0 lg:flex flex-col gap-4 flex md:hidden">
              {
                sideNews.map((item)=> (
                <div className="flex items-start gap-2" key={item.url}>
                {/* News items */}
                <Box w={120} h={70}>
                <div
                    style={{
                      backgroundImage: `url(${item.urlToImage})`,
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
              </Box>

                <div>
                  <div className="center-row-div justify-start">
                    {/* avatar */}
                    <Wrap>
                        <WrapItem>
                          <Avatar
                            size="xs"
                            src={item.urlToImage}
                            name="Small Avatar"
                            bg="pink.100"
                          />
                        </WrapItem>
                      </Wrap>
                    <p>{item.source.name}</p>
                  </div>
                  <div className="max-w-[12.5rem] text-sm mt-2">
                    <h6 className="text-sm">
                      {item.title.slice(0,50)} ...
                    </h6>
                  </div>
                </div>
              </div>
                ))
                }
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

        <div className="flex items-center gap-8 mt-8 overflow-x-scroll lg:overflow-hidden">
          {latestNews.map((i) => (
            <Box className="max-w-[280px] w-full" key={i.url}>
              <Box w={280} h={250}>
                <div
                  style={{
                    backgroundImage: `url(${i.urlToImage})`,
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
                        src={i.urlToImage}
                        name="Small Avatar"
                        bg="pink.100"
                      />
                    </WrapItem>
                  </Wrap>
                  <p className="uppercase">{i.source.name}</p>
                </Box>
                <Box className=" text-sm my-3">
                  <h6 className="text-justify">{i.title.slice(0, 30)} ...</h6>
                  <p className="mt-3 text">
                    {i.description?.slice(0, 90)}
                    <span>
                      <Link href="" className="text-primary text-xs">
                        {" "}
                        read more
                      </Link>
                    </span>
                  </p>
                </Box>
              </Box>
              <Box display="flex" gap={4} fontSize={14}>
                <p className="text-primary">{i.source.name}</p>
                <p>•</p>
                <p>8 mins ago</p>
              </Box>
            </Box>
          ))}
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
          <Box
            display="grid"
            gridAutoFlow="row"
            gridTemplateColumns={{
              sm: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap="16px"
            maxWidth="1280px"
            marginInline="auto"
            paddingInline="8"
          >
            <div className="group">
              <Card
                color="rgb(88 28 135/1)"
                backgroundColor="rgb(250 245 255/1)"
                borderRadius="14px"
                height="400px"
                paddingTop="8rem"
                display="flex"
                flexDirection="column"
                justifyItems="center"
                alignItems="center"
                alignContent="center"
                textAlign="center"
                className="group-hover:border-t-8 hover:transition duration-500 ease-in-out"
              >
                <div>
                  <User2 />
                </div>
                <CardHeader py="0">
                  <Heading
                    padding="16px 0 0"
                    size="md"
                    color="rgb(88 28 135/1)"
                  >
                    Empowerment
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Box marginTop="-10px">
                    <Text
                      fontSize="md"
                      textAlign="center"
                      color="rgb(88 28 135/1)"
                    >
                      We aim to empower individuals passionate about technology.
                    </Text>
                  </Box>
                </CardBody>
              </Card>
            </div>

            <div className="group">
              <Card
                backgroundColor="rgb(255 240 245/1)"
                color="#D7256D"
                borderRadius="14px"
                height="400px"
                paddingTop="8rem"
                display="flex"
                flexDirection="column"
                justifyItems="center"
                alignItems="center"
                alignContent="center"
                textAlign="center"
                className="group-hover:border-t-8 hover:transition duration-500 ease-in-out"
              >
                <User2 />
                <CardHeader py="0">
                  <Heading padding="16px 0 0" size="md" color="#D7256D">
                    Comprehensive Information
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Box marginTop="-10px">
                    <Text
                      fontSize="md"
                      textAlign="center"
                      color="rgb(102 14 57/1)"
                    >
                      Providing curated news, insightful articmative tech
                      videos.
                    </Text>
                  </Box>
                </CardBody>
              </Card>
            </div>

            <div className="group">
              <Card
                backgroundColor="rgb(212 247 229/1)"
                color="rgb(6 95 70/1)"
                borderRadius="14px"
                height="400px"
                paddingTop="8rem"
                display="flex"
                flexDirection="column"
                justifyItems="center"
                alignItems="center"
                alignContent="center"
                textAlign="center"
                className="group-hover:border-t-8 hover:transition duration-500 ease-in-out"
              >
                <User2 />
                <CardHeader py="0">
                  <Heading padding="16px 0 0" size="md" color="rgb(6 95 70/1)">
                    Community Engagement
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Box marginTop="-10px">
                    <Text fontSize="md" textAlign="center">
                      Fostering a vibrant community where enthusiasts can
                      exchange ideas and expand their knowledge.
                    </Text>
                  </Box>
                </CardBody>
              </Card>
            </div>

            <div className="group">
              <Card
                backgroundColor="rgb(219 234 254/1)"
                color="rgb(30 64 175/1)"
                borderRadius="14px"
                paddingTop="8rem"
                height="400px"
                display="flex"
                flexDirection="column"
                justifyItems="center"
                alignItems="center"
                alignContent="center"
                textAlign="center"
                className="group-hover:border-t-8 hover:transition duration-500 ease-in-out"
              >
                <User2 />
                <CardHeader py="0">
                  <Heading
                    padding="16px 0 0"
                    size="md"
                    color="rgb(30 64 175/1)"
                  >
                    Staying Informed
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Box marginTop="-10px">
                    <Text fontSize="md" textAlign="center">
                      Our mission is to keep users informed and inspired in the
                      ever-evolving world of technology.
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
