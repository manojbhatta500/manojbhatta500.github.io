'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "009c9e65172e010890f7f65fde438006",
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
"main.dart.js": "662b8cda37869029312d85a94955b627",
"index.html": "7080fc7cce1a6cf825e3bf7f648f08f7",
"/": "7080fc7cce1a6cf825e3bf7f648f08f7"};
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
