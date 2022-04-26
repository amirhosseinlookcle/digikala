import Items from "./Items";
import SpecialOffer from "./SpecialOffer";
const BodyProducts1 = () => {
  return (
    <div
      style={{ height: "max-content" }}
      className="w-full flex flex-col items-center  mt-5 bg-red-500 lg:flex-col-reverse xl:flex xl:flex-row xl:justify-center xl:py-10"
    >
      <SpecialOffer />
      <Items/>
    </div>
  );
};

export default BodyProducts1;
