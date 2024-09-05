import {
  Box,
  Card,
  CardHeader,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Section4 = () => {
  const cards = [
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51869116956702.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51869117022238.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51869117087774.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51869117153310.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51869117284382.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51869117349918.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51869117415454.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51869117480990.jpg",
    },
    {
      url: "https://assets.tatacliq.com/medias/sys_master/images/51869120135198.jpg",
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

  return (
    <Box >
      <Flex justifyContent={"center"} m={"5%"}>
        <Text fontWeight={"bold"} fontSize={"5xl"}>
          Blockbuster Deals
        </Text>
      </Flex>

      <Flex justifyContent={'center'} >
      <SimpleGrid
        spacing={1} // Reduced spacing
        templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
        mt={"20px"}
        w={'80%'}
        justifyItems="center" // Centering items horizontally
        alignItems="center" // Centering items vertically
      >
        {cards.map((ele, i) => (
          <Card
          bgColor={"#ececec"}
            key={i}
            _hover={{
              cursor: "pointer",
            }}
            shadow={"none"}
          >
            <CardHeader>
              <Image src={ele.url} borderRadius={"lg"} />
            </CardHeader>
          </Card>
        ))}
      </SimpleGrid>
      </Flex>

     


      <Box mt={"50px"} display={'flex'} justifyContent={'center'}>
        <Image
        w={'80%'}
          borderRadius={"lg"}
          src="https://tatacliq-ruby.vercel.app/static/media/estside_banner_img.6f07ac1afd78541edea7.png"
        />
      </Box>
    </Box>
  );
};

export default Section4;
