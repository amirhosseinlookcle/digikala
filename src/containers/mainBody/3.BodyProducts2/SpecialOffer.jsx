import { FormattedMessage } from "react-intl";

const SpecialOffer = () => {
  return (
    <div className="cursor-pointer h-full w-4/12 flex flex-col items-center mt-5 lg:flex-row xl:w-2/12 xl:flex-col">
      <img
        className=" w-8/12 hidden sm:hidden md:hidden lg:block"
        src="/assets/images/BodyProducts1List/specialoffer.png"
        alt=""
      />
      <button className="border-2 rounded-xl py-2 px-5 text-white lg:px-8 whitespace-nowrap">
      <FormattedMessage id="see.all"/>
      </button>
    </div>
  );
};

export default SpecialOffer;
