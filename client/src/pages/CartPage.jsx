import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  HStack,
  Divider,
  Icon,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../redux/Cart/actions";
import GetSinglePro from "../components/GetSinglePro";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartData);
  const { loading } = useSelector((state) => state.loading);
  const [allProducts, setAllProducts] = useState([]);
  const { isOpen: showCoupons, onToggle: toggleCoupons } = useDisclosure();

  useEffect(() => {
    dispatch(getCartItems);
  }, [dispatch]);

  const subtotal = allProducts.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0;
    return acc + price;
  }, 0);

  const estimatedTax = subtotal * 0.08;
  const estimatedTotal = subtotal + estimatedTax;

  return (
    <Box maxWidth="container.xl" margin="auto" p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        My Bag
      </Text>

      <Flex bg="blue.50" p={4} borderRadius="md" mb={4} alignItems="center">
        <Text color="blue.700">
          Some items in your order are eligible for FREE Shipping! Check cart
          summary for the final amount.
        </Text>
      </Flex>

      <Flex flexDirection={{ base: "column", md: "row" }} gap={8}>
        <VStack flex={2} alignItems="stretch" spacing={4}>
          {loading ? (
            <Flex justifyContent="center" alignItems="center" minH="50vh">
              <Spinner size="xl" />
            </Flex>
          ) : cartData && cartData.length > 0 ? (
            cartData.map((elem, i) => (
              <GetSinglePro
                key={i}
                singleData={elem}
                setAllProducts={setAllProducts}
                allProducts={allProducts}
              />
            ))
          ) : (
            <Box mt={5}>
              <Divider mb={10} />
              <Text fontSize="18px" fontWeight={400} mb={3}>
                Your shopping cart is empty. Please add at least one item to
                your cart before checking out.
              </Text>
              <Button mb={4} colorScheme="black" variant="solid">
                Continue Shopping
              </Button>
              <Divider mt={10} />
            </Box>
          )}
        </VStack>

        <Box flex={1}>
          <Box borderWidth={1} borderRadius="md" p={4}>
            <Flex justifyContent="space-between" alignItems="center" mb={4}>
              <Text fontWeight="semibold">Deliver To</Text>
              <Button variant="link" color="pink.500">
                Change
              </Button>
            </Flex>
            <Text mb={4}>110001, Delhi</Text>

            <Button
              width="full"
              justifyContent="space-between"
              alignItems="center"
              onClick={toggleCoupons}
              variant="outline"
              mb={4}
            >
              <HStack>
                <Text>Check for Coupons</Text>
              </HStack>
              <Icon as={showCoupons ? ChevronDownIcon : ChevronRightIcon} />
            </Button>

            <VStack spacing={2} align="stretch">
              <Flex justifyContent="space-between">
                <Text>Bag Total</Text>
                <Text>₹{subtotal.toFixed(2)}</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>Processing Fee</Text>
                <HStack>
                  <Text as="s" color="gray.500">
                    ₹149.50
                  </Text>
                  <Text>₹29.00</Text>
                </HStack>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>Tax</Text>
                <HStack>
                  <Text>0.08%</Text>
                </HStack>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text>See how this is calculated</Text>
                <Icon as={ChevronDownIcon} />
              </Flex>
              <Divider />
              <Flex justifyContent="space-between" fontWeight="semibold">
                <Text>Bag Subtotal</Text>
                <Text>₹{(subtotal + 29).toFixed(2)}</Text>
              </Flex>

              <Text color="green.600">You will save ₹150.00 on this order</Text>
              <Divider />
              <Flex justifyContent="space-between" fontWeight="bold">
                <Text>Total</Text>
                <Text>₹ {estimatedTotal.toFixed(2)}</Text>
              </Flex>
              <Button colorScheme="gray" width="full">
                Checkout
              </Button>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default CartPage;
