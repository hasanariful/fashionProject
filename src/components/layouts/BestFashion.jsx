import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from "../Image"
import Fashion from "../../assets/fashion.png"
import Points2 from "../../assets/points2.png"
import Heading from "../Heading"



const BestFashion = () => {
  return (
    <section>
        <Container className="py-[50px]">
            <Flex className="justify-center bg-white">
                <div className="w-[50%] mr-[100px] ">
                    <div className="relative z-20">
                        <Image src={Fashion}/>

                    </div>
                    <div className="absolute translate-x-[290%] translate-y-[-400%]">
                         <Image src={Points2}/>
                    </div>
                </div>
                <div className="w-[50%] mt-[70px]">
                    <div className="w-[50%] ms-[30px]">
                        <Heading className="font-frank font-bold text-[64px] text-black w-[440px] mb-[50px]" text="Best Fashion Since 2010" as="h1"/>
                        <Heading className="font-pop font-semibold text-[24px] text-black w-[443px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra." as="p"/>
                    </div>
                </div>
            </Flex>

            <div className="translate-x-[38%] translate-y-[-25%]">
                <Flex className="justify-evenly bg-counterColor w-[800px] h-[280px] py-[50px] rounded-xl">
                    <div className="border-e-2 border-black">
                        <Heading className="font-pod font-bold text-[64px] text-black mr-[50px]" text="2010" as="h1"/>
                        <Heading className="font-pop font-medium text-[28px] text-black mr-[50px]" text="Founded" as="p"/>
                    </div>
                    <div className="border-e-2 border-black">
                        <Heading className="font-pod font-bold text-[64px] text-black mr-[50px]" text="5000+" as="h1"/>
                        <Heading className="font-pop font-medium text-[28px] text-black mr-[50px]" text="Product Sold" as="p"/>
                    </div>
                    <div className="">
                        <Heading className="font-pod font-bold text-[64px] text-black" text="4500+" as="h1"/>
                        <Heading className="font-pop font-medium text-[28px] text-black" text="Best Reviews" as="p"/>
                    </div>
    
                </Flex>
            </div>
           
        </Container>
    </section>

  )
}

export default BestFashion

