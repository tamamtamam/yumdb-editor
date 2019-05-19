/*
 * Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
import React from 'react';
import UIFooter from "../index";
import {Layout, Icon} from 'antd';
import i18n from '@locales';
import {withTranslation} from 'react-i18next';

const {Footer} = Layout;

const FooterView = ({t}) => {
    const links = [
        {
            key: 'link1',
            title: 'link1',
            href: 'http://yumcoder.com',
            blankTarget: true,
        },
        {
            key: 'github',
            title: <Icon type="github"/>,
            href: 'https://github.com/yumcoderCom',
            blankTarget: true,
        },
        {
            key: 'Ant Design',
            title: 'Ant Design',
            href: 'https://ant.design',
            blankTarget: true,
        },
    ];
    const copyright = (<>Copyright <Icon type="copyright"/> 2019 Yumcoder</>);
    return (
        <Footer>
            {t('app.footer.welcome')}
            <p onClick={() => i18n.changeLanguage('fa')}>fa</p>
            <p onClick={() => i18n.changeLanguage('en')}>en</p>
            <UIFooter links={links} copyright={copyright}/>
        </Footer>
    );
};

export default withTranslation()(FooterView);
