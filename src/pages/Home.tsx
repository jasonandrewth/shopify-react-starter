import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
//Context
import { ShopContext } from "../context/shopContext";

//Chakra
import { Box, Grid, Text, Image } from "@chakra-ui/react";

//Components
import RichText from "../components/RichText";

const Home: React.FC = (props) => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <Box m={"2rem"}>
      <RichText heading="SHOP TITLE" text="Lorem ipsum etc etc" />
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={"2rem"}
      >
        {products.map((product) => {
          return (
            <Link to={`/products/${product.handle}`} key={product.id}>
              <Box
                // backgroundColor="green.200"
                // border="1px solid black"
                p={4}
                color="white"
                textAlign="center"
                _hover={{ opacity: "80%" }}
                position="relative"
              >
                <Image
                  src={product.images[0].src}
                  alt={product.images[0].altText}
                />
                <Text
                  position="absolute"
                  bottom="15%"
                  w="100%"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  {product.title}
                </Text>
                <Text position="absolute" bottom="5%" w="100%">
                  {product.variants[0].price}
                </Text>
              </Box>
            </Link>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Home;
