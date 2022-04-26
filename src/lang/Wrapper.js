import { useState, createContext, } from "react";
import { IntlProvider } from "react-intl";

import Persian from './pe-IR.json'
import English from './en-US.json'

export const Context = createContext()

const local = navigator.language;
let lang;

if (local === "en-US") {
    lang = English;


} else {
    lang = Persian;
}





const Wapper = ({ children }) => {
    const [locale, setLocale] = useState(local)
    const [messages, setMessages] = useState(lang)



    function selectLang(e) {
        const newLocale = e.target.value;
        setLocale(newLocale)
        if (newLocale === "en-US") {
            setMessages(English);

        } else {
            setMessages(Persian)

        }
    }

  

    
    return (
        <Context.Provider value={{ locale, selectLang }}>
            <IntlProvider messages={messages} locale={locale}>
                {children}
            </IntlProvider>
        </Context.Provider>

    );
}

export default Wapper;