if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,i)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(s[b])return;let c={};const r=e=>a(e,b),t={module:{uri:b},exports:c,require:r};s[b]=Promise.all(d.map((e=>t[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-0717e078"],(function(e){"use strict";e.setCacheNameDetails({prefix:"魔法崩坏"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.da44b377.js",revision:"3f0576a08cfe8995fedbcb023b189419"},{url:"assets/404.html.5f52d4ad.js",revision:"bcc9a511a2e81a3d3b60ba1ee3a4b179"},{url:"assets/404.html.87086e4b.js",revision:"95db1b6e47868ae28eaa3510e3947cf5"},{url:"assets/app.4e56fc3a.js",revision:"8bc9d00437cc2fbf6abe5042f9ae2c6d"},{url:"assets/article1.html.6db98b83.js",revision:"dfd900b1032a7cac599f1256e6447cae"},{url:"assets/article1.html.ae6acd4b.js",revision:"71c62bbc0f79ecf5c0376f2c8ec6d81b"},{url:"assets/article10.html.73383b7d.js",revision:"4c6961534d23ff1c0447250b5e07c724"},{url:"assets/article10.html.e573f2ef.js",revision:"d41fb509689e22946fbaab579e184cb7"},{url:"assets/article11.html.7a1f43ca.js",revision:"4400501d4c42c478f0fc360b7330b2b8"},{url:"assets/article11.html.84072c93.js",revision:"26281886608a876b048cbd635ee3e5dc"},{url:"assets/article12.html.80f03d04.js",revision:"eabdb5102444472862aa893c2debfb5f"},{url:"assets/article12.html.f977320a.js",revision:"e72774c1ec29dea1b1038834f5d46601"},{url:"assets/article2.html.e0a18b22.js",revision:"fd5b7e2897ae530e73e75cbf9061dea7"},{url:"assets/article2.html.e1688068.js",revision:"e44412e5befe57bf7c801cd68febd657"},{url:"assets/article3.html.82aefaeb.js",revision:"d33852ba3b959955fd5db14fa669e9d7"},{url:"assets/article3.html.d3755603.js",revision:"38e0588cd7deb4d47ba016e13a4758b8"},{url:"assets/article4.html.373b0d9c.js",revision:"064857ab054573952acf00eee8e7b74b"},{url:"assets/article4.html.d1bd1d8f.js",revision:"9fb1255ce4be4ef304edfd2d773bcc2c"},{url:"assets/article5.html.e536d59c.js",revision:"e307c4bfa3416477fc06b817898fb538"},{url:"assets/article5.html.f23bb3e8.js",revision:"740445813a1a4db19af8c29338551658"},{url:"assets/article6.html.087003a9.js",revision:"549dd4b5b83e37091c6c2d6659b38a4f"},{url:"assets/article6.html.119a576f.js",revision:"9e18c9ecddaf34b6be4aa7ace715cab7"},{url:"assets/article7.html.69ae13ff.js",revision:"c475fc05c1619eae95e0936d1e8dce62"},{url:"assets/article7.html.fc5b8fdb.js",revision:"51da5a8349389a9207a20fad02792d32"},{url:"assets/article8.html.2665c7cc.js",revision:"3fa678aad34f7c7b4534d6224a828ad6"},{url:"assets/article8.html.aa503b19.js",revision:"75e7e244f716732315c2bb89fa38f03f"},{url:"assets/article9.html.049b5a8a.js",revision:"f8ae0b01b87278cb004f0516619102eb"},{url:"assets/article9.html.d2ebebe0.js",revision:"608a828c6d403f17192fc2252d82c2c9"},{url:"assets/Blog.1692f0b4.js",revision:"58bf5c5b939c6f6863913de1d1c7f63d"},{url:"assets/disable.html.a08e2c2b.js",revision:"1b5cfcb0c8e02b6a9975e6b00cb10664"},{url:"assets/disable.html.f9d80c01.js",revision:"12d70553721ab4d5dfb15cb3506a06a1"},{url:"assets/encrypt.html.195df0f1.js",revision:"13fb0ca6debc05ce99b5f06d314fa3bf"},{url:"assets/encrypt.html.b6eb2ed4.js",revision:"e088d6988abaa8000f4642ad5a633999"},{url:"assets/giscus.es.1e066ee8.js",revision:"4e00632894e0113cb12fa9036e17921d"},{url:"assets/home.html.009714f6.js",revision:"bc9c30fc5517e8ff7e2f14c8239dc857"},{url:"assets/home.html.675d271d.js",revision:"2e3324df3ea330aef5f8a4092eb9fdac"},{url:"assets/index.html.03195150.js",revision:"30d60e7aa5a6b6df06c041b2e98daa16"},{url:"assets/index.html.03c1b6b5.js",revision:"913d8d30072f15ff5705032618715de9"},{url:"assets/index.html.20eb1ab8.js",revision:"30d60e7aa5a6b6df06c041b2e98daa16"},{url:"assets/index.html.3eac7f7c.js",revision:"30d60e7aa5a6b6df06c041b2e98daa16"},{url:"assets/index.html.5597e84e.js",revision:"30d60e7aa5a6b6df06c041b2e98daa16"},{url:"assets/index.html.573dcb6f.js",revision:"30d60e7aa5a6b6df06c041b2e98daa16"},{url:"assets/index.html.5f99146f.js",revision:"30d60e7aa5a6b6df06c041b2e98daa16"},{url:"assets/index.html.66bc6e05.js",revision:"6f3e39e7009905c30d708b9d62fdd077"},{url:"assets/index.html.69698c02.js",revision:"5b8a607e44c5f98439a0bd4f1e105e9f"},{url:"assets/index.html.6bd2b5ca.js",revision:"c949e03e73b371b49e2e69bc4bf488c4"},{url:"assets/index.html.6f5c66f7.js",revision:"30d60e7aa5a6b6df06c041b2e98daa16"},{url:"assets/index.html.76954aeb.js",revision:"f5e790a7dc3c19580986212293e63460"},{url:"assets/index.html.80c05339.js",revision:"a23d86b03504b8d48fd155519d9e43c7"},{url:"assets/index.html.831c84d1.js",revision:"30d60e7aa5a6b6df06c041b2e98daa16"},{url:"assets/index.html.88677f09.js",revision:"30d60e7aa5a6b6df06c041b2e98daa16"},{url:"assets/index.html.8fe2498e.js",revision:"30d60e7aa5a6b6df06c041b2e98daa16"},{url:"assets/index.html.90b1d6b0.js",revision:"30d60e7aa5a6b6df06c041b2e98daa16"},{url:"assets/index.html.94b6115d.js",revision:"eaf6979894d35f163f7ad36af050fbf7"},{url:"assets/index.html.9b491685.js",revision:"6fd2e04b1607859d963b2e516b37af0e"},{url:"assets/index.html.9be2fd42.js",revision:"e6dd909eac025a1364a7cab449a69d48"},{url:"assets/index.html.b66b8c82.js",revision:"e1b0eff73d6e92cf2b9fcc8543796067"},{url:"assets/index.html.b8dfc2cf.js",revision:"127fbbbbb550c7db3930d4cc3abbd266"},{url:"assets/index.html.c11d180c.js",revision:"6aec6311c7a2fd72752ea2ddb03e6bac"},{url:"assets/index.html.c56007a2.js",revision:"30d60e7aa5a6b6df06c041b2e98daa16"},{url:"assets/index.html.c5c5a2ad.js",revision:"1468a792097dffd8e55cf099d67fe5c4"},{url:"assets/index.html.c74c8ac9.js",revision:"30d60e7aa5a6b6df06c041b2e98daa16"},{url:"assets/index.html.c78bb8f8.js",revision:"30d60e7aa5a6b6df06c041b2e98daa16"},{url:"assets/index.html.c7f2cbc5.js",revision:"c6c6cde77dcab3e8f72d0865bc1d5102"},{url:"assets/index.html.d936640f.js",revision:"25dcec910d7bb8f6fe136facf14779ef"},{url:"assets/index.html.e11b9849.js",revision:"27c27d18baada2311056ae654dd64eb7"},{url:"assets/index.html.e185976d.js",revision:"30d60e7aa5a6b6df06c041b2e98daa16"},{url:"assets/index.html.e2e2f02d.js",revision:"5c5d57ef34f82428c0a9e43559a22d06"},{url:"assets/index.html.e2ee23c7.js",revision:"38051c93a0831830275cc6c9cf44f1a2"},{url:"assets/index.html.e3ad1d5d.js",revision:"16e1b870947d4be377b88cf918cb5113"},{url:"assets/index.html.ec7cbad1.js",revision:"83e8500ed16ad2f31975425fa2e1ece0"},{url:"assets/index.html.ee109b2a.js",revision:"30d60e7aa5a6b6df06c041b2e98daa16"},{url:"assets/index.html.f34932a1.js",revision:"30d60e7aa5a6b6df06c041b2e98daa16"},{url:"assets/index.html.fa220eb2.js",revision:"30d60e7aa5a6b6df06c041b2e98daa16"},{url:"assets/intro.html.0de3f065.js",revision:"eb4dffb732f1361abfc8af5a3d6771fa"},{url:"assets/intro.html.649b6454.js",revision:"91170cd8e756e2ab25c31abb54a6f483"},{url:"assets/Layout.e6a3bd4d.js",revision:"d955da268ce6d5a1a86122c462f9b7b7"},{url:"assets/markdown.html.018d278e.js",revision:"6a5db166b30a7a2eed724e5c900300b7"},{url:"assets/markdown.html.d1ba5147.js",revision:"4bbea276e3f0c38006bb8bbf2243fd10"},{url:"assets/page.html.ac69dd03.js",revision:"e8b30757eddfdc79eaa75bbd95dccc01"},{url:"assets/page.html.e6ac10da.js",revision:"5bd596bd234e12a6833877afa9d8bdf8"},{url:"assets/photoswipe.esm.bae68db6.js",revision:"061d11f047773ba6b19d1c9acb8c37b9"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/SkipLink.55378b6c.js",revision:"56aad55718d0bf953f305bf3d4f0281d"},{url:"assets/style.7441fb6e.css",revision:"0ee9c2540f6080ce9b4e148304df8578"},{url:"index.html",revision:"a5b9326de0bcb53c81a187ec58726229"},{url:"404.html",revision:"bc8477e11ed603d43425d2e48ce10a03"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
