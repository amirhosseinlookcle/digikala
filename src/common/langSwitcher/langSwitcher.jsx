import { useContext } from "react";
import { Context } from "../../lang/Wrapper";

const LangSwitcher = () => {
    const context = useContext(Context);
   
  return (
    <div>
      <select className="px-3 outline-none py-2 rounded-md cursor-pointer bg-gray-200" value={context.locale} onChange={context.selectLang}>
        <option className=" outline-none text-center  bg-gray-200" value="en-US">English</option>
        <option className="  text-center bg-gray-200" value="fa">فارسی</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
