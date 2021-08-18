import React, { useContext } from "react";
import { Link as InternalLink } from "react-router-dom";
//Context
import { ShopContext } from "../context/shopContext";

//Chakra
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Text,
  Link,
} from "@chakra-ui/react";

const NavMenu: React.FC = () => {
  const { isMenuOpen, closeMenu } = useContext(ShopContext);
  return (
    <Drawer isOpen={isMenuOpen} placement="left" onClose={closeMenu} size="sm">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>MENU</DrawerHeader>

        <DrawerBody>
          <VStack p="2rem">
            <InternalLink to="/">About Us</InternalLink>
            <InternalLink to="/">Learn More</InternalLink>
            <InternalLink to="/">Sustainability</InternalLink>
          </VStack>
        </DrawerBody>

        <DrawerFooter textAlign="center">
          <Text w="100%">
            React Shopify Starter{" "}
            <Link href="https://github.com/jasonandrewth" isExternal>
              @jasonandrewth
            </Link>
          </Text>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default NavMenu;
