import React from 'react';
import i18n from '../../locales';
import { withTranslation } from 'react-i18next';

const Foo = ({ t }) => {
    return ( <h1>Foo - {t('app.footer.welcome')}</h1> );
};

export default withTranslation()(Foo);
