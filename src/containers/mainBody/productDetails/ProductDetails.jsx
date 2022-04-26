import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import Header from "../../../common/Header/Header";
import { addToCart, getTotal } from "../../../redux/actions/productAction";
import { useEffect } from "react";
const ProductsDetails = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const { productId } = useParams();
  const pageNumber = parseInt(productId);
  const dispatch = useDispatch();
  const addedItems = useSelector(state => state.cart.addedItems)
  useEffect(() => {
    dispatch(getTotal())
  }, [addedItems])
  
  const renderedDetail = cartItems.map((detail) => {
    const {
      id,
      itemImage,
      itemName,
      itemPrice,
      itemPriceDiscounted,
      discount,
    } = detail;
    if (id === pageNumber) {
      return (
        <div style={{height: "500px"}} className="w-10/12 sm:w-7/12 md:w-6/12 rounded-lg mt-10 border-2 flex flex-col justify-start items-center">
          <img className="h-1/2 w-full sm:w-8/12 mt-4 " src={itemImage} alt="" />
          <div className="flex flex-col  w-full justify-start items-center">
            <p className="px-3 text-sm mb-2">{itemName}</p>
            <div className="flex flex-row sm:w-4/12 justify-around w-4/6 mt-4">
              <span className="line-through text-opacity-50 text-black">
                {itemPrice}
              </span>
              <span className="py-1 px-2 text-sm bg-red-500 text-white rounded-3xl">
                {discount}
              </span>
            </div>
            <span className="font-extrabold my-4">{itemPriceDiscounted}</span>
            <button onClick={() => dispatch(addToCart(id, detail))} className="text-sm font-bold  rounded-md text-white border-2 px-5 py-3 bg-red-500">
            <FormattedMessage id="add.to.cart" />
          </button>
          </div>
        </div>
      );
    } 
  });

  return (
    <div>
      <Header />
      <div className=" w-12/12 flex flex-col my-3 items-center">{renderedDetail}</div>
    </div>
  );
};

export default ProductsDetails;
