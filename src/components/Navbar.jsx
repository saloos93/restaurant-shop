import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import { styled } from "@mui/material/styles";
import CallIcon from "@mui/icons-material/Call";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <Container>
      <Item>
        <CallButtonContainer>
          <CallIcon width="32" height="32" color="#fff" />
        </CallButtonContainer>
        <Texts>
          <Text>ORDER NOW!</Text>
          <Text>012 345 678</Text>
        </Texts>
      </Item>
      <Item>
        <List>
          <ListItem>Homepage</ListItem>
          <ListItem>Products</ListItem>
          <ListItem>Menu</ListItem>
          <Image src="/img/logo.png" alt="" width="160px" height="69px" />
          <ListItem>Events</ListItem>
          <ListItem>Blog</ListItem>
          <ListItem>Contact</ListItem>
        </List>
      </Item>
      <Item>
        <Cart>
          <ShoppingCartOutlinedIcon fontSize="medium" />
          <Counter>2</Counter>
        </Cart>
      </Item>
    </Container>
  );
};

const Container = styled(Box)({
  height: "100px",
  padding: "0px 50px",
  backgroundColor: "#d1411e",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "sticky",
  top: "0",
  zIndex: "999",
});

const Item = styled(Box)`
  flex: 1;
  display: flex;
  align-items: center;
  &:nth-child(2) {
    flex: 3;
  }
  &:last-child {
    justify-content: flex-end;
  }
`;
const CallButtonContainer = styled(Box)`
  background-color: white;
  border-radius: 50%;
  padding: 10px;
  width: 50px;
  height: 50px;
`;
const Texts = styled(Box)`
  margin-left: 20px;
  color: white;
`;
const Text = styled(Box)`
  &:first-child {
    font-size: 12px;
    font-weight: 500;
  }

  &:last-child {
    font-size: 20px;
    font-weight: bold;
  }
`;
const List = styled(Box)`
  padding: 0;
  display: flex;
  align-items: center;
  list-style: none;
  color: white;
`;
const ListItem = styled(Box)`
  margin: 20px;
  font-weight: 500;
`;
const Cart = styled(Box)`
  position: relative;
  color: white;
`;
const Counter = styled(Box)`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #d1411e;
`;
export default Navbar;
