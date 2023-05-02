import {ChildrenProps} from "@/interfaces/interfaces";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";


const MainLayout = ({children}: ChildrenProps) => {
    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}

export default MainLayout