import MainLayout from "@/layouts/MainLayout";
import styled from "styled-components";
import GoBackButton from "@/components/shared/GoBackButton";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import {useSelector} from "react-redux";
import {selectCartItems} from "@/features/cart/cartSlice";
import {H3} from "@/styles/textStyles";

const SectionWrapper = styled.section`
  background-color: #fafafa;
  padding: 16px 24px 96px;
`

const EmptyCart = styled(H3)`
  margin: 60px auto;
  text-align: center;
  color: #000;
`
export default function Checkout() {
    const cartItems = useSelector(selectCartItems)

    // const router = useRouter();
    //
    // const {data: session} = useSession();
    //
    // useEffect(() => {
    //     return () => {
    //         getSession().then((session) => {
    //             if (session) {
    //                 router.replace(`/login/${session.user.id}`)
    //             } else {
    //                 setIsLoading(false)
    //             }
    //         })
    //     };
    // }, [router]);

    return (
        <MainLayout>
            <SectionWrapper>
                <GoBackButton/>
                {cartItems.length > 0 ? <CheckoutForm/> : <EmptyCart>Cart is empty</EmptyCart>}
            </SectionWrapper>
        </MainLayout>
    )
}
