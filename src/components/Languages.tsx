import { useTranslation } from 'react-i18next';

const Languages = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <div>
            <p>{t('keyPurchaseTablesText')}</p>
            <button onClick={() => changeLanguage('fr')}>Switch to French</button>
            <button onClick={() => changeLanguage('en')}>Switch to English</button>
        </div>
    )
}

export default Languages
