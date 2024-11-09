
'use client'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import { Link, useNavigate } from 'react-router-dom'
import { loggedInAtom } from '../lib/atoms'
import { useRecoilState } from 'recoil'

const UserProfileButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate  = useNavigate();
  const [loggedIn , setLoggedIn] = useRecoilState(loggedInAtom);
  return (
    <Menu>
    <MenuButton
      as={Button}
      rounded={'full'}
      variant={'link'}
      cursor={'pointer'}
      minW={0}
      mt={5}>
      <Avatar
        size={'md'}
        src={
          'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      />
    </MenuButton>
    <MenuList>
      <MenuItem><span onClick={()=>{setLoggedIn(false);
        navigate("/sign-in")
      }}>SignOut</span></MenuItem>
      {/* <MenuItem>Link 2</MenuItem> */}
      {/* <MenuDivider /> */}
      {/* <MenuItem>Link 3</MenuItem> */}
    </MenuList>
  </Menu>
  )
}

export default UserProfileButton