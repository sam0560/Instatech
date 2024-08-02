"use client"

import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"

export default function QuoteModal({quote, author}:any) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = useRef(null)
    
    return (
      <>
        <Button onClick={onOpen} backgroundColor="transparent">
          read more
        </Button>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="rgb(181 22 91/1)">Quotes</ModalHeader>
            <ModalCloseButton />
            <ModalBody fontSize={18}>
              {quote}
              <br />
              <p className="text-sm">Author: <span className="text-pink-900"> {author}</span></p>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }