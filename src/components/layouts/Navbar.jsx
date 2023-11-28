
import Container from "../Container"
import Flex from "../Flex"
import List from "../List"
import Image from "../Image"
import Logo from "../../assets/logo.png"
import Button from "../Button"

const Navbar = () => {
  return (
    
    <nav className="bg-primaryColor">
      <Container>
        <Flex>
          <div className="w-[20%] py-[40px]">
            <Image src={Logo}/>
          </div>
          
          <div className="w-[55%] my-auto font-pop font-semibold text-[24px] text-black  py-[40px]">
            <ul>
              <Flex className="justify-evenly">
                <List href="#" text="Men"/>
                <List href="#" text="Woman"/>
                <List href="#" text="Kids"/>
                <List href="#" text="Collection"/>
                <List href="#" text="Trends"/>
              </Flex>
            </ul>
          </div>

          <div className="w-[25%] py-[40px] text-right">
            <Flex className="justify-center">
              <Button design="px-[20px] py-[10px] rounded-xl border border-solid-buttonColor mr-[10px] font-pop font-semibold text-[24px] text-black hover:bg-buttonColor" text="Login"/>
              <Button design="px-[20px] py-[10px] rounded-xl border border-solid-buttonColor font-pop font-semibold text-[24px] text-black hover:bg-buttonColor" text="Sign Up"/>
            </Flex>
          </div>

        </Flex>
      </Container>
    </nav>

  )
}

export default Navbar