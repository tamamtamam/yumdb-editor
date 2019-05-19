import React, { PureComponent } from 'react';
// import { formatMessage, setLocale, getLocale } from 'umi-plugin-react/locale';
import i18n from '../../locales/i18n';
import { Menu, Icon } from 'antd';
import classNames from 'classnames';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

export default class SelectLang extends PureComponent {
  changeLang = ({ key }) => {
    // setLocale(key);
    i18n.changeLanguage(key)
  };

  render() {
    const { className } = this.props;
    const selectedLang = i18n.language
    const locales = ['en-US', 'fa-IR'];
    const languageLabels = {
      'en-US': 'English',
      'fa-IR': 'فارسی',
    };
    const languageIcons = {
      'en-US': '🇬🇧',
      'fa-IR': '🇮🇷',
    };
    const langMenu = (
      <Menu className={styles.menu} selectedKeys={[selectedLang]} onClick={this.changeLang}>
        {locales.map(locale => (
          <Menu.Item key={locale}>
            <span role="img" aria-label={languageLabels[locale]}>
              {languageIcons[locale]}
            </span>{' '}
            {languageLabels[locale]}
          </Menu.Item>
        ))}
      </Menu>
    );
    return (
      <HeaderDropdown overlay={langMenu} placement="bottomRight">
        <span className={classNames(styles.dropDown, className)}>
          <Icon type="global" 
            // title={formatMessage({ id: 'navBar.lang' })}
          />
        </span>
      </HeaderDropdown>
    );
  }
}
