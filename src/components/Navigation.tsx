import React, { useContext } from "react";
//Context
import { ShopContext } from "../context/shopContext";

import { Link } from "react-router-dom";
import { MdMenu, MdShoppingBasket, MdWbSunny } from "react-icons/md";

import { IoLogoReact } from "react-icons/io5";

//Chakra
import { Badge, Flex, Icon, useColorMode } from "@chakra-ui/react";

const Navigation: React.FC = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

  const { colorMode, toggleColorMode } = useColorMode();

  console.log(colorMode);
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      p="2rem"
    >
      <Icon
        onClick={openMenu}
        cursor="pointer"
        w={30}
        h={30}
        as={MdMenu}
      ></Icon>

      <Link to="/" display="fixed" top="0">
        <Icon _hover={{ opacity: "80%" }} w={50} h={50} as={IoLogoReact}></Icon>
      </Link>
      <Flex flexDirection={["column", "row"]}>
        <Icon
          _hover={{ opacity: "80%" }}
          onClick={toggleColorMode}
          as={MdWbSunny}
          cursor="pointer"
          w={30}
          h={30}
          marginRight="20px"
        >
          {/* Toggle {colorMode === "light" ? "Dark" : "Light"} */}
        </Icon>
        <Icon
          onClick={openCart}
          cursor="pointer"
          w={30}
          h={30}
          as={MdShoppingBasket}
        ></Icon>
        <Badge backgroundColor="#ffffff" borderRadius="50%">
          {checkout.lineItems?.length}
        </Badge>
      </Flex>
    </Flex>
  );
};

export default Navigation;
