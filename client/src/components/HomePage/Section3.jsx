import { Box, Image } from '@chakra-ui/react';
import React from 'react'

const Section3 = () => {

    const card = [
        "https://assets.tatacliq.com/medias/sys_master/images/50074650869790.jpg",
        "https://assets.tatacliq.com/medias/sys_master/images/50040038359070.jpg",
        "https://assets.tatacliq.com/medias/sys_master/images/50063519580190.jpg",
       
      ];


  return (
    <Box
    mt={'1%'}
    display="flex"
    justifyContent={'center'}
    flexWrap="nowrap" // Prevent wrapping of images
    overflowX="auto" // Allow horizontal scroll if necessary (optional, can be removed)
    spacing={4} // Space between images (optional)
    p={4} // Padding (optional)
    gap={4} // Gap between images (optional)
  >
    {card.map((img, i) => (
      <Box key={i} minWidth="50px">
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
  )
}

export default Section3