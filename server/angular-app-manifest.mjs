
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/arcsandspaces/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/arcsandspaces"
  },
  {
    "renderMode": 2,
    "route": "/arcsandspaces/gallery"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 559, hash: '20e4bde9f3474cbcb07a8ee39a76040953f92ed3c95c2a1fd5e1b88019f362c6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1073, hash: '464f996fc2ad58025ef3eaf12087e8add1a54a51a9f55b73881862ffa670e61e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 13592, hash: 'ca2c18ab8319403d44294ed93fc85ac657e17731ca1c8efee3f3a46350d86233', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 6359, hash: '381fa9b32d318c7687d2d1e6ef552655129f049e0034fa9e58c3b09b0510c9c7', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
