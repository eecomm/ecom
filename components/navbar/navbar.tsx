'use client'
import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { AcmeLogo } from "./AcmeLogo.js";
import { VariantsSelectorWrapper } from "./VariantsSelectorWrapper.js";

export default function App() {
  const [variant, setVariant] = React.useState("static");

  const variants = ["static", "floating", "sticky"];
  
  return (
    <Layout>
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <AcmeLogo/>
          {/* <Text b color="inherit" hideIn="xs">
            Amijara
          </Text> */}
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">Home</Navbar.Link>
          <Navbar.Link isActive href="#">Products</Navbar.Link>
          <Navbar.Link href="#">Offers</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      <VariantsSelectorWrapper>
        
      </VariantsSelectorWrapper>      
    </Layout>
  )
}