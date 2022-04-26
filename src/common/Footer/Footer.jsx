import FooterDlApp from "./2.Footer_dlApp";
import FooterGaurantee from "./1.Footer_gaurantee";
import "./styles.css";
const Footer = () => {
  return (
    <div className="footer_container w-full mt-16 flex flex-col justify-center items-center">
      <div className="footer_holder mt-9 flex flex-col items-center">
        <FooterGaurantee />
    
        <hr className="w-11/12 my-5" />
        <FooterDlApp />
      </div>
      <div className="w-full h-16 bg-gray-200 mt-6"></div>
    </div>
  );
};

export default Footer;
