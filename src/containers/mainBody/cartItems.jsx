import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { injectIntl } from "react-intl";
import { decrease, increase, remove } from "../../redux/actions/productAction";


const CartItems = ({intl}) => {
    const {addedItems, total} = useSelector(state => state.cart)
    const dispatch  = useDispatch();

    return (
        <div className="mt-10 w-10/12  mx-auto">
            <p className={'text-red-800 font-bold text-2xl ' + (intl.locale === "en-US" ? "text-left" : "text-right")}>
                <FormattedMessage id="shopping.cart" /> | <FormattedMessage id="next.purchase" />
            </p>
            <hr className="mt-3" />
            <div className="grid grid-cols-7">
                {addedItems.map(product => {
                    const { id, itemImage, itemName, itemPrice, itemPriceDiscounted, discount, amount } = product
                    return (
                        <div style={{height: "400px"}} className="border-2 col-start-1 flex-row-reverse col-end-6 d-50 mr-2 mt-5 rounded-md flex justify-around">
                            <div className="h-full flex justify-center items-center">
                                <img className="w-5/6 my-3 h-5/6 rounded-2xl" src={itemImage} alt="" />
                            </div>
                            <div className="h-full flex items-center mt-9 flex-col">
                                <div className="flex flex-col justify-between h-1/2">
                                <h4 className="font-bold">{itemName}</h4>
                                <span>{itemPrice}</span>
                                <span>{discount}</span>
                                <span>{itemPriceDiscounted}</span>
                                </div>
                                <div className="mt-10 w-full flex justify-around border-2 rounded-2xl content-center items-center py-3">
                                    <span className=" text-3xl text-red-600 text-center cursor-pointer" onClick={() => {
                                        if(amount === 1){
                                            dispatch(remove(id))
                                        }else{
                                            dispatch(decrease(id))
                                        }
                                    }}>-</span>
                                    <span className="text-red-700">{amount}</span>
                                    <span className="text-3xl text-red-600 text-center cursor-pointer" onClick={() => dispatch(increase(id))}>+</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="invisible md:visible col-start-6 col-end-8 row-start-1 row-end-2 ml-2  mt-5 h-96  flex flex-col justify-around  border-2 rounded-xl">
                    {/* <div className={"flex justify-around " + (intl.locale === "en-US" ? "flex-row " : "flex-row-reverse") }>
                     
                        <div className="">   <FormattedMessage id="items.price" /></div>
                        <div>140,000</div>
                    </div> */}
                    <div className={"flex justify-around " + (intl.locale === "en-US" ? "flex-row " : "flex-row-reverse")}>
                        <div><FormattedMessage id="total.cart.price" /></div>
                        <div>{total}</div>
                    </div>
                    <div className="flex flex-row justify-center">
                        <p className="px-12 text-justify text-sm"><FormattedMessage id="purchase.description" /></p>
                    </div>
                    <div className={"flex justify-around px-5 " + (intl.locale === "en-US"? "flex-row " : "flex-row-reverse")}>
                        <div className="text-sm w-1/2"><FormattedMessage id="your.benefit.of.purchase" /></div>
                        <div>200000</div>
                    </div>
                    <button className="bg-red-500 py-4 w-10/12 mx-auto rounded-xl"> <FormattedMessage id="Continue" /></button>
                    <div className="flex flex-row justify-around">
                        <div><FormattedMessage id="digiClub" /></div>
                        <div>76 <FormattedMessage id="points" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default injectIntl(CartItems) ;