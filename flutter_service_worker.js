'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "009c9e65172e010890f7f65fde438006",
"README.md": "8265b54d457f59c275d1b10bca9660c6",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/fonts/MaterialIcons-Regular.otf": "68362d1c06cd6f1f95ba8de53da6772b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/AssetManifest.bin.json": "c1383a276238ec0edcbc269c2eebb90d",
"assets/assets/git.png": "ab40d02f0aa8bf85de12fd45bda5b0c0",
"assets/assets/coder.png": "5e7cb9e24bce7321f611ffa1bc93ae50",
"assets/assets/linkedin.png": "63535e47042d58ec10dad75b7511ca2a",
"assets/assets/github.png": "e156fe205c814e3b2ecb56d9a17772c6",
"assets/assets/cover.jpg": "739790032c1bedf05eafeec4191b3b1d",
"assets/assets/firebase.png": "30bd1b253c5ec8a55ef705f4b3c1cb25",
"assets/assets/mlkit.png": "82dc20e9ecc159618592b379bcb5b7ea",
"assets/assets/hacker.png": "950d59a024fd9515290d7c64c9c3ec2c",
"assets/assets/flutter.png": "a98fd75dcdae036b0210ed395466fb0c",
"assets/assets/insta.jpeg": "6cfd334b128c8f27b616f80f4a9c7bc8",
"assets/assets/facebook.png": "71e260746c6d9fbe0bff84235075452b",
"assets/assets/riverpod.png": "902b5e82497d6d7d86291b576902fdf7",
"assets/assets/mobile.jpg": "3919b369d50b2bab64e5017049085d29",
"assets/assets/docker.png": "4890a18c4fd0ee30f4c23ccbf9c45746",
"assets/assets/back.jpeg": "e709d350a5fb186d53f6977f064be537",
"assets/assets/projects/virus.png": "dad6819839ad11a93d4d4e965db7580e",
"assets/assets/projects/collab.jpeg": "08411f6f3dcc1111fede386a09898b35",
"assets/assets/projects/ai.jpg": "4d1309fb703a005b3cf18d66d3b2f683",
"assets/assets/projects/bmiapp.png": "b36a01aae8b2a2a9aeacd0aaae6f5922",
"assets/assets/projects/esim.jpeg": "11da462d756d7b72b95dca568df8291f",
"assets/assets/projects/weatherapp.png": "a0bd645e98494fdb9fbd213010cc318c",
"assets/assets/projects/message.png": "bc58d8bacb176bf71a8ef63553b823c1",
"assets/assets/projects/movie.jpg": "cc616c0489a4dceb37124626685f84f1",
"assets/assets/dart.png": "b51490c41f3d5088ed08756e7e5d2990",
"assets/assets/upwork.png": "9e80d7626e24ee6af2ab8652a19e4e0f",
"assets/assets/linux.png": "1ccfb60c0bc6a42b8d91edea6284936d",
"assets/assets/sql.png": "b818ddee447f5c8a3c703c40804772d0",
"assets/AssetManifest.bin": "d88f68069320e9b09d3135ab827ac0ef",
"assets/AssetManifest.json": "d8646ce6e64e06721552610e866264a9",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/NOTICES": "65035b709c4662f58fc4cb2d049729fd",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"main.dart.js": "e1f7e8620653967b7557ea47807924cd",
"index.html": "b277cfe46af1def7c5d9355d412dda50",
"/": "b277cfe46af1def7c5d9355d412dda50",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/93ded078410c87817f5ac241ec55a5a775a832": "d3a4cb02918af0eafcbd6b4f6b3bcca4",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/6f/f9ff36e5ade2deae48bc88ac351f2222323f45": "03e2bad0f4f48c9cb89e6198b7a8a857",
".git/objects/a2/87c24f7247453c89ad940959f7f8eeaa849234": "f6d63ab44c65283ced75bf4fee538d8f",
".git/objects/c2/9bb852a0e6ae2b8c652a504194bd170d4803f1": "136e9eea71dfe66676bdb88648c09af3",
".git/objects/aa/3bae0017c1678a5b7a71c65c11292cebebe478": "f482eeed7f25b44214485892c0477cae",
".git/objects/96/fd68513878772edea412adcd638a246155dce9": "ab5fb2382f99cad2cc93ef935acadbdd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/cf/55df0d6ad79aa9c256ecf572cb181c8d870993": "7bcaeb5519faba495936d11bbfb326e9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b2/0e9fba6f0d1cdbffcd26452b425129bfb913e1": "fd5f5b8cdd24347baf5b0ab7858f9d33",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/1b/e0b592838d8091b33ca810a824bb971e920340": "f3c6ce30724dd2fc176383aa73a8e98d",
".git/objects/1b/953e424b9d9b3dfd9ab7144b0b0f2f82a0bf07": "a00ac5d65be4ff7e13265b1303233799",
".git/objects/3d/e775de163d380e80d0da8b8f39cfe35cfeedaa": "044fe2601fec517714c9b8a0f4f1fb14",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/24/9e3d8e7d6744255669510d873fafc1a1ff4afc": "b17d38a0d335b732a8a3a61881731d00",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/9f/1bd5eb84338424a314d155b8dbadd53a4918fd": "799c0259bf82230e01caa2ed6de81493",
".git/objects/2f/c9f615e32226a6336233f2a5e34914f591a9c7": "1a128eb878d886da5ba2b619c71a9bd0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/60/615fb62c190443270d76e3fafb1e69e08971ec": "71fa262ff03d0e60f31e9978e7dffa5b",
".git/objects/fc/84f26bebed9ba79d30e43b21af7b5ca0ca291b": "c032f167875bebe85dc6e8e6a816f4a9",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/934af184657091d1a7a1aa51807640e940c623": "9a55088a5c1328bdadc4d17c22efb32a",
".git/objects/44/44d14c7fd3b1953cf8c3ef38b5cfd903f61060": "ecf78ea8d430a4ab6334669ba32a768d",
".git/objects/1d/528690f9bf1c221b87ec4c6f156f156e3e02a3": "7df2a62205e3a7e56048d148b6403913",
".git/objects/2c/599763e0a50fd485673dddc530e4e0cf9d038e": "bb4535403563748d0ee56775b1bc72eb",
".git/objects/f0/fb1afe46d0392895d9da85e3650fa22c3c1e03": "8f08c61a1e461c48a66fa3b21dedf18d",
".git/objects/95/ed21e9d2de5cbeb822947ba729b2f73ac6d171": "a31f8c6c2164937b01baf523899bd24c",
".git/objects/47/5376b257d020a6ba2e258c841dac0b9c9db013": "e0abd414ddc0b5a2d7b16f57c968753f",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2b/0ea3e390fe9dec64660573393372ff5a1ed901": "ad7ef2916e687c27ebe998e4e7ad1f00",
".git/objects/2b/da638e8487afa9f35b7bdca19f9f5c182b3122": "2b531200184600c09f27d6380bdc966c",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/91/83a0fceff937e670dfa33dfbc766b4d0b23422": "877fe04d501e800e0dd09d4e3852c769",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/32/dacaa60d9fb2ff3cd75790687f94b31600918b": "a5303f04fa709fcd7f08d25fe74fc400",
".git/objects/69/721d9713f092ff42e34cf8804bd212fa235c59": "275dff94b73749a9a518efaa51795d35",
".git/objects/ac/c80950697829c0fc73da2e7b21bc724bd70d21": "efba0bd79dae106bddbe5dc57bde815b",
".git/objects/7a/7186eff159885b3f1d0c343a3a8dffd2dd617e": "2d4bfe70599c54b7d2356b518bcee271",
".git/objects/52/bb6966d7aadfd5f1ebfd79a71a65d49ef53cd8": "3bc2319dee40cfddce807de72fa9a626",
".git/objects/52/2703dec4dd19c5a8f89496995f38a2c5487018": "77bd81f7021bf422cf24186310ba0ff8",
".git/objects/75/6e348d04200e3ab3e8afff9c92d6d50be6d183": "5e645ecb6bf8afa50a8847b1a2516b42",
".git/objects/74/e4201af6378ac87bf9e118fbab6553c7fd355c": "6424d0690fca72c41d98dc807b8854a0",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/6e/7811565f3ce62048170cc4ed22187c7bc45e54": "609ce89f7b11ef065108fda5db621c36",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/4c/72dc4d27d03e3a8b8299e680f938fb3c02459e": "7db8633bc9c1eeffb175ee1fc59b98c9",
".git/objects/58/6d81f413df7ef63e026c033fda72e43b08c572": "ce103d0505818b33b94b19f5c1def69f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/a3/8b8d0f1306838fe1225c16f0a45d7f6a14c702": "098cd6f12f42c4449d10d055ef14b991",
".git/objects/a3/003ea0c4e58c6a85a14991b61b3cf1366020ef": "e6c7d1d83e841e131e0d06011b21a9b2",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/b8/17c24c17f2bb176ec0829d045b1b4700df5d88": "70f58ae6a2de9ab530ab7d846a220cf7",
".git/objects/21/f5e7f081bfef769e95eab1877bc75b845b7607": "2b0f00870d44a11c801098fcd813dc1a",
".git/objects/e7/355a02d617c3f3ba1eddd81107c1ac3d8d8130": "414417341e0cc3e3579e46264a274dd7",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/17/3f4111c75cd3e515bc64e7d5cb60f23ca20c2c": "1ba6cf8c3f009d8ab1d54ad93c12e43e",
".git/objects/4a/26ccbf034083ef5e73d2be751520b16a24c466": "0ad807f6a76c6ea8fc70d82e8d434cd8",
".git/objects/70/e9381d7e4d0fd7c09b72f8a466162d7b200657": "997d7d690a0d01ec4ce258a82107ad63",
".git/objects/70/109dcf4370b6459a350aa24ddad6397feaf55f": "26d9bf98bf7bfdf58b21c74823e0bff9",
".git/objects/72/91303b6eff41d475b257e114c20d561c81ab96": "1a1f2d513c1abdabbbdd2739a6669ad2",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/0b/18587c12ad5de53fe10631455e0594425911ef": "70af9058da7ea8f43da2e91bcceb7e17",
".git/objects/df/5cc476b89b8f6c8468eae831f87c11973e4390": "13e8d662d371fed6d8bdec7edaf7bb72",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "b3b6659bb6165d7e56456dc060293109",
".git/logs/HEAD": "6d7ed70ab15bcbb44ebb68638cb67460",
".git/logs/refs/heads/main": "ddbe3e9fe2ff17446b4fdc450e5ce6e3",
".git/logs/refs/remotes/origin/main": "7759c9c56af109ad9a0a304428c9bd70",
".git/index": "86ae386eafeaa1dd46064723ad8645b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "873fff88e4e2b770e4badd15871f8497",
".git/refs/remotes/origin/main": "873fff88e4e2b770e4badd15871f8497",
".git/COMMIT_EDITMSG": "bc36b19c53b1dad4369fd544e6b5b5a0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
