import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React from 'react'

const TimeAnalysis = () => {
  let size = 'xl';
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const [size, setSize] = React.useState('md')

  const handleSizeClick = () => {
    onOpen()
  }

  return (
    <>
    <Button
          onClick={() => handleSizeClick()}
          // m={4}
          style={{
            backgroundColor:"#2a8e6b"
          }}
        >Analyze Time</Button>
    <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Time Complexity</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p className='text-2xl font-bold animate-pulse'>This feature is in development phase , it will soon be completed .</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
          </>
  )
}

export default TimeAnalysis