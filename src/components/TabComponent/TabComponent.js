import React from 'react'
import "./TabComponent.css"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TabComponentCard from '../TabComponentCard/TabComponentCard'

function TabComponent() {
    return (
        <div className='tab-container'>
            
            <Tabs variant='soft-rounded' colorScheme='green' >
                <TabList className='tab-list'>
                    <Tab className='tablist-menu'>Wildlife</Tab>
                    <Tab className='tablist-menu'>Hill Station</Tab>
                    <Tab className='tablist-menu'>Beach</Tab>
                    <Tab className='tablist-menu'>Honeymoon</Tab>
                    <Tab className='tablist-menu'>Adventure</Tab>
                    <Tab className='tablist-menu'>Trekking</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel >
                        <div className='tabpanal-container'>
                            <div>
                            <TabComponentCard 
                        src={"https://nagaon.assam.gov.in/sites/default/files/inline-images/gate.JPG"}
                        alt={'wildlife-photo'}
                        heading={'Kaziranga National Park'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://www.tripsavvy.com/thmb/dV7zQhV4qJ_mPL8AmzjenGByzk8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tres-bengala-tigres-en-frente-de-turista-de-520373860-735d4cd8c3b147d98cce1f158d0eefab.jpg"}
                        alt={'wildlife-photo'}
                        heading={'Ranthambore National Park'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHqy8r82GqLxvepVX9hLW5-d9XCjeAMWvZkShxvm27vB4vQJ9P"}
                        alt={'wildlife-photo'}
                        heading={'Periyar Wildlife Sanctuary'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHhZIzcF3aCkoQtI4OdbvOnXnFJA_w-5wQd7KkVf1TUKzaVu99"}
                        alt={'wildlife-photo'}
                        heading={'Bandhavgarh National Park'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://upload.wikimedia.org/wikipedia/commons/7/78/Bengal-Tiger_Corbett_Uttarakhand_Dec-2013.jpg"}
                        alt={'wildlife-photo'}
                        heading={'Jim Corbett National Park'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                      
                    
                        
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='tabpanal-container'>
                            <div>
                            <TabComponentCard 
                        src={"https://www.tourmyindia.com/imagess/kumaon-hills.webp"}
                        alt={'wildlife-photo'}
                        heading={'Best of Kumaon Hills'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://www.tourmyindia.com/imagess/kashmir-hills.webp"}
                        alt={'wildlife-photo'}
                        heading={'Best of Kashmir'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://images.pexels.com/photos/10895315/pexels-photo-10895315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        alt={'wildlife-photo'}
                        heading={'Bharatpur Bird Sanctuary'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://images.pexels.com/photos/10895315/pexels-photo-10895315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        alt={'wildlife-photo'}
                        heading={'Bharatpur Bird Sanctuary'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://images.pexels.com/photos/10895315/pexels-photo-10895315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        alt={'wildlife-photo'}
                        heading={'Bharatpur Bird Sanctuary'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                      
                    
                        
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='tabpanal-container'>
                            <div>
                            <TabComponentCard 
                        src={"https://images.pexels.com/photos/10895315/pexels-photo-10895315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        alt={'wildlife-photo'}
                        heading={'Bharatpur Bird Sanctuary'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://images.pexels.com/photos/10895315/pexels-photo-10895315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        alt={'wildlife-photo'}
                        heading={'Bharatpur Bird Sanctuary'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://images.pexels.com/photos/10895315/pexels-photo-10895315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        alt={'wildlife-photo'}
                        heading={'Bharatpur Bird Sanctuary'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://images.pexels.com/photos/10895315/pexels-photo-10895315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        alt={'wildlife-photo'}
                        heading={'Bharatpur Bird Sanctuary'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://images.pexels.com/photos/10895315/pexels-photo-10895315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        alt={'wildlife-photo'}
                        heading={'Bharatpur Bird Sanctuary'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                      
                    
                        
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='tabpanal-container'>
                            <div>
                            <TabComponentCard 
                        src={"https://images.pexels.com/photos/10895315/pexels-photo-10895315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        alt={'wildlife-photo'}
                        heading={'Bharatpur Bird Sanctuary'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://images.pexels.com/photos/10895315/pexels-photo-10895315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        alt={'wildlife-photo'}
                        heading={'Bharatpur Bird Sanctuary'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://images.pexels.com/photos/10895315/pexels-photo-10895315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        alt={'wildlife-photo'}
                        heading={'Bharatpur Bird Sanctuary'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://images.pexels.com/photos/10895315/pexels-photo-10895315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        alt={'wildlife-photo'}
                        heading={'Bharatpur Bird Sanctuary'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://images.pexels.com/photos/10895315/pexels-photo-10895315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        alt={'wildlife-photo'}
                        heading={'Bharatpur Bird Sanctuary'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                      
                    
                        
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='tabpanal-container'>
                            <div>
                            <TabComponentCard 
                        src={"https://images.pexels.com/photos/10895315/pexels-photo-10895315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        alt={'wildlife-photo'}
                        heading={'Bharatpur Bird Sanctuary'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://images.pexels.com/photos/10895315/pexels-photo-10895315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        alt={'wildlife-photo'}
                        heading={'Bharatpur Bird Sanctuary'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://images.pexels.com/photos/10895315/pexels-photo-10895315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        alt={'wildlife-photo'}
                        heading={'Bharatpur Bird Sanctuary'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://images.pexels.com/photos/10895315/pexels-photo-10895315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        alt={'wildlife-photo'}
                        heading={'Bharatpur Bird Sanctuary'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://images.pexels.com/photos/10895315/pexels-photo-10895315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        alt={'wildlife-photo'}
                        heading={'Bharatpur Bird Sanctuary'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                      
                    
                        
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='tabpanal-container'>
                            <div>
                            <TabComponentCard 
                        src={"https://images.pexels.com/photos/10895315/pexels-photo-10895315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        alt={'wildlife-photo'}
                        heading={'Bharatpur Bird Sanctuary'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://images.pexels.com/photos/10895315/pexels-photo-10895315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        alt={'wildlife-photo'}
                        heading={'Bharatpur Bird Sanctuary'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://images.pexels.com/photos/10895315/pexels-photo-10895315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        alt={'wildlife-photo'}
                        heading={'Bharatpur Bird Sanctuary'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://images.pexels.com/photos/10895315/pexels-photo-10895315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        alt={'wildlife-photo'}
                        heading={'Bharatpur Bird Sanctuary'}
                        Offer={'13 Nights - 14 Days'}
                        
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://images.pexels.com/photos/10895315/pexels-photo-10895315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        alt={'wildlife-photo'}
                        heading={'Bharatpur Bird Sanctuary'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                      
                    
                        
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>

        </div>
    )
}

export default TabComponent