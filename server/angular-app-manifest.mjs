
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/arcsandspaces2/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/arcsandspaces2"
  },
  {
    "renderMode": 2,
    "route": "/arcsandspaces2/gallery"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 560, hash: '249ff887b6a97dc13e464af3aa2830f669ef1d85c18b1911fcba2f0a372ae169', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1074, hash: '7cd7e3038bfb1e6901fe7b41b78546c821fc86761a927faea65998ca8333625e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 6207, hash: 'd9fe7bcd89c6811adf4def76337ad3567ab9f8851d29e002172e1d51a2c8f701', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'index.html': {size: 12795, hash: '6255a9f72361ec344afbf649665156a8e118aa08e8b4d74c594cc7fad32a869d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
