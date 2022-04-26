import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../common/Header/Header'
import CartItems from '../../containers/mainBody/cartItems';
import { getTotal } from '../../redux/actions/productAction';
const ShoppingCart = () => {
    const dispatch = useDispatch();
    const addedItems = useSelector(state => state.cart.addedItems)
    useEffect(() => {
        dispatch(getTotal())
    }, [addedItems])
    return ( 
        <div>
            <Header/>
          
            <CartItems/>
         
              
            

        </div>
     );
}


 
export default  ShoppingCart;