import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Section2 = () => {
  const card = [
    "https://assets.tatacliq.com/medias/sys_master/images/51869107945502.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869108011038.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869108076574.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869108142110.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869108207646.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869108273182.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869108338718.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869108404254.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869108469790.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869108535326.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869108600862.jpg",
  ];

  return (
    <Box
      mt={"12%"}
      display="flex"
      flexWrap="nowrap" // Prevent wrapping of images
      overflowX="auto" // Allow horizontal scroll if necessary (optional, can be removed)
      spacing={4} // Space between images (optional)
      p={4} // Padding (optional)
      gap={4} // Gap between images (optional)
    >
      {card.map((img, i) => (
        <Box key={i} minWidth="50px" cursor={'pointer'}>
          <Image
            src={img}
            alt="items"
            objectFit="cover"
            width="100%%"
            height="auto"
          />
        </Box>
      ))}

     
    </Box>
  );
};

export default Section2;
