import { FormattedMessage } from "react-intl";

const FooterGaurantee = () => {
  // window scrolls to the top start
  const scrolltoTop = () => {
    window.scrollTo({
      top: 20,
      behavior: "smooth",
    });
  };
  // window scrolls to the top end

  return (
    <>
      <div className="w-full flex flex-col px-4 items-center md:flex-row-reverse md:justify-around lg:flex-row-reverse lg:justify-around">
        <div  onClick={scrolltoTop} className="flex flex-row border-2 px-6 rounded-xl mt-2">
          <button className="text-sm whitespace-nowrap">
            <FormattedMessage id="scroll.top"/>{" "}
          </button>
          <img className="w-10 h-10" src="/assets/icons/arrow-up.png" alt="" />
        </div>
        <div className="w-full  mt-4 flex flex-col items-center md:items-start">
          <img
            className="w-4/12 md:w-2/12 lg:w-1/8"
            src="/assets/logo/logoFarsi.png"
            alt=""
          />
          <p className="text-center mt-3 text-sm">
            <FormattedMessage id="contact.support"/>
          </p>
        </div>
      </div>
      <div className="w-full mt-5 grid grid-cols-5 items-center justify-items-center">
        <img src="/assets/images/footeropts/originality.png" alt="" />
        <img src="/assets/images/footeropts/item_gaurantee.png" alt="" />
        <img src="/assets/images/footeropts/247.png" alt="" />
        <img src="/assets/images/footeropts/cashpayment.png" alt="" />{" "}
        <img src="/assets/images/footeropts/expressdelivery.png" alt="" />
      </div>
    </>
  );
};

export default FooterGaurantee;
