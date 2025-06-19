// @next
import { Archivo } from 'next/font/google';

/***************************
 * PATHS
 ***************************/
export const APP_DEFAULT_PATH = '/dashboard'; // Redirige tras login exitoso

/***************************
 * THEME CONSTANTS
 ***************************/
export const DRAWER_WIDTH = 254;
export const MINI_DRAWER_WIDTH = 77; // 76 + 1px border

/***************************
 * ENUMS
 ***************************/
export let Themes;
(function (Themes) {
  Themes['THEME_HOSTING'] = 'hosting';
})(Themes || (Themes = {}));

export let ThemeMode;
(function (ThemeMode) {
  ThemeMode['LIGHT'] = 'light';
})(ThemeMode || (ThemeMode = {}));

export let ThemeDirection;
(function (ThemeDirection) {
  ThemeDirection['LTR'] = 'ltr';
})(ThemeDirection || (ThemeDirection = {}));

export let ThemeI18n;
(function (ThemeI18n) {
  ThemeI18n['EN'] = 'en';
  ThemeI18n['FR'] = 'fr';
  ThemeI18n['RO'] = 'ro';
  ThemeI18n['ZH'] = 'zh';
})(ThemeI18n || (ThemeI18n = {}));

/***************************
 * CONFIG OBJECT
 ***************************/
const config = {
  currentTheme: Themes.THEME_HOSTING,
  mode: ThemeMode.LIGHT,
  themeDirection: ThemeDirection.LTR,
  miniDrawer: false,
  i18n: ThemeI18n.EN,
};

export default config;

/***************************
 * TYPOGRAPHY / FONTS
 ***************************/
const fontArchivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const FONT_ARCHIVO = fontArchivo.style.fontFamily;

/***************************
 * BRANDING: TRASHERBOX
 ***************************/
export const BRANDING = {
  appName: 'Trasherbox ERP',
  logo: {
    light: '/logo/logo-light.svg',
    dark: '/logo/logo-dark.svg',
    icon: '/logo/logo-icon.svg',
  },
  company: {
    name: 'Trasherbox Inc.',
    website: 'https://trasherbox.com',
    supportEmail: 'soporte@trasherbox.com',
  },
  themeColor: {
    primary: '#5B21B6', // violeta oscuro
    secondary: '#A855F7',
    accent: '#9333EA',
  },
};
