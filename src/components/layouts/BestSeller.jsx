import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Button from '../Button'
import Image from "../Image"
import Points3 from "../../assets/points3.png"
import Product1 from "../../assets/product1.png"
import Product2 from "../../assets/product2.png"
import Stars from "../../assets/stars.png"




const BestSeller = () => {
  return (
    <section>
        <Container>
                    <div className="absolute translate-x-[70%] translate-y-[-90%]">
                        <Image src={Points3}/>
                    </div>
            <Flex className="bg-sellerColor py-[50px] relative z-30">
                    
                <div className="w-[440px] ms-[50px]">
                    
                    <Heading className="font-frank font-bold text-[64px] text-white mb-[50px]" text="Best Seller Product" as="h1"/>
                    <Heading className="font-frank font-bold text-[24px] text-white w-[437px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus." as="p"/>

                    <Button design="px-[90px] py-[25px] mt-[50px] bg-black rounded-xl font-pop font-semibold text-[24px] text-white" text="Learn MORE"/>
                </div>

                <Flex className="justify-between ml-[30px]">
                    <div className="w-[366px]] h-[425px] mr-[20px]">
                        <Image src={Product1}/>

                        <div className="w-[366px] h-[130px] bg-white">
                            <div className="ml-[20px] py-[10px]">
                                <Image src={Stars} />
                            </div>
                             <Heading className="font-pop font-semibold text-[22px] text-black ml-[20px]" text="Sweater Shirt" as="p"/>
                                <Flex className="ml-[20px] py-[10px]">
                                    <div className="mr-[50px]">
                                        <Heading className="font-pop font-regular text-[22px] text-productPriceColor" text="$45.99" as="p"/>
                                    </div>
                                    <div className="">
                                        <Heading className="font-pop font-regular text-[22px] text-black" text="$35.99" as="p"/>
                                    </div>
                                </Flex>
                        </div>                       
                    </div>
                    <div className="w-[366px]] h-[425px]">
                        <Image src={Product2}/>

                        <div className="w-[366px] h-[130px] bg-white">
                            
                            <div className="ml-[20px] py-[10px]">
                                <Image src={Stars} />
                            </div>

                             <Heading className="font-pop font-semibold text-[22px] text-black ml-[20px]" text="Pants Fashion" as="p"/>
                                <Flex className="ml-[20px] py-[10px]">
                                    <div className="mr-[50px]">
                                        <Heading className="font-pop font-regular text-[22px] text-productPriceColor" text="$55" as="p"/>
                                    </div>
                                    <div className="">
                                        <Heading className="font-pop font-regular text-[22px] text-black" text="$44.99" as="p"/>
                                    </div>
                                </Flex>
                        </div> 
                    </div>
                </Flex>
            </Flex>
        </Container>
    </section>

  )
}

export default BestSeller