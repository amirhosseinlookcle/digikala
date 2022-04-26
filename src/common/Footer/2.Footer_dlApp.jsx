import { FormattedMessage } from "react-intl";

const FooterDlApp = () => {
  return (
    <>
      <div className="w-full bg-indigo-900 rounded-xl pb-2 ">
        <div className="w-full flex flex-col items-center lg:flex-row">
          <div className="w-full mt-4 flex flex-row justify-center lg:justify-start">
            <div className="w-1/2 sm:w-1/6 md:w-1/4 lg:w-1/2 xl:w-1/2 lg:mr-4 flex flex-row justify-around items-center">
              <img src="/assets/icons/digikaladlapp.png" alt="" />
              <p className="text-white font-extrabold xl:ml-10 whitespace-nowrap">
              <FormattedMessage id="dl.digikala"/>
              </p>
            </div>
          </div>
          <div className="w-full h-full mt-4 grid grid-cols-2 justify-items-center md:grid-cols-4 lg:ml-6">
            <img
              className="pb-3"
              src="/assets/images/digikaladl/playstoredl.png"
              alt=""
            />
            <img
              className="pb-3"
              src="/assets/images/digikaladl/bazardl.png"
              alt=""
            />
            <img
              className="pb-3"
              src="/assets/images/digikaladl/miketdl.png"
              alt=""
            />
            <img
              className="pb-3"
              src="/assets/images/digikaladl/sibappdl.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterDlApp;
