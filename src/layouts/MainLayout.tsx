import ChildrenProps from "@/interfaces/interfaces";
import Navbar from "@/components/navbar/Navbar";


const MainLayout = ({children}: ChildrenProps) => {
    return (
        <>
            <Navbar/>
            {children}
        </>
    )
}

export default MainLayout