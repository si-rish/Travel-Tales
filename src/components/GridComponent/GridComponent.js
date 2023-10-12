import React from 'react'
import { Grid, GridItem, Center } from '@chakra-ui/react'
import "./GridComponent.css"

function GridComponent() {
    return (
        <div className='grid-container'>
            <Center>
                <Grid
                    h='450px'
                    w='80%'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(4, 1fr)'
                    gap={4}
                    gridGap={5}
                >
                    <GridItem className='grid-itm1' rowSpan={2} colSpan={2} >
                        <div
                            className='background-image'
                            style={{
                                backgroundImage: 'url("https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=600")', 
                            }}
                        />

                    </GridItem>
                    <GridItem className='grid-itm2 grid-itm1' colSpan={2} >
                    <div
                            className='background-image'
                            style={{
                                backgroundImage: 'url("https://images.pexels.com/photos/11974152/pexels-photo-11974152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', 
                            }}
                        />

                    </GridItem>
                    <GridItem className='grid-itm3 grid-itm1' colSpan={2}  >
                    <div
                            className='background-image'
                            style={{
                                backgroundImage: 'url("https://images.pexels.com/photos/4428291/pexels-photo-4428291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', 
                            }}
                        />

                    </GridItem>

                </Grid>
            </Center>
        </div>

    )
}

export default GridComponent