import React, { useState } from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Section1 = () => {
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "70%", md: "70%" });
  const side = useBreakpointValue({ base: "2%", md: "2%" });

  // These are the images used in the slide
  const cards = [
    "https://assets.tatacliq.com/medias/sys_master/images/61699652091934.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/61699652157470.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/61750973431838.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/61695293456414.png",
    "https://assets.tatacliq.com/medias/sys_master/images/61699652223006.jpg",
  ];

  return (
    <Box position="relative" width="100%" height="300px">
      {/* Left Icon */}
      <IconButton
        icon={<ChevronLeftIcon />}
        colorScheme="gray"
        borderRadius="full"
        position="absolute"
        fontSize='30px'
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      />

      {/* Right Icon */}
      <IconButton
        icon={<ChevronRightIcon />}
        colorScheme="gray"
        borderRadius="full"
        position="absolute"
        fontSize='30px'
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      />

      {/* Slider */}
      <Slider
        {...settings}
        ref={(slider) => setSlider(slider)}
        style={{ width: '100%', height: '100%' }}
      >
        {cards.map((url, index) => (
          <Box key={index} height="100%">
            <img
              src={url}
              alt={`Slide ${index}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default Section1;
