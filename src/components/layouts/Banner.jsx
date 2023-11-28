import Container from "../Container"
import Flex from "../Flex"
import Heading from "../Heading"
import Image from "../Image"
import Model1 from "../../assets/model1.png"
import Points1 from "../../assets/points1.png"
import Button from "../Button"

const Banner = () => {
  return (
    <section>
        <Container>
            <Flex className="justify-between py-[100px] bg-primaryColor">
                <div className="w-[50%] ms-[30px]">
                    <Heading className="font-pop font-semibold text-[64px] text-black w-[540px]" text="Find The Best Fashion Style For You" as="h1"/>
                    <Heading className="font-pop font-regular text-[22px] text-black w-[540px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra." as="p"/>

                    <Button design="px-[90px] py-[25px] mt-[50px] bg-black rounded-xl font-pop font-semibold text-[24px] text-white" text="SHOP NOW"/>
                </div>

                <div className="w-[50%] ">
                    <div className="relative z-10">
                        <Image src={Model1}/>
                    </div>                        
                    <div className="absolute translate-x-[-60%] translate-y-[-75%]">
                            <Image src={Points1}/>
                        </div>                    
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Banner