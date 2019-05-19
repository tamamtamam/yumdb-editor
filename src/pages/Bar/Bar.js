import React from 'react';
import i18n from '../../locales';
import { Link, withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

const Bar = ({ t, history }) => {
    return ( 
    	<div>
    		<h1>Bar - {t('app.footer.welcome')}</h1>
    		<div onClick={() => history.goBack()}>Back</div>
    		<div>
    			<Link to='/foo'>foo</Link>
    		</div>
    	</div>
    );
};

export default withRouter(withTranslation()(Bar));
