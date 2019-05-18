import React from 'react';
import i18n from '../../locales/i18n';
import { Link, withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

const Bar = ({ t, history }) => {
    return ( 
    	<div>
    		<h1>Bar</h1>
    		<div onClick={() => history.goBack()}>Back</div>
    		<div>
    			<Link to='/foo'>foo</Link>
    		</div>
    	</div>
    );
};

export default withRouter(withTranslation()(Bar));
