'use client'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  AlertTitle,
  FormLabel,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'


export default function ForgotPassword() {
  const navigate = useNavigate();
  // const [email,setEmail] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  // const handelPasswordReset = async (data)=>{
  //   axios.post("http://localhost:3000/sign-in/forgot-password", data)
  //   .then(result => {
  //     if(result){
  //       console.log("the result is :"+result);
  //       navigate("/sign-in");
  //     }
  //     else{
  //       console.log("the result is :"+result);
  //       alert("couldn't find the user");
  //       return;
  //     }
  //   })
  //   .catch(err => console.log(err));
  // }


  const handelPasswordReset = async (data) => {
    try {
      const result = await axios.post("http://localhost:3000/sign-in/forgot-password", data);
  
      // If the request is successful (status 200)
      console.log("The result is:", data.password);
      navigate("/sign-in");
    } catch (error) {
      // If there's a 400 error or other error
      if (error.response && error.response.status === 400) {
        console.log("The result is:", error.response.data);
        alert("Couldn't find the user or another validation error occurred.");
      } else {
        console.error("An unexpected error occurred:", error);
        alert("Something went wrong. Please try again.");
      }
    }
  };
  
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Forgot your password?
        </Heading>
        <form onSubmit={handleSubmit(handelPasswordReset)}>
        <FormControl id="email" className='mb-3'>
        <FormLabel>Email address</FormLabel>
        <Input type="email" {...register("email", { required: "Password is required" })}/>
        </FormControl>
        <FormControl id="password" className='mb-6' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    {...register("password", { required: "Password is required" })}
                    />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() => setShowPassword((showPassword) => !showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {errors.password && <Text color="red.500" fontSize="sm">{errors.password.message}</Text>}
              </FormControl>
        <Stack spacing={6} style={{padding:"5px 10px",width:"100%",margin:"0px 5px",textAlign:"center",backgroundColor:"#4da9e1"}}>
            <Button type='submit'>Reset Password</Button>
        </Stack>
        </form>
      </Stack>
    </Flex>
  )
}