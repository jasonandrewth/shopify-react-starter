import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
//Context
import { ShopContext } from "../context/shopContext";

//Chakra
import {
  Box,
  Grid,
  Text,
  Image,
  Button,
  Heading,
  Flex,
} from "@chakra-ui/react";

const ProductPage: React.FC = () => {
  const { handle } = useParams();
  const { fetchProductWithHandle, addItemToCheckout, product } = useContext(
    ShopContext
  );

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, []);

  if (!product.title) {
    return <div>Loading...</div>;
  }
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box p="2rem">
        <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}>
          <Flex justifyContent="center" alignItems="center">
            <Image src={product.images[0].src}></Image>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            px="2rem"
          >
            <Heading pb="2rem">{product.title}</Heading>
            <Text fontWeight="bold" pb="2rem">
              {product.variants[0].price}
            </Text>
            <Text pb="2rem" color="gray.500">
              {product.description}
            </Text>
            <Button
              _hover={{ opacity: "70%" }}
              w="10rem"
              backgroundColor="green.200"
              onClick={() => addItemToCheckout(product.variants[0].id, 1)}
            >
              Add To Cart
            </Button>
          </Flex>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default ProductPage;
