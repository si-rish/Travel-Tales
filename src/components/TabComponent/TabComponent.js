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
                        src={"https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTDSwjwiW92K2MBeK8rQL0MTtVcZ6xT-cH24xfaj3Aj_UDnPhmIrOY6ncRkzthXyJTU"}
                        alt={'wildlife-photo'}
                        heading={'Best of Ooty Hills'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcT0-gv37oK3eKDUcG6jBe3KJ2iDvT9HNqLTLW2h7Ta11i0JaLuUyiD_MCtxWWIXGhee"}
                        alt={'wildlife-photo'}
                        heading={'Best of Manali'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRkcJGAqpUBSA0uMVq_dmgWH4rXH2dtfHBFVw7WgqQo1D7J5SGrluYwB13HRoRz351F"}
                        alt={'wildlife-photo'}
                        heading={'Best of Darjeeling'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTtxn7czAAVbZ81f4QyGpEoyEtu0P2DhPfQz3CR2jECBwEUAoRdh3l5II9Wj5-RKe7V"}
                        alt={'wildlife-photo'}
                        heading={'Best of Kodaikanal '}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRandQKDZTj0woj6QGpN071iE11yIxEDoNP6DV6ohcNxnYiBf-wl5Kmokk28ix_1lOs"}
                        alt={'wildlife-photo'}
                        heading={'Best of Gangtok'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                      
                    
                        
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='tabpanal-container'>
                            <div>
                            <TabComponentCard 
                        src={"https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQAV7Me9YRI7zswVLNdPU0Ugk4eCf8hKM9lFo0qmi8Q6xc7fuDmpgFoVEKOiOz43zNK"}
                        alt={'wildlife-photo'}
                        heading={'Marine Beach'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQfKHGTbgOvMYV-AcqezfEtrDGMr89PsYYeiRsedZikDN4x9m7lsMlSHqVZtLzBeJwe"}
                        alt={'wildlife-photo'}
                        heading={'Palolem Beach'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRcUGJ0SYayR-o7K7wg8BLFeLZF2TxRJYqRpm4mAjK8tAVmXEcOP6p4yd5Mt0FkVQLE"}
                        alt={'wildlife-photo'}
                        heading={'Varkala Beach'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/03/23115211/8-12.jpg"}
                        alt={'wildlife-photo'}
                        heading={'Marari beach'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Alleppey_beach.jpg/1200px-Alleppey_beach.jpg"}
                        alt={'wildlife-photo'}
                        heading={'Alappuzha Beach'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                      
                    
                        
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='tabpanal-container'>
                            <div>
                            <TabComponentCard 
                        src={"https://cdn.britannica.com/32/1632-050-940FB0E6/Beach-resort-Bangaram-Island-India-Lakshadweep.jpg"}
                        alt={'wildlife-photo'}
                        heading={'Lakshadweep'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ6aXO76Ow6I55t6nahzk9n8MNys3sjj_EXNqQ4uUL4W0hEZUXspvXbShy43O48yLsc"}
                        alt={'wildlife-photo'}
                        heading={'Munnar '}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQmmzV8V3AowCz3h3LpgBj9KjE_R7M5u-rihidzTKM1sAn77zsP8Aa69ok83LlReFVD"}
                        alt={'wildlife-photo'}
                        heading={'Srinagar'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://cdn.britannica.com/31/1631-050-23506727/vegetation-waterways-state-Kerala-India.jpg"}
                        alt={'wildlife-photo'}
                        heading={'Kerela'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTtxn7czAAVbZ81f4QyGpEoyEtu0P2DhPfQz3CR2jECBwEUAoRdh3l5II9Wj5-RKe7V"}
                        alt={'wildlife-photo'}
                        heading={'Kodaikanal '}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                      
                    
                        
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='tabpanal-container'>
                            <div>
                            <TabComponentCard 
                        src={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRkHz1Y5GxSxiSH5aizOYdyHwgv3c0ON8xTgzNHXnTk5a3_nDfR"}
                        alt={'wildlife-photo'}
                        heading={'Rishikesh'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://cdn.britannica.com/82/150182-050-800BBE18/Gurudongmar-Lake-Himalayas-India-Sikkim.jpg"}
                        alt={'wildlife-photo'}
                        heading={'Sikkim '}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQaV6HZgCcuV2cM0vDO0PPi318Tgtz93fOEAA7HGrNZMuXBVFcxQp_wjAccThkhQpXg"}
                        alt={'wildlife-photo'}
                        heading={'Bir '}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQIvl920NORkMVG6H2hVFSYq0tNrNtsZLUsXxPgszCUPKEINrXM7KFbiqX2HDh8B1cb"}
                        alt={'wildlife-photo'}
                        heading={'Andaman Islands'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Kardhang_Biling_Bhaga_Dhauladhar_Oct22_A7C_04645.jpg/800px-Kardhang_Biling_Bhaga_Dhauladhar_Oct22_A7C_04645.jpg"}
                        alt={'wildlife-photo'}
                        heading={'Lahaul and Spiti'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                      
                    
                        
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='tabpanal-container'>
                            <div>
                            <TabComponentCard 
                        src={"https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQfH8FRxVMGsvM0CmdrmJmGMiO2ewDy3RunoJHlVjgPb_19DGz4PxWqIWPqODMR-ojA"}
                        alt={'wildlife-photo'}
                        heading={'Kedarkantha'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://upload.wikimedia.org/wikipedia/commons/0/08/Markha_Valley1.JPG"}
                        alt={'wildlife-photo'}
                        heading={' Markha River'}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQp-FD5FNEmaQm4ruMr1jQp0_cVqqO-7oYPbFU3Q4MEyEXnFeMeeP2XoSEC1ZMVxFRo"}
                        alt={'wildlife-photo'}
                        heading={'Sandakpur '}
                        Offer={'13 Nights - 14 Days'}
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://upload.wikimedia.org/wikipedia/commons/5/55/Stok_Kangri_.jpg"}
                        alt={'wildlife-photo'}
                        heading={'Stok Kangri '}
                        Offer={'13 Nights - 14 Days'}
                        
                        />
                            </div>
                            <div>
                            <TabComponentCard 
                        src={"https://upload.wikimedia.org/wikipedia/commons/c/c9/Pindari_glacier%2C_Uttarakhand%2C_India.jpg"}
                        alt={'wildlife-photo'}
                        heading={'Pindari Glacier'}
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