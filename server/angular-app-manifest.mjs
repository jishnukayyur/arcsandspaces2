
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
    'index.csr.html': {size: 560, hash: '9b3a52e48c44281cc58bfabc4890ef63576a7dc9354bbb9e307e7ea029190b0c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1074, hash: '6e17f456b2b13f3358b42635484fe7f0e6cb2cb96416825c206c95c163d99b95', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 6362, hash: '521775723b93100ce77ebc2f6ff0d2b3c921eda9541136d599d1b8b50bc3e559', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'index.html': {size: 13595, hash: 'e07f351e79070130f5f3cbc37e00741d7d4c6399cda68dadd5e39b06f9b0ae08', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
