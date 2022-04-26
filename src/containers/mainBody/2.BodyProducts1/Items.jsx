import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Items = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const renderedList = cartItems.map((product) => {
    const {
      id,
      itemImage,
      itemName,
      itemPrice,
      itemPriceDiscounted,
      discount,
    } = product;
    return (
      <Link to={`/product/${id}`}>
        <div
          key={id}
          className="cursor-pointer flex flex-col w-6/12 sm:w-11/12 sm:items-center lg:h-80 xl:h-96 items-center mt-5 bg-white rounded-3xl xl:rounded-xl justify-around content-around"
        >
          <img className="w-1/2" src={itemImage} alt="" />
          <p className="px-3 text-sm mb-2">{itemName}</p>
          <div className="flex flex-row justify-around w-4/6">
            <span className="line-through text-opacity-50 text-black">
              {itemPrice}
            </span>
            <span className="py-1 px-2 text-sm bg-red-500 text-white rounded-3xl">
              {discount}
            </span>
          </div>
          <span className="font-extrabold">{itemPriceDiscounted}</span>
          <button className="text-sm font-bold my-2">
            <FormattedMessage id="add.to.cart" />
          </button>
        </div>
      </Link>
    );
  });

  return (
    <div className=" w-12/12 flex flex-col my-3 items-center sm:grid sm:w-full sm:grid-cols-2 sm:justify-items-center lg:grid-cols-4 xl:w-8/12 xl:h-full">
      {" "}
      {renderedList}
    </div>
  );
};

export default Items;
