import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../common/Footer/Footer";
import { getTotal } from "../../redux/actions/productAction";
import BodytopSlider from "./1.BodyTopSlider/2.BodytopSlider";
import BodyProducts1 from "./2.BodyProducts1/3.BodyProducts1";
import BodyProducts2 from "./3.BodyProducts2/3.BodyProducts2";

const Body = () => {
    const dispatch = useDispatch();
    const addedItems = useSelector(state => state.cart.addedItems)
    useEffect(() => {
            dispatch(getTotal())
    }, [addedItems])
    return ( 
        <div className="w-full bg-gray-200">
            <BodytopSlider/>
            <BodyProducts1/>
            <BodyProducts2/>
            <BodyProducts1/>
            <BodyProducts2/>
            <Footer/>
           
            
        </div>
     );
}
 
export default Body;