import { useContext } from "react";
import { BasicContext } from "../context/BasicContext";
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { counter, setCounter } = useContext(BasicContext);
    const { t, i18n } = useTranslation();

    const increase = () => {
        setCounter(counter+1);
    };

    const changeToFrench = () => {
        i18n.changeLanguage('fr');
    };

    return (
        <div>
            <p>{t('keyPurchaseTablesText')}</p>
            Home
            {counter}
            <button onClick={increase}> + </button>
            <button onClick={changeToFrench}>Switch to French</button>
        </div>
    )
}

export default Home