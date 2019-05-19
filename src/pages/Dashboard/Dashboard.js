import React from 'react';
import i18n from '../../locales/i18n';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

const Dashboard = ({ t }) => {
    return ( <h1>Dashboard</h1> );
};

export default withRouter(withTranslation()(Dashboard));
