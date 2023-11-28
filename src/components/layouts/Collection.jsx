
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Image from '../Image'
import Collection1 from "../../assets/collection1.png"
import Collection2 from "../../assets/collection2.png"
import Collection3 from "../../assets/collection3.png"
import Button from '../Button'


const Collection = () => {
  return (
    
    <section>
        <Container>
            <div className="w-[1270px] mx-auto py-[100px]">
                <Heading className="font-frank font-bold text-[64px] text-black text-center mb-[50px]" text="New Collection" as="h1"/>

                <Flex className="justify-center">
                    <div className="w-[30%] relative">
                        <Image src={Collection1}/>
                        <Button design="px-[100px] py-[10px] rounded-xl border border-solid-buttonColor mr-[10px] font-pop font-regular text-[24px] text-black bg-white absolute top-[75%] left-[6%]" text="Sweater"/>
                    </div>
                    <div className="w-[30%] relative">
                        <Image src={Collection2}/>
                        <Button design="px-[100px] py-[10px] rounded-xl border border-solid-buttonColor mr-[10px] font-pop font-regular text-[24px] text-black bg-white absolute top-[75%] left-[10%]" text="Jeans"/>
                    </div>
                    <div className="w-[30%] relative">
                        <Image src={Collection3}/>
                        <Button design="px-[100px] py-[10px] rounded-xl border border-solid-buttonColor mr-[10px] font-pop font-regular text-[24px] text-black bg-white absolute top-[75%] left-[10%]" text="Baskets"/>
                    </div>
                </Flex>

            </div>
        </Container>
    </section>

  )
}

export default Collection

