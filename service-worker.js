if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const b=e=>a(e,c),t={module:{uri:c},exports:r,require:b};s[c]=Promise.all(i.map((e=>t[e]||b(e)))).then((e=>(d(...e),r)))}}define(["./workbox-0717e078"],(function(e){"use strict";e.setCacheNameDetails({prefix:"魔法崩坏"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.ff5a69c2.js",revision:"f19b645bce86b2bb0f5f1159a6bca193"},{url:"assets/404.html.4d2f5e63.js",revision:"cddf27e9c8ddf6fedb8664a50ace7aeb"},{url:"assets/404.html.5f52d4ad.js",revision:"bcc9a511a2e81a3d3b60ba1ee3a4b179"},{url:"assets/app.ec3217ab.js",revision:"6ca64866dbcdeaf9f43a67d7723162c8"},{url:"assets/arms.html.2e17f043.js",revision:"ce85c6bd13862e64d81e921b33fe1bfd"},{url:"assets/arms.html.420fbcef.js",revision:"bea2fe2c5c4e40ac5edb7481a268e5ab"},{url:"assets/attribute.html.b050172e.js",revision:"71423de780deb9e9561d114aecc70f0a"},{url:"assets/attribute.html.e0033257.js",revision:"41f381cc489a53fecf9c27cf856ab8ef"},{url:"assets/background.html.e1b34910.js",revision:"17a9528496683c4dec5eeac829e4ee60"},{url:"assets/background.html.fe6b4b87.js",revision:"f94a1cb7f960bb8f269b4de87ceb021b"},{url:"assets/Blog.ac83dfd5.js",revision:"431623b1fd6ad17d4d390e7de4235b98"},{url:"assets/dice.html.05968838.js",revision:"ddb30fcbff0ec31474986e883de3c3e7"},{url:"assets/dice.html.b2e25b0a.js",revision:"e6bfa778c99dceed5fe1719b26987ff1"},{url:"assets/DLCrule.html.4018b15c.js",revision:"2119e57289b1a6049ab895bdc876040b"},{url:"assets/DLCrule.html.e835940e.js",revision:"8af90c2f1f8aff735693da10999ae995"},{url:"assets/giscus.es.1e066ee8.js",revision:"4e00632894e0113cb12fa9036e17921d"},{url:"assets/home.html.50470ea2.js",revision:"b5591d974e67a5bb8700fc1d383a0546"},{url:"assets/home.html.9264eed6.js",revision:"34a720cb13194918552a27d155adf8b8"},{url:"assets/index.cecffef2.js",revision:"96111972074fcec23cd9181bc4cc5906"},{url:"assets/index.html.06266044.js",revision:"5d2a10f690101fe8ac3dff425e30602b"},{url:"assets/index.html.0fb9bad1.js",revision:"9d2daa1fe1bdf4434a4a59bbd013c023"},{url:"assets/index.html.137ad260.js",revision:"7971207583dee19e1bd8ee3324771bc8"},{url:"assets/index.html.1e55a634.js",revision:"e21b0104746ba1a4899893510c125fe4"},{url:"assets/index.html.236fad1d.js",revision:"e21b0104746ba1a4899893510c125fe4"},{url:"assets/index.html.2a8465eb.js",revision:"e21b0104746ba1a4899893510c125fe4"},{url:"assets/index.html.2d411e06.js",revision:"e21b0104746ba1a4899893510c125fe4"},{url:"assets/index.html.2e173273.js",revision:"e21b0104746ba1a4899893510c125fe4"},{url:"assets/index.html.41c1458f.js",revision:"63b61a94e37d51e767cb285d496066e0"},{url:"assets/index.html.56029ade.js",revision:"853472acdd3955a3d2f2eea28638fc39"},{url:"assets/index.html.6bd2b5ca.js",revision:"c949e03e73b371b49e2e69bc4bf488c4"},{url:"assets/index.html.76954aeb.js",revision:"f5e790a7dc3c19580986212293e63460"},{url:"assets/index.html.79df5135.js",revision:"33b7268263ffb7c7fead527313e00344"},{url:"assets/index.html.7de288c9.js",revision:"6571b78cad3e9d36baf5ce81d25e4c33"},{url:"assets/index.html.92dd07ee.js",revision:"bbcd198f503f1742d509aed20ca16ad4"},{url:"assets/index.html.94b6115d.js",revision:"eaf6979894d35f163f7ad36af050fbf7"},{url:"assets/index.html.b32c7753.js",revision:"e21b0104746ba1a4899893510c125fe4"},{url:"assets/index.html.b3c98fd3.js",revision:"e21b0104746ba1a4899893510c125fe4"},{url:"assets/index.html.b7a28044.js",revision:"e21b0104746ba1a4899893510c125fe4"},{url:"assets/index.html.c0044856.js",revision:"e21b0104746ba1a4899893510c125fe4"},{url:"assets/index.html.c416c001.js",revision:"91d79675192360981bc74fe91b68fc52"},{url:"assets/index.html.c5c5a2ad.js",revision:"1468a792097dffd8e55cf099d67fe5c4"},{url:"assets/index.html.c7f2cbc5.js",revision:"c6c6cde77dcab3e8f72d0865bc1d5102"},{url:"assets/index.html.c88a8fdd.js",revision:"e21b0104746ba1a4899893510c125fe4"},{url:"assets/index.html.c9ddd694.js",revision:"e21b0104746ba1a4899893510c125fe4"},{url:"assets/index.html.d936640f.js",revision:"25dcec910d7bb8f6fe136facf14779ef"},{url:"assets/index.html.e11b9849.js",revision:"27c27d18baada2311056ae654dd64eb7"},{url:"assets/index.html.e2e2f02d.js",revision:"5c5d57ef34f82428c0a9e43559a22d06"},{url:"assets/index.html.e81a2713.js",revision:"e21b0104746ba1a4899893510c125fe4"},{url:"assets/index.html.f66d8dbb.js",revision:"e21b0104746ba1a4899893510c125fe4"},{url:"assets/KisaragiStation.html.3a252ff8.js",revision:"46a2f8b2aa00394c7c6e0c43786015de"},{url:"assets/KisaragiStation.html.6713219d.js",revision:"572366c431dd7e43e378b9ed67661ca9"},{url:"assets/Layout.f4d69583.js",revision:"0b8142acee06ca26117e3378b45ce21a"},{url:"assets/memories.html.59453676.js",revision:"a0868e88b328a6c350832a738edb3bdb"},{url:"assets/memories.html.c35895a0.js",revision:"6a477b8eb370d852486f4ed09a710422"},{url:"assets/photoswipe.esm.bae68db6.js",revision:"061d11f047773ba6b19d1c9acb8c37b9"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/RDchekerule.html.72de0995.js",revision:"7b1022c25af4289b8ad7fab8aae94f7f"},{url:"assets/RDchekerule.html.d1408ee3.js",revision:"d209101e390e259f67ac10ac686cb0f3"},{url:"assets/routine.html.fc428e2a.js",revision:"313baa49b715f354c5a3cfb8074a8bff"},{url:"assets/routine.html.fd6eb653.js",revision:"9719675ea3e77451ffa328b9d006e069"},{url:"assets/search.0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/skill.html.604957c8.js",revision:"c3b72fa28647ded6e9524b3021665347"},{url:"assets/skill.html.b9d05702.js",revision:"12356e66ce43b66f782ee65a39bf998b"},{url:"assets/SkipLink.cac3ea14.js",revision:"e2729453b1cb1cdb85f130223ff8640e"},{url:"assets/style.3038ea95.css",revision:"21de261644ce14753cc93af9a026d894"},{url:"assets/thanks.html.3f1ad6aa.js",revision:"e5a7f6b372c294ccb60b309431e9c0df"},{url:"assets/thanks.html.a11fca1d.js",revision:"4d8c6f6e6795469c36d56ee81b0eac89"},{url:"assets/updatelog.html.65315de8.js",revision:"a634ed6faba5cda2543b651027a9fea2"},{url:"assets/updatelog.html.7343abc9.js",revision:"27375b4ae18e8dc61650f740c28b25cd"},{url:"index.html",revision:"c34bfcb6c943d646ec79e08c8dfc639f"},{url:"404.html",revision:"6c3365dcf00c8c10f432d0a57415d9ef"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
