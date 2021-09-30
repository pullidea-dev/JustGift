import { Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');

export default {
    ENV: {
        DEVICE: Platform.OS,
    },
    SIZE: {
        HEIGHT: height,
        WIDTH: width,
        W_92: width * 0.222,
        W_260: width * 0.628,
        W_60: width * 0.145,
        W_110: width * 0.266,
        W_355: width * 0.857,
        W_88: width * 0.213,
        W_363: width * 0.877,
        W_522: width * 1.261,
        W_433: width * 1.046,
        W_90: width * 0.217,
        W_55: width * 0.133,
        W_20: width * 0.049,
        W_380: width * 0.918,
        W_115: width * 0.278,
        W_374: width * 0.903,
        W_282: width * 0.681,
        W_170: width * 0.41,
        W_46: width * 0.112,
        W_273: width * 0.66,
        H_527: height * 0.588,
        H_360: height * 0.402,
        H_763: height * 0.852,
    },
    COLOR: {
        PRIMARY: 'rgba(236, 52, 68, 1)',
        SECONDARY: 'rgba(51, 233, 121, 1)',
        ICON_CONTACT: 'rgba(95, 132, 208, 1)',
        ICON_INACTIVE: 'rgba(188, 195, 206, 1)',
        ICON_ACTIVE: 'rgba(98, 98, 98, 1)',
        DOT_INACTIVE: 'rgba(211, 210, 214, 1)',
        WHITE_100: 'rgba(255, 255, 255, 1)',
        WHITE_90: 'rgba(255, 255, 255, 0.9)',
        WHITE_40: 'rgba(255, 255, 255, 0.4)',
        BTN_MORE: 'rgba(155, 155, 155, 1)',
        BACKGROUND: 'rgba(244, 245, 249, 1)',
        TITLE: 'rgba(252, 80, 104, 1)',
        BLACK_40: 'rgba(0, 0, 0, 0.4)',
        TXT_DESC: 'rgba(150, 150, 150, 1)',
        TXT_PRICE: 'rgba(36, 36, 36, 1)',
        TEXT_EM: 'rgba(100, 187, 181, 1)',
        FACEBOOK: 'rgba(75, 101, 175, 1)',
        GRAY74: 'rgba(74, 74, 74, 1)',
        BUTTON_BORDER: 'rgba(184, 190, 191, 1)',
        BTN_ACTIVE: 'rgba(32, 137, 253, 1)',
        BTN_INACTIVE: 'rgba(188, 188, 188, 1)',
        BORDER: 'rgba(112, 112, 112, 1)',
        START_BTN: 'rgba(76, 32, 255, 1)',
    },
    IMAGE: {
        SPLASH: require('../assets/splash.png'),
        GUIDE1: require('../assets/guide1.png'),
        GUIDE2: require('../assets/guide2.png'),
        GUIDE3: require('../assets/guide3.png'),
        LOCATION: require('../assets/location.png'),
        NOTIFY: require('../assets/notify.png'),
        DOWN: require('../assets/down.png'),
        UNKNOWN: require('../assets/unknown.png'),
        LEFT: require('../assets/left.png'),
        RIGHT: require('../assets/right.png'),
        RELOAD: require('../assets/reload.png'),
    },
    FONT: {
        AVENIR_HEAVY: require('../assets/fonts/Avenir_heavy.ttf'),
        AVENIR_BLACK: require('../assets/fonts/Avenir_black.ttf'),
        AVENIR_BOOK: require('../assets/fonts/Avenir_book.ttf'),
    },
    ANIMATION: {
        LOADING: require('../assets/loading.json'),
        SWIPE_LEFT: require('../assets/left.json'),
        SWIPE_RIGHT: require('../assets/right.json'),
        WAITING: require('../assets/waiting.json'),
        TEAR: require('../assets/tear.json'),
        OFFLINE: require('../assets/offline.json'),
        CART: require('../assets/cart.json'),
    }
}
