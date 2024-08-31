import React, { useState } from "react";
import {
  Badge,
  Box,
  Divider,
  Flex,
  IconButton,
  Image,
  Stat,
  StatNumber,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "@chakra-ui/icons";
const Section5 = () => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "40%", md: "40%" });
  const side = useBreakpointValue({ base: "0%", md: "0%" });

  const showButtons = useBreakpointValue({ base: true, md: true });

  // These are the images used in the slide
  const cards = [
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51889190830110.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51889190895646.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51869120593950.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51869120659486.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51889190830110.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51889190567966.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51889190633502.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51889190699038.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51889190764574.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51869117612062.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51869117972510.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51869118103582.jpg",
    },
  ];

  const cards2 = [
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51889190961182.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51889191026718.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51889191092254.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51889191157790.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51889191223326.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51889191288862.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51889191354398.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51889191419934.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51889190961182.jpg",
    },
  ];
  return (
    <Box pl={"70px"} pr={"70px"} pt={"40px"}>
      <Flex justifyContent={"center"} m={"5%"}>
        <Text fontWeight={"bold"} fontSize={"5xl"}>
          Seal the Deal
        </Text>
      </Flex>

      <Divider />

      <Box
        position={"relative"}
        height={"410px"}
        width={"full"}
        overflow={"hidden"}
        mt={"40px"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        {showButtons && (
          <IconButton
            aria-label="left-arrow"
            icon={<ChevronLeftIcon />}
            colorScheme="gray"
            borderRadius="full"
            position="absolute"
            fontSize="30px"
            left={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickPrev()}
          />
        )}
        {/* Right Icon */}
        {showButtons && (
          <IconButton
            aria-label="right-arrow"
            icon={<ChevronRightIcon />}
            colorScheme="gray"
            borderRadius="full"
            position="absolute"
            fontSize="30px"
            right={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickNext()}
          />
        )}
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((data, index) => (
            <Box key={index} px="35px">
              <Box
                position="relative"
                height={"340px"}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(${data.url})`}
                borderRadius="lg"
                cursor={"pointer"}
              ></Box>
            </Box>
          ))}
        </Slider>
      </Box>

      <Box
        position={"relative"}
        height={"410px"}
        width={"full"}
        overflow={"hidden"}
        mt={"40px"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        {showButtons && (
          <IconButton
            aria-label="left-arrow"
            icon={<ChevronLeftIcon />}
            colorScheme="gray"
            borderRadius="full"
            position="absolute"
            fontSize="30px"
            left={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickPrev()}
          />
        )}
        {/* Right Icon */}
        {showButtons && (
          <IconButton
            aria-label="right-arrow"
            icon={<ChevronRightIcon />}
            colorScheme="gray"
            borderRadius="full"
            position="absolute"
            fontSize="30px"
            right={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickNext()}
          />
        )}
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards2.map((data, index) => (
            <Box key={index} px="35px">
              <Box
                position="relative"
                height={"340px"}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(${data.url})`}
                borderRadius="lg"
                cursor={"pointer"}
              ></Box>
            </Box>
          ))}
        </Slider>
      </Box>

      <Box mt={"50px"} display={"flex"} justifyContent={"center"} mb={'100px'}>
        <Image
          w={"80%"}
          borderRadius={"lg"}
          border={"1px solid"}
          src="https://i.imgur.com/4sRwSIF.png"
        />
      </Box>
    </Box>
  );
};

export default Section5;
