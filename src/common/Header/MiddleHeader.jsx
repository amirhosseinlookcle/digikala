import { FormattedMessage } from "react-intl";
import LangSwitcher from "../langSwitcher/langSwitcher";
import { Link } from "react-router-dom";
import { injectIntl } from "react-intl";
import { useSelector } from "react-redux";

const MiddleHeader = ({ intl }) => {
  const {amount} = useSelector(state => state.cart)
  return (
    <>
      <div className="w-full flex-col items-center flex sm:flex-col sm:content-start md:flex-col lg:flex-row ">
        <div className="w-full lg:w-7/12 flex flex-col  items-center  px-1 sm:flex-row md:flex-row mt-1">
          <Link to="/">
            <img src="/assets/logo/logo.png" alt="" />
          </Link>
          <div className="w-full rounded-md lg:w-9/12 bg-gray-200 flex flex-row  items-center  px-1 sm:flex-row md:flex-row">
            <button
              className={
                intl.locale === "en-US"
                  ? "fas fa-search ml-5 text-gray-700"
                  : "fas fa-search mr-5 text-gray-700"
              }
              type="submit"
            ></button>
            <input
              className="w-full h-full p-4 bg-gray-200 border-2 rounded-md outline-none placeholder-gray-700 text-gray-700 align-baseline"
              type="text"
              placeholder={
                intl.locale === "en-US" ? "Search..." : "جست و جو..."
              }
            />
          </div>
        </div>
        <div className="w-full lg:w-5/12 flex justify-around flex-row mt-4">
          <div className="flex flex-row justify-around w-1/2 items-center">
            <LangSwitcher />

            <div
              className={
                intl.locale === "en-US"
                  ? "flex flex-col justify-center ml-10  md:ml-0 lg:ml-7"
                  : "flex flex-col justify-center mr-10  md:ml-0 lg:mr-7"
              }
            >
              {" "}
              <img src="/assets/images/discount.svg" alt="" />
              <span
                style={{
                  fontSize: "8px",
                  color: "#000",
                  fontWeight: "bolder",
                  cursor: "pointer",
                }}
              >
                <FormattedMessage
                  id="discount.time.left"
                  defaultMessage="Only 15 days left"
                />
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-around ">
            <span className="cursor-pointer border-2 text-sm px-3 py-2 rounded-md ml-2 flex flex-row">
              <img
                className={
                  intl.locale === "en-US" ? "w-4 h-4 mr-3" : "w-4 h-4 ml-2"
                }
                src="/assets/icons/user.png"
                alt=""
              />{" "}
              <FormattedMessage id="login" />
            </span>
            <div
              className={
                intl.locale === "en-US"
                  ? "w-4 h-4 ml-4 relative"
                  : "w-4 h-4 mr-3 relative"
              }
            >
              <Link to="/shoppingCart">
                <div className="relative">
                <img
                  className={intl.locale === "en-US" ? "relative" : "relative "}
                  src="/assets/icons/shopping-cart.png"
                  alt="shopping cart"
                />
                <span className="absolute top-1 left-3">{amount}</span>
                </div>
              </Link>
              <span
                className={
                  intl.locale === "en-US"
                    ? "absolute left-3 top-2 text-sm"
                    : "absolute right-3 top-3 text-sm"
                }
              >
                {}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default injectIntl(MiddleHeader);
