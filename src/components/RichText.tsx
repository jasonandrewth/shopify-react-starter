import React from "react";

//Chakra
import { Heading, Box, Text, Center } from "@chakra-ui/react";

const RichText: React.FC<{ heading: string; text: string }> = ({
  heading,
  text,
}) => {
  return (
    <Box p="1rem">
      <Center display="flex" flexDir="column" textAlign="center">
        <Heading py="2rem">{heading && heading}</Heading>
        <Text pb="2rem">{text && text}</Text>
      </Center>
    </Box>
  );
};

export default RichText;
