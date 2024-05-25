import type {
    LicenseConfig,
    CommentConfig,
    NavBarConfig,
    ProfileConfig,
    SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
    title: "园子里的日光",
    subtitle: "当世界年轻时",
    lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja'
    themeColor: {
        hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
        fixed: false, // Hide the theme color picker for visitors
    },
    banner: {
        enable: true,
        src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    },
    favicon: [
        // Leave this array empty to use the default favicon
        // {
        //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
        //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
        //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
        // }
    ],
};

export const navBarConfig: NavBarConfig = {
    links: [
        LinkPreset.Home,
        LinkPreset.Archive,
        LinkPreset.About,
        {
            name: "GitHub",
            url: "https://github.com/saicaca/fuwari", // Internal links should not include the base path, as it is automatically added
            external: true, // Show an external link icon and will open in a new tab
        },
    ],
};

export const profileConfig: ProfileConfig = {
    avatar: "assets/images/demo-avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    name: "Chlorine",
    bio: "全世界无产者，联合起来！",
    links: [
        {
            name: "Twitter",
            icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
            // You will need to install the corresponding icon set if it's not already included
            // `pnpm add @iconify-json/<icon-set-name>`
            url: "https://twitter.com",
        },
        {
            name: "Email",
            icon: "fa6-brands:steam",
            url: "mailto:yoghurtlee123@gmail.com",
        },
        {
            name: "Gitee",
            icon: "fa6-brands:steam",
            url: "https://gitee.com/yoghurtlee-thu",
        },
        {
            name: "GitHub",
            icon: "fa6-brands:github",
            url: "https://github.com/yoghurtlee-thu",
        },
    ],
};

export const licenseConfig: LicenseConfig = {
    enable: true,
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const commentConfig: CommentConfig = {
    // disqus: {
    //     shortname: "fuwari",
    // },
    // giscus: {
    //   repo: 'moeyua/fuwari',
    //   repoId: 'R_kgDOKy9HOQ',
    //   category: 'General',
    //   categoryId: 'DIC_kwDOKy9HOc4CegmW',
    //   mapping: 'title',
    //   strict: '0',
    //   reactionsEnabled: '1',
    //   emitMetadata: '1',
    //   inputPosition: 'top',
    //   theme: 'light',
    //   lang: 'zh-CN',
    //   loading: 'lazy',
    // },
    twikoo: {
      envId: 'https://twikoo.yoghurtlee.com',
    },
};