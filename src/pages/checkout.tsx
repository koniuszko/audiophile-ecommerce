import MainLayout from "@/layouts/MainLayout";
import styled from "styled-components";
import GoBackButton from "@/components/shared/GoBackButton";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import {useSelector} from "react-redux";
import {selectCartItems} from "@/features/cart/cartSlice";
import {H3} from "@/styles/textStyles";
import {BGWrapper} from "@/styles/global";
import {selectAddress} from "@/features/address/addressSlice";

const SectionWrapper = styled.section`
  background-color: #fafafa;
  padding: 16px 24px 96px;

  @media (min-width: 768px) {
    padding: 32px 40px 96px;
    min-height: calc(100vh - 90px - 383px);
  }
  @media (min-width: 1440px) {
    padding: 80px 0 96px;
    margin: 0 auto;
    min-height: calc(100vh - 90px - 408px);
    width: 1100px;
  }
`

const EmptyCart = styled(H3)`
  margin: 60px auto;
  text-align: center;
  color: #000;
`

function Checkout() {
    const cartItems = useSelector(selectCartItems)

    return (
        <MainLayout>
            <BGWrapper color={'#fafafa'}>
                <SectionWrapper>
                    <GoBackButton/>
                    {cartItems.length > 0 ? <CheckoutForm/> : <EmptyCart>Cart is empty</EmptyCart>}
                </SectionWrapper>
            </BGWrapper>
        </MainLayout>
    )
}

export default Checkout