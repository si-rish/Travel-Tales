import React from 'react'
import "./TabComponentCard.css"
import { Card, CardHeader, CardBody, CardFooter, Heading, Image, Stack, Text, Button } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'

export default function TabComponentCard({ src, alt ,heading, Offer, }) {
    return (
        <div className="tabcard-container">
            <Card className='tabcard-card'
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Image className='tabcard-image'
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={src}
                    alt={alt}
                />

                <Stack className=' tabcard-stack'>
                    <CardBody>
                        <Heading className='tabcard-heading' size='md'>{heading}</Heading>

                        <Text className='tabcard-caption' py='2'>
                         {Offer}
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Button className='tabcard-btn'
                         variant='solid' 
                         colorScheme='blue'>
                            Details
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </div>
    )
}