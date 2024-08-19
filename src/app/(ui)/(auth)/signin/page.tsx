"use client";

import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Gmail from "../../../../../public/icons/gmail.png";
import Image from "next/image";
import Link from "next/link";

const getServerSideProps = async () => {
  // try {
  //   const res = await fetch('http://localhost:3000/api/movies')
  //   const data = await res.json();
  //   console.log(data);
  //   return data;
  // } catch (error) {
  //   console.error(error)
  // }
};

const Page: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Card className="mx-auto max-w-[25rem] w-full rounded-md">
      <CardBody>
        <form
          action=""
          className="flex flex-col gap-4"
          >
          <h2>Sign in</h2>
          <div>
            <label htmlFor="email">Email:</label>
            <Input placeholder="example@mail.com" size="md" variant="outline" type="email"/>
          </div>
          <div>
            <label htmlFor="pss">Password:</label>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                variant="outline"
              />
              <InputRightElement onClick={handleClick} className="cursor-pointer">
                {show ? <EyeOffIcon /> : <EyeIcon />}
              </InputRightElement>
            </InputGroup>
          </div>
          <Button colorScheme="pink">
            Sign in
          </Button>
          <small>Do not have an account? <Link href="/signup" className="link">Sign up</Link></small>
          <div className="flex gap-x-2 p-2 items-center border border-primary-hover rounded-lg cursor-pointer">
            <Image src={Gmail} alt="gmail logo" width={30} height={30}/>
            <p>Continue with gmail</p>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default Page;
