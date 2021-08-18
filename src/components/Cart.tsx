import React, { useContext } from "react";

//Context
import { ShopContext } from "../context/shopContext";

//Chakra
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Grid,
  Text,
  Flex,
  Image,
  Link,
  Icon,
} from "@chakra-ui/react";

import { MdClose } from "react-icons/md";

const Cart: React.FC = () => {
  const { isCartOpen, closeCart, checkout, removeLineItems } = useContext(
    ShopContext
  );
  return (
    <>
      <Drawer
        isOpen={isCartOpen}
        placement="right"
        onClose={closeCart}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Shopping Cart</DrawerHeader>

          <DrawerBody>
            {checkout.lineItems?.length ? (
              checkout.lineItems.map((item) => (
                <Grid templateColumns="repeat(4, 1fr)" gap={1} key={item.id}>
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    cursor="pointer"
                    onClick={() => {
                      removeLineItems([item.id]);
                    }}
                  >
                    <Icon fill="black" w={30} h={30} as={MdClose}></Icon>
                  </Flex>
                  <Flex>
                    <Image src={item.variant.image.src}></Image>
                  </Flex>
                  <Flex alignItems="center" justifyContent="center">
                    <Text>{item.title}</Text>
                  </Flex>
                  <Flex alignItems="center" justifyContent="center">
                    <Text>{item.variant.price}</Text>
                  </Flex>
                </Grid>
              ))
            ) : (
              <Box h="100%" w="100%">
                <Text
                  h="100%"
                  display="flex"
                  flexDir="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  No Items in your Cart
                </Text>
              </Box>
            )}
          </DrawerBody>

          {checkout.lineItems?.length && (
            <DrawerFooter>
              <Button
                w="100%"
                _hover={{ opacity: "70%" }}
                backgroundColor="green.200"
              >
                <Link href={checkout.webUrl} isExternal>
                  CHECKOUT
                </Link>
              </Button>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
