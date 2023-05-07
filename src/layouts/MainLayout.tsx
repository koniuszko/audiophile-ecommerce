import {ChildrenProps} from "@/interfaces/interfaces";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import {BGWrapper} from "@/styles/global";


const MainLayout = ({children}: ChildrenProps) => {
    return (
        <>
            <BGWrapper color={'#191919'}>
                <Navbar/>
            </BGWrapper>
            {children}
            <BGWrapper color={'#191919'}>
                <Footer/>
            </BGWrapper>
        </>
    )
}

export default MainLayout