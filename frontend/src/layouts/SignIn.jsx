'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { loggedInAtom } from '../lib/atoms';

export default function SingIn() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate();

  const [loggedIn , setLoggedIn] = useRecoilState(loggedInAtom);

  const handleSubmit = async (e) => {
    e.preventDefault()
    axios.post("http://localhost:3000/sign-in", { email, password })
    .then(result => {
        console.log(result);
        if(result.data === "Success"){
          setLoggedIn(true)
            navigate("/codevita")

        }
        else if(result.data === "Incorrect Password"){
          alert("incorrect password")

        }
        else{
          setLoggedIn(false)
            navigate("/sign-up")
            alert("You are not registered to this service")

        }
   
    })
    .catch(err => console.log(err))
}



  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <form onSubmit={handleSubmit}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e) => setPassword(e.target.value)}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>
                  <Link to={"/sign-in/forgot-password"}>Forgot password?</Link>
                  </Text>
              </Stack>
              <Button
              type='submit'
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>

              <Stack pt={6}>
              <Text align={'center'}>
                New User? <Link style={{color:"#4da9e1",fontSize:"20px"}} to={"/sign-up"}>create account</Link>
              </Text>
            </Stack>
            </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}