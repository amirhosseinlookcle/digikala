import BottomHeader from "./BottomHeader";
import MiddleHeader from "./MiddleHeader";
import TopHeader from "./TopHeader";
const Header = () => {
  return (
    <header className="w-full sm:w-full md:w-full xl:w-full sticky bg-white top-0 z-100 z-50">
      <TopHeader />

      <MiddleHeader />

      <BottomHeader />
    </header>
  );
};

export default Header;
