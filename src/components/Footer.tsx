import React from "react";
import { Link as InternalLink } from "react-router-dom";

//Chakra
import { Grid, Box, Text, VStack, Link } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box borderTop="1px solid black">
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
        fontWeight="bold"
      >
        <VStack p="2rem">
          <InternalLink to="/">Category A</InternalLink>
          <InternalLink to="/">Category B</InternalLink>
          <InternalLink to="/">Category C</InternalLink>
        </VStack>
        <VStack p="2rem">
          <InternalLink to="/">About Us</InternalLink>
          <InternalLink to="/">Learn More</InternalLink>
          <InternalLink to="/">Sustainability</InternalLink>
        </VStack>
      </Grid>

      <Box>
        <Text textAlign="center" w="100%" borderTop="1px solid black" p="1rem">
          React Shopify Starter{" "}
          <Link href="https://github.com/jasonandrewth" isExternal>
            @jasonandrewth
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
