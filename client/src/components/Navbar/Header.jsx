import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { IoMdHeartEmpty } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { SlHandbag } from "react-icons/sl";
import { FaRegBell } from "react-icons/fa";
import { MdCardGiftcard } from "react-icons/md";
import { TbCoinRupee } from "react-icons/tb";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Signup from "../../pages/Signup";

const categories = [
  {
    name: "Women's Fashion",
    subcategories: [
      {
        name: "Shop All Ethnic Wear",
        items: [
          "Kurtis & Kurtas",
          "Suits",
          "Sarees",
          "Lehengas",
          "Bottoms",
          "Blouses & Fabrics",
          "Dupattas",
        ],
      },
      {
        name: "Shop All Western Wear",
        items: [
          "Tops & T-shirts",
          "Dresses",
          "Jeans",
          "Shirts",
          "Trousers",
          "Skirts",
        ],
      },
      {
        name: "Activewear & Sportswear",
        items: [
          "T-shirts",
          "Shorts",
          "Sets",
          "Jackets",
          "Track Pants",
          "Innerwear",
        ],
      },
      {
        name: "Shop All Footwear",
        items: [
          "Casual Footwear",
          "Boots",
          "Sneakers",
          "Flip Flops",
          "Sports Shoes",
          "Ethnic Footwear",
        ],
      },
      {
        name: "Jewellery",
        items: ["Gold", "Diamond", "Silver", "Fashion Jewellery"],
      },
      {
        name: "Bags, Wallets & Clutches",
        items: [
          "Hand Bags",
          "Tote Bags",
          "Sling Bags",
          "Backpacks",
          "Wallets",
          "Clutches",
        ],
      },
    ],
  },
  {
    name: "Men's Fashion",
    subcategories: [
      {
        name: "Tops",
        items: [
          "T-shirts",
          "Polo T-shirts",
          "Shirts",
          "Formal Shirts",
          "Sweatshirts",
          "Jackets",
          "Suits",
        ],
      },
      {
        name: "Bottoms",
        items: [
          "Jeans",
          "Chinos",
          "Trousers",
          "Formal Trousers",
          "Shorts",
          "Joggers",
          "Track Pants",
        ],
      },
      {
        name: "Activewear",
        items: [
          "T-shirts & Jerseys",
          "Sports Shorts",
          "Sports jackets",
          "Joggers",
        ],
      },
      {
        name: "Footwear",
        items: [
          "Casual Footwear",
          "Boots",
          "Sneakers",
          "Flip Flops",
          "Sports Shoes",
          "Ethnic Footwear",
        ],
      },
      {
        name: "Fashion Accessories",
        items: ["Watches", "Belts", "Ties", "Hats"],
      },
      {
        name: "Sports and fitness equipment",
        items: ["Fitness Equipment", "Sports equipment", "Treadmill"],
      },
    ],
  },
  { name: "Kid's Fashion", subcategories: [] },
  { name: "Home & Kitchen", subcategories: [] },
  { name: "Beauty", subcategories: [] },
  { name: "Gadgets", subcategories: [] },
  { name: "Jewellery", subcategories: [] },
  { name: "Accessories", subcategories: [] },
];

const brands = [
  {
    name: "Women's Wear",
    subcategories: [
      {
        name: "Shop All Ethnic Wear",
        items: [
          "Kurtis & Kurtas",
          "Suits",
          "Sarees",
          "Lehengas",
          "Bottoms",
          "Blouses & Fabrics",
          "Dupattas",
        ],
      },
      {
        name: "Shop All Western Wear",
        items: [
          "Tops & T-shirts",
          "Dresses",
          "Jeans",
          "Shirts",
          "Trousers",
          "Skirts",
        ],
      },
      {
        name: "Activewear & Sportswear",
        items: [
          "T-shirts",
          "Shorts",
          "Sets",
          "Jackets",
          "Track Pants",
          "Innerwear",
        ],
      },
      {
        name: "Shop All Footwear",
        items: [
          "Casual Footwear",
          "Boots",
          "Sneakers",
          "Flip Flops",
          "Sports Shoes",
          "Ethnic Footwear",
        ],
      },
      {
        name: "Jewellery",
        items: ["Gold", "Diamond", "Silver", "Fashion Jewellery"],
      },
      {
        name: "Bags, Wallets & Clutches",
        items: [
          "Hand Bags",
          "Tote Bags",
          "Sling Bags",
          "Backpacks",
          "Wallets",
          "Clutches",
        ],
      },
    ],
  },
  {
    name: "Men's Wear",
    subcategories: [
      {
        name: "Tops",
        items: [
          "T-shirts",
          "Polo T-shirts",
          "Shirts",
          "Formal Shirts",
          "Sweatshirts",
          "Jackets",
          "Suits",
        ],
      },
      {
        name: "Bottoms",
        items: [
          "Jeans",
          "Chinos",
          "Trousers",
          "Formal Trousers",
          "Shorts",
          "Joggers",
          "Track Pants",
        ],
      },
      {
        name: "Activewear",
        items: [
          "T-shirts & Jerseys",
          "Sports Shorts",
          "Sports jackets",
          "Joggers",
        ],
      },
      {
        name: "Footwear",
        items: [
          "Casual Footwear",
          "Boots",
          "Sneakers",
          "Flip Flops",
          "Sports Shoes",
          "Ethnic Footwear",
        ],
      },
      {
        name: "Fashion Accessories",
        items: ["Watches", "Belts", "Ties", "Hats"],
      },
      {
        name: "Sports and fitness equipment",
        items: ["Fitness Equipment", "Sports equipment", "Treadmill"],
      },
    ],
  },
  { name: "Footwear", subcategories: [] },
  { name: "Jewellery", subcategories: [] },
  { name: "Watches & Accessories", subcategories: [] },
  { name: "Kids", subcategories: [] },
];

const Header = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const { isLogin } = useSelector((state) => state.loginState);
  const handleNavigation = useNavigate();

  const data = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleClick = (elem) => {
    const category = elem;
    handleNavigation(`/products`);
    handleNavigation(
      `/products?category=${category.replace(" & ", "%20%26%20")}`
    );
    onclose();
  };

  return (
    <Box display={"flex"} flexDirection={{ base: "column", lg: "row" }}>
      {/* Image section */}
      <Box
        bg={"#212121"}
        border={"1px solid"}
        w={{ base: "100%", lg: "25%" }}
        h={{ base: "80px", lg: "100px" }}
        alignContent={"center"}
        pl={{ base: "20px", lg: "110px" }}
        display="flex"
        alignItems="center"
      >
        <Link to={"/"}>
          <Image
            boxSize={{ base: "50px", lg: "70px" }}
            src="https://www.tatacliq.com/src/general/components/img/group.svg"
            alt="Logo"
          />
        </Link>
      </Box>

      <Box w={"100%"}>
        {/* Top section */}
        <Box
          display={"flex"}
          flexDirection={{ base: "column", sm: "row" }}
          gap={5}
          bg={"black"}
          p={"10px"}
          fontSize={"small"}
          fontWeight={"bold"}
          justifyContent={{ base: "center", sm: "space-between" }}
          alignItems={"center"}
        >
          <Box ml={{ base: 0, sm: 3 }}>
            <Text color={"white"} _hover={{ cursor: "pointer" }}>
              Tata CLiQ Luxury
            </Text>
          </Box>
          <Box
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            gap={5}
            marginRight={{ base: 0, sm: "130px" }}
          >
            <Text color={"white"} _hover={{ cursor: "pointer" }}>
              CLiQ Cash
            </Text>
            <Text color={"white"} _hover={{ cursor: "pointer" }}>
              Gift Card
            </Text>
            <Text color={"white"} _hover={{ cursor: "pointer" }}>
              CLiQ Care
            </Text>
            <Text color={"white"} _hover={{ cursor: "pointer" }}>
              Track Orders
            </Text>

            <Popover trigger="hover">
              {isLogin || data?.isAuth ? (
                <Box
                  role="button"
                  onClick={handleLogout}
                  color={"black"}
                  w="100px"
                  bg="white"
                  textAlign={"center"}
                  borderRadius={"3xl"}
                  children="Logout"
                />
              ) : (
                <PopoverTrigger>
                  <Box
                    role="button"
                    color={"white"}
                    w="120px"
                    bg="black"
                    children="Sign in/Sign Up"
                  />
                </PopoverTrigger>
              )}
              <PopoverContent alignItems={"center"} w={"220px"}>
                <PopoverArrow />
                <Button
                  bg={"red"}
                  color={"white"}
                  borderRadius={"3xl"}
                  my={"15px"}
                >
                  <Signup />
                </Button>

                <PopoverHeader>
                  <Link>
                    <Flex gap={2} alignItems={"center"}>
                      <RxAvatar size={"20px"} />
                      My Account
                    </Flex>
                  </Link>
                </PopoverHeader>
                <PopoverHeader>
                  <Link>
                    <Flex gap={2} alignItems={"center"}>
                      <SlHandbag size={"20px"} />
                      Order History
                    </Flex>
                  </Link>
                </PopoverHeader>
                <PopoverHeader>
                  <Link>
                    <Flex gap={2} alignItems={"center"}>
                      <IoMdHeartEmpty size={"20px"} />
                      My Wishlist
                    </Flex>
                  </Link>
                </PopoverHeader>
                <PopoverHeader>
                  <Link>
                    <Flex gap={2} alignItems={"center"}>
                      <FaRegBell size={"20px"} />
                      Alerts & Coupons
                    </Flex>
                  </Link>
                </PopoverHeader>
                <PopoverHeader>
                  <Link>
                    <Flex gap={2} alignItems={"center"}>
                      <MdCardGiftcard size={"20px"} />
                      Gift Card
                    </Flex>
                  </Link>
                </PopoverHeader>
                <PopoverHeader>
                  <Link>
                    <Flex gap={2} alignItems={"center"}>
                      <TbCoinRupee size={"20px"} />
                      CLiQ Cash
                    </Flex>
                  </Link>
                </PopoverHeader>
              </PopoverContent>
            </Popover>
          </Box>
        </Box>

        {/* Categories and Brands Menu */}
        <Box
          bg={"#212121"}
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          h={{ base: "auto", md: "60.5px" }}
          alignItems={"center"}
          p={{ base: "10px 20px", md: "0" }}
        >
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={Button}
                  rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  height={"54px"}
                  bg={"#212121"}
                  color={"#FFF"}
                  borderRadius={0}
                  width={{ base: "100%", md: "auto" }}
                  mb={{ base: 2, md: 0 }}
                >
                  Categories
                </MenuButton>
                <MenuList zIndex={5}>
                  <Flex flexDirection={{ base: "column", md: "row" }}>
                    <Box
                      width={{ base: "100%", md: "200px" }}
                      borderBottom={{ base: "1px solid", md: "none" }}
                      borderColor="gray.200"
                    >
                      {categories.map((category) => (
                        <Box
                          key={category.name}
                          onMouseEnter={() => setActiveCategory(category)}
                        >
                          <MenuItem
                            fontWeight={
                              activeCategory.name === category.name
                                ? "bold"
                                : "normal"
                            }
                            w={{ base: "100%", md: "auto" }}
                          >
                            {category.name}
                          </MenuItem>
                        </Box>
                      ))}
                    </Box>
                    {activeCategory && (
                      <Box
                        flex={1}
                        p={4}
                        w={{ base: "100%", md: "800px" }}
                        display={{
                          base:
                            activeCategory.subcategories.length > 0
                              ? "block"
                              : "none",
                          md: "block",
                        }}
                      >
                        <Flex flexWrap="wrap">
                          {activeCategory.subcategories.map((subcat) => (
                            <Box key={subcat.name} width="30%" mb={4}>
                              <Text fontWeight="semibold" mb={2}>
                                {subcat.name}
                              </Text>
                              {subcat.items.map((item) => (
                                <Link to={"/products?category=clothing"}>
                                  <Text
                                    key={item}
                                    fontSize="sm"
                                    color="gray.600"
                                  >
                                    {item}
                                  </Text>
                                </Link>
                              ))}
                            </Box>
                          ))}
                        </Flex>
                      </Box>
                    )}
                  </Flex>
                </MenuList>
              </>
            )}
          </Menu>

          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={Button}
                  rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  height={"54px"}
                  bg={"#212121"}
                  color={"#FFF"}
                  borderRadius={0}
                  width={{ base: "100%", md: "auto" }}
                  mb={{ base: 2, md: 0 }}
                >
                  Brands
                </MenuButton>
                <MenuList zIndex={5}>
                  <Flex flexDirection={{ base: "column", md: "row" }}>
                    <Box
                      width={{ base: "100%", md: "200px" }}
                      borderBottom={{ base: "1px solid", md: "none" }}
                      borderColor="gray.200"
                    >
                      {brands.map((brand) => (
                        <Box
                          key={brand.name}
                          onMouseEnter={() => setActiveCategory(brand)}
                        >
                          <MenuItem
                            fontWeight={
                              activeCategory.name === brand.name
                                ? "bold"
                                : "normal"
                            }
                            w={{ base: "100%", md: "auto" }}
                          >
                            {brand.name}
                          </MenuItem>
                        </Box>
                      ))}
                    </Box>
                    {activeCategory && (
                      <Box
                        flex={1}
                        p={4}
                        w={{ base: "100%", md: "800px" }}
                        display={{
                          base:
                            activeCategory.subcategories.length > 0
                              ? "block"
                              : "none",
                          md: "block",
                        }}
                      >
                        <Flex flexWrap="wrap">
                          {activeCategory.subcategories.map((subcat) => (
                            <Box key={subcat.name} width="30%" mb={4}>
                              <Text fontWeight="semibold" mb={2}>
                                {subcat.name}
                              </Text>
                              {subcat.items.map((item) => (
                                <Text key={item} fontSize="sm" color="gray.600">
                                  {item}
                                </Text>
                              ))}
                            </Box>
                          ))}
                        </Flex>
                      </Box>
                    )}
                  </Flex>
                </MenuList>
              </>
            )}
          </Menu>

          {/* Search Box */}
          <InputGroup
            bg={"#4a4a4a"}
            w={{ base: "100%", md: "55%" }}
            borderRadius={"md"}
            height={"40px"}
            ml={{ base: "0", md: "20px" }}
            mt={{ base: "10px", md: 0 }}
          >
            <InputLeftElement pointerEvents="none" mt={1} ml={2}>
              <SearchIcon />
            </InputLeftElement>
            <Input
              pl="3.5rem"
              placeholder="Search for Categories"
              border={"none"}
              _hover={"none"}
            />
          </InputGroup>

          {/* Wishlist and Cart */}
          <Box
            display={"flex"}
            w={{ base: "100%", md: "140px" }}
            h={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={{ base: "20px", md: "40px" }}
            ml={{ base: "0", md: "10px" }}
            mt={{ base: "10px", md: 0 }}
          >
            <IoMdHeartEmpty color="white" size={"25px"} />
            <Link to={"/cart"}>
              <SlHandbag color="white" size={"25px"} />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
