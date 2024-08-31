import React from "react";
import { Box, SimpleGrid, Text, Link, Flex } from "@chakra-ui/react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const sections = [
    {
      title: "Tata MarketPlace",
      links: [
        "About Us",
        "Careers",
        "Sell With Us",
        "Terms of Use",
        "Privacy Policy",
        "Affiliates",
        "Sitemap",
      ],
    },
    {
      title: "Customer Service",
      links: [
        "Shopping",
        "Offers & Promotions",
        "Payments",
        "Cancellation",
        "Returns & Refunds",
        "CliQ And PiQ",
        "Return To Store",
        "Electronics Return Policy",
        "Contact Us",
        "Reviews Guidelines",
        "Furniture Return Policy",
        "Replacement Policy",
      ],
    },
    {
      title: "My Tata CLiQ",
      links: ["My Account", "My Orders", "My Shopping Bag", "My Wishlist"],
    },
    {
      title: "Tata CLiQ Offerings",
      links: [
        "Watches for Men",
        "Campus Shoes",
        "Sandals for Men",
        "Sneakers for Men",
        "Reebok Shoes",
        "Cotton Kurtis",
        "Woodland Shoes",
        "Jumpsuits",
        "Allen Solly",
        "Sparx Shoes",
        "Gold Rings",
        "Formal Shoes for Men",
        "Sports Shoes for Men",
        "Wallets for Men",
        "Ladies Watches",
        "Trolley Bags",
        "Handbags for Women",
        "Sling Bags for Women",
        "Casual Shoes for Men",
        "Boots for Men",
        "Digital Watches",
        "Sonata Watches",
        "Sneakers for Women",
        "Running Shoes",
        "Puma Shoes",
        "Boots for Women",
        "Skechers",
        "Malabargold",
        "Fabindia",
        "Utsa",
        "Vark",
        "Gia",
        "LOV",
        "Sitemap",
      ],
    },
  ];

  return (
    <Box>
      <Box bg="white" p={"100px"}>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
          {sections.map((section, index) => (
            <Box key={index}>
              <Text fontWeight="bold" mb={4}>
                {section.title}
              </Text>
              {section.title === "Tata CLiQ Offerings" ? (
                <Box>
                  {section.links.map((link, idx) => (
                    <React.Fragment key={idx}>
                      <Link href="#" display="inline-block" mb={2} mr={1}>
                        {link}
                      </Link>
                      {idx % 4 !== 3 && idx < section.links.length - 1 && (
                        <span>|</span>
                      )}
                      {idx % 4 === 3 && <br />}
                    </React.Fragment>
                  ))}
                </Box>
              ) : (
                section.links.map((link, idx) => (
                  <Link href="#" display="block" mb={2} key={idx}>
                    {link}
                  </Link>
                ))
              )}
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box
        bg={"#f9f9f9"}
        display={"flex"}
        justifyContent={"space-between"}
          alignItems={'center'}
        h={"100px"}
        px={'100px'}
      >
        <Box>
          <Text>Download App</Text>
        </Box>

        <Box display={'flex'} gap={4} >
        <FaFacebookSquare size={'25px'}/>
        <FaSquareXTwitter size={'25px'}/>
        <FaInstagramSquare size={'25px'}/>
        <FaYoutube size={'25px'}/>
        <FaLinkedin size={'25px'}/>
        </Box>

        <Box>
          <Text color={"black"} fontSize={"s"}>
            © 2024 Tata CLiQ | All rights reserved
          </Text>
        </Box>
      </Box>

      <Box bg="white" p={8} px={'100px'}>
      <Text fontWeight="bold" fontSize="md" mb={4}>
        TATA CLiQ: Shop Online with India's most trusted destination
      </Text>

      <Text mb={4}>
        Genuine products from all the top brands get delivered right to your doorstep. Our sleek, immersive design allows you to easily navigate between categories and brand stores so that you can find a wide selection of 
        <Link href="#" textDecoration="underline">womenswear</Link>, 
        <Link href="#" textDecoration="underline">menswear</Link>, 
        <Link href="#" textDecoration="underline">kidswear</Link>, 
        <Link href="#" textDecoration="underline">footwear</Link>, 
        <Link href="#" textDecoration="underline">watches</Link>, 
        <Link href="#" textDecoration="underline">accessories</Link>, 
        <Link href="#" textDecoration="underline">footwear</Link>, 
        <Link href="#" textDecoration="underline">watches</Link>, 
        <Link href="#" textDecoration="underline">accessories</Link> 
        online. You can also check our great offers and get the best prices on various products across lifestyle, fashion, and more.
      </Text>

      <Text fontWeight="bold" fontSize="md" mb={4}>
        Online Shopping: Fast & convenient with the click of a button
      </Text>

      <Text mb={4}>
        The upside of online shopping at TATA CLiQ online store, is that you'll save on time and most importantly money with TataCLiQ offers. It's as simple as comparing products and prices online before making the right buy. What's more, you also have the option to pay for your favourite brands and products using our easy EMI options. Of course, you can buy and try – in the convenience of your home. Returns are easy too: We'll pick up your returns for free or you can also drop off the goods at the nearest brand store.
      </Text>

      <Text fontWeight="bold" fontSize="md" mb={4}>
        Tata CLiQ Shopping App: just a few clicks on Android & iOS
      </Text>

      <Text mb={4}>
        Download the Android app from the 
        <Link href="#" textDecoration="underline">Play Store</Link> or the iOS app from 
        <Link href="#" textDecoration="underline">Apple App Store</Link> and get set to enjoy a range of benefits. Apart from the best deals, amazing offers and the latest styles online, the app also gives you the flexibility to shop at your convenience. Use the easy share options to share your shopping with your friends and family to ensure you're buying something perfect. With constant updates and a host of new features being introduced constantly, enjoy a shopping experience that you'll love.
      </Text>

      <Text fontWeight="bold" fontSize="md" mb={4}>
        TATA CLiQ: The most genuine place for Fashion and Lifestyle
      </Text>

      <Text mb={4}>
        With an exclusive Brand Store for 
        <Link href="#" textDecoration="underline">Westside Online</Link> we have most of your trendy shopping needs taken care of. Make TATA CLiQ your online shopping destination and get the best deals on your favourite brands, with 100% genuine products. Be it jewellery or makeup, you can count on TATA CLiQ for receiving only the most authentic products.
      </Text>
    </Box>
    </Box>
  );
};

export default Footer;
