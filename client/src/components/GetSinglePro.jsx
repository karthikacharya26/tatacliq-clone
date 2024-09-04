import { Box, Divider, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

function GetSinglePro({ singleData, setAllProducts, allProducts }) {
  const [product, setProduct] = useState(null);
  const getProducts = async (productId) => {
    const API_URL = `https://tatacliq-clone-gzf3.onrender.com/product/${productId}`;

    try {
      const response = await axios.get(API_URL);

      setProduct(response.data.Product);
      setAllProducts((prevData) => [...prevData, response.data.Product]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts(singleData?.productId);
  }, []);

  const handleRemove = async (id) => {
    const { token } = JSON.parse(localStorage.getItem("user"));
    try {
      await axios.delete(
        `https://tatacliq-clone-gzf3.onrender.com/cart/remove/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Box key={product?._id} p={5}>
      <Divider mb={10} bg={"grey"} h={0.8} />
      <SimpleGrid
        gridTemplateColumns={[
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(2,1fr)",
        ]}
        gap={5}
      >
        <SimpleGrid
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
          ]}
        >
          <Box w={40}>
            {product?.images && (
              <Img src={product?.images[0]} alt={product?.title} />
            )}
          </Box>
          <Box>
            <Text color={"blue"} fontWeight={400}>
              {product?.title}
            </Text>
            <Text fontWeight={400} fontSize={"13px"} mb={3}>
              ID:{product?._id}
            </Text>
            <Text fontWeight={400} mb={5}>
              ₹{product?.price}
            </Text>
            <Text
              color={"blue"}
              _hover={{ textDecoration: "underline" }}
              fontWeight={400}
              cursor={"pointer"}
              onClick={() => handleRemove(product._id)}
            >
              Remove
            </Text>
          </Box>
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}

export default GetSinglePro;
