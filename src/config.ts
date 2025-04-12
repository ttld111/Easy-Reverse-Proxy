import type {Proxy} from './util/model';

export let PORT = 377; // 端口

export let PROXY_CODE_SECRET = 'titiliandu'; // 代理码密钥
// 代理
export let PROXIES: Proxy[] = [
    {
        domain: "rts.ruby-jellyfin.top",
        url: "https://www.reuters.com/",
        enable: true
    }
];
