import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { injectIntl } from "react-intl";
const BottomHeader = ({ intl }) => {
  return (
    <nav className="w-full block max-h-full">
      <div className=" w-full px-8 py-0 mx-auto my-1 h-12 flex flex-row relative">
        <ul className="nav_menu_list_container  h-auto w-full top-full  flex-col relative md:w-10/12 xl:w-10/12 xl:top-0  lg:w-10/12 lg:top-0 lg:flex xl:flex lg:flex-row xl:flex-row  justify-around items-center">
          <li>
            <img
              className=" cursor-default hidden sm:hidden md:block xl:block"
              src="/assets/icons/hamburger.png"
              alt=""
            />
            <span className="cursor-default">
              <FormattedMessage id="products.categorization" />
            </span>
          </li>
          <li className="header_main_menu_item header_main_menu_item_2 ">
            <img src="/assets/icons/supermarket.png" alt="" />
            <Link to="#">
              <FormattedMessage id="supermarket" />
            </Link>
          </li>
          <li className="header_main_menu_item header_main_menu_item_2 ">
            <img src="/assets/icons/discounts.png" alt="" />
            <Link to="#">
              <FormattedMessage id="discounts.offers" />
            </Link>
          </li>
          <li className="header_main_menu_item header_main_menu_item_2 ">
            <img src="/assets/icons/mydigikala.png" alt="" />
            <Link to="#">
              <FormattedMessage id="myDigikala" />
            </Link>
          </li>
          <li className="header_main_menu_item header_main_menu_item_2 ">
            <img src="/assets/icons/digiplus.png" alt="" />
            <Link to="#">
              <FormattedMessage id="digiPlus" />
            </Link>
          </li>
          <li className="header_main_menu_item header_main_menu_item_2 ">
            <img src="/assets/icons/digiclub.png" alt="" />
            <Link to="#">
              <FormattedMessage id="digiClub" />
            </Link>
          </li>
          <li className="header_main_menu_item header_main_menu_item_2 ">
            <img src="/assets/icons/digip.png" alt="" />
            <Link to="#">
              <FormattedMessage id="digiPay" />
            </Link>
          </li>
          <li className="header_main_menu_item header_main_menu_item_2 ">
            <Link to="#">
              <FormattedMessage id="faq" />
            </Link>
          </li>
          <li className="header_main_menu_item header_main_menu_item_2 ">
            <Link to="#">
              <FormattedMessage id="sell.products" />
            </Link>
          </li>
        </ul>
        <div className="">
          <img
            className="absolute md:block xl:hidden lg:hidden right-2 top-1/3 w-6"
            src="/assets/icons/hamburger.png"
            alt=""
          />
        </div>
        <div
          className={
            intl.locale === "en-US"
              ? "flex flex-row sm:justify-start lg:justify-end xl:justify-end w-full xl:w-2/12 lg:w-2/12  items-center xl:text-left"
              : "flex flex-row justify-end sm:justify-end lg:justify-end xl:justify-end w-full xl:w-2/12 lg:w-2/12  items-center xl:text-left"
          }
        >
          <div className="flex flex-row md:justify-end xl:justify-end items-center text-xs text font-medium text-gray-600 cursor-pointer  ">
            <FormattedMessage id="select.your.city" />{" "}
            <img
              className="w-4 h-4"
              src="/assets/icons/placeholder.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default injectIntl(BottomHeader);
