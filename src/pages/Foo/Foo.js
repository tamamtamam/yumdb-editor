import React from 'react';
import i18n from '../../locales/i18n';
import { withTranslation } from 'react-i18next';

const Foo = ({ t }) => {
    return ( <h1>Foo</h1> );
};

export default withTranslation()(Foo);
