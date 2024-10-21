'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "24c8828742dda75c902b8ff0817364d0",
"index.html": "89d8f03ee486fb6758643132262f58bd",
"/": "89d8f03ee486fb6758643132262f58bd",
"main.dart.js": "98677d4ce6a0284751309551c59d12ab",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"README.md": "3d6b0cf9188b445c6a4dc583c51ee7fe",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "57afc5034cff298539f37836ada77b86",
".git/config": "0a45640c007c47dd18e68811c05f74ad",
".git/objects/95/30dc81086424b3e53392f9c24962c8125fe631": "450f019384e1dcdc8052920b2cddd2d5",
".git/objects/0c/ca898c5a4f955bc0129fd777013b508abfc358": "595eeee709bb7386392dc49109dd1a8c",
".git/objects/0c/a442daa13ee55bd5764a86aa3177126e73aad3": "c6d86594191243b54efb53b188019fc8",
".git/objects/0c/719884c40aba7d6fc0f5ce3e8e6c22e01c96e8": "8087cdb7aaff245d351ccdbba413192b",
".git/objects/0c/2de0be88ec3262faee9ba8292a4f7632c96f53": "ead71585f15f5abb18e2d962530340f0",
".git/objects/3e/66e433fe1f2c605c65439e4c1fd6caf896bb0f": "8d5f420cd89e8ad6ea77c75849778bfb",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/69/c8cac678fbeafe065d474fbfdf461bcf7abf8e": "b50c13d1e5df1ccaba09a9177ab7b415",
".git/objects/3c/cd37ed74dd4ea2d81e62f1f20a405e27364a5b": "6b9315e20721c94c552a3a39fed5ff09",
".git/objects/3d/8073b6f79155166eed66395ba4a6090ffe23d6": "1023d462b3838214fda55735954a56f8",
".git/objects/93/ee58321ab289f1837e5e299daf5ed337e08fb9": "5a78c01639766fd6726dd1b5ad5a088c",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/5f/49f81506f4bd88ed98ac7201e6448f5c0ec2d2": "01da2e8c124a67d7f999126c86fdec1f",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/d9/bab7ab0992d1aab5532715af0d469da659b5a7": "909d72528bd20232a2c3bdac768364c0",
".git/objects/ad/33725b74cdd35630a6da0b60a37a81b0b17ab8": "f7d1c374857fabb4c381faeb738c49a3",
".git/objects/a5/ab72b9be23569302b425112404ec553dda3805": "53c5acbe573758ed397de8b1eedb13d8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/982f8e3a7938c8f4d3bda6fb3049dd0314a583": "cac566655ec1bf8e01e3f8c03535185e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/20/5e78ab4de2651d43e49571493e9540e695a12e": "079f9ff35d1c7db701b8f789431cc1dd",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/3bad05a404baf17fb49ed14cef0d3ca547e449": "406acdc72a4d640d194cd471bdf51c9a",
".git/objects/8f/7d94f2abfdc3d30b8ecca845fa81b66328f95f": "f0b31a6301dc06af86936a6db7c0d4fe",
".git/objects/8f/4e671474122045cb7fb9bd702285baa37f6626": "81323cd11a92f499592945f84c08e074",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/db4c515b8616575cd9f2be4586c539d7557f3a": "dc9b042f0d19237f9ce8d455918d6d25",
".git/objects/75/efb945f539082d950a733dc47445f520d6d7cd": "996f8de7e598646fbed6f3855fd1151f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/9a/568c0d6b6263e2e3970b39c99b8f68f3278cd2": "5d306a9f4f92ddd17375848d2b29a648",
".git/objects/31/70eddab9680dfdad725c5c663c535092015a34": "e6d62a2825848ba02c30329c2c5db356",
".git/objects/96/56d1b185f61a43d89d1aade61c0af87613edd0": "76f73ad12cc281ba5069ae1f3d5148e3",
".git/objects/06/db58605ca5bdf0826ec90decae93e7bc156d44": "8721e02cb486de911df28b667932964c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/7ff45f493540a13b4a5ea61eced5bb35f4a463": "fb9f10b6fc85a68d35cab98d8948b4ae",
".git/objects/b8/0609b750191e31e66e9776aa0b74d1d12c9f29": "946d792d19e43f131ce91e1f6a72e277",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/607368b2b47b96d472c5850544b7fd7601b521": "f77eefaa2409508a318979fc07f63a7a",
".git/objects/ef/468634575dab3e441a5c41e061ff4f40f72126": "8c9e22370dd085bc4efc9df176be9a41",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/e8/9ba947885a97e51cccfce9545d65d2f4a9131e": "eb2c2435e65df5ce748ac4b015f60390",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/fa/eafc82ac0eb5850069a1d55d17c434ef5b1e83": "de0964f5c9b27bad32dcbe2edbda6436",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c5/8ece06d374637ae4113095fc6b60371252f844": "7dec8cce9bc702656d6b6a61bdb3654f",
".git/objects/f8/6b791fbc35bdfb3b93effd96805ab3514ae2fb": "afe7fcb09bb60f0c63f2f6c550a4a13b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/8cdb45e50dc975834e6c15af57e968239e0ab8": "010d78be57558625b39d619896c03dde",
".git/objects/83/f022e31acb88b3972f4d026901e16b78e6a384": "c2e57f90e1da1422717ae8ec2c0bbb3f",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/24/5df3d3d33c94ff957f488e183a643b3909face": "dd2b0fcbf1c47f4ee1bffbc6805e02e7",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/aae62c003ccba92279183989d77930d72da669": "91c7d34442d56303b9c8d178d0cbebee",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/2b/15b003a7b852635d4facb8e68fcb5e4c3738c7": "fccd5cd07cf6194df5f841cc40ad22cb",
".git/objects/2b/c467a0ed292871af857306f5404a5d02e4231c": "72b55ab1575f115bce50b4bb479faf61",
".git/objects/8b/b6f7ac805c45f1edb6f96636ec62bd8e822dab": "17468fe686b05a9ba49ecf02bda09596",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b0158d22a3b182367e980ee962716d1e",
".git/logs/refs/heads/main": "9e702916c201a5e87bda4055a137a0b3",
".git/logs/refs/remotes/origin/main": "2297b27956fb0746dc3d341913af9676",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1be117922496ac3e79472ba2c683d9fa",
".git/refs/remotes/origin/main": "1be117922496ac3e79472ba2c683d9fa",
".git/index": "09693c85f8ac50ff797e41671372892b",
".git/COMMIT_EDITMSG": "a8a78d0ff555c931f045b6f448129846",
"assets/AssetManifest.json": "613a961693b9b0881997f1712e35755b",
"assets/NOTICES": "fc48aa8ea4c6073a86dda7e06f2da270",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "6610bd56146d5a4eeebf43d807adb577",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f78fefb9902151f52c1fc8e95734fbf7",
"assets/fonts/MaterialIcons-Regular.otf": "87c652b20364945218139a6d9cdd5fb1",
"assets/assets/fence.png": "b086e6f1698dd7570c5fe41a036b77ef",
"assets/assets/drel.png": "86f5dc02f31df19d5130ec4c1e42b279",
"assets/assets/spider.png": "ed6994c9c8875fdee7284e7c47c45d50",
"assets/assets/ac.png": "a160405bc61368e4e4be0409af9d7c04",
"assets/assets/decks.png": "162ef343fa8876594cc60a1f63130509",
"assets/assets/loundry.png": "b5a838a7063d03bcdbd1fdf7a378ec96",
"assets/assets/shower.png": "8c9351675607ce6925f4f3ac9cb14144",
"assets/assets/home.png": "81667fcdfc2106884c59f602c7d58e71",
"assets/assets/painting.png": "7eafae698970cd36cec054e93f45c94f",
"assets/assets/gutter.png": "de5874a950a3d75bb74507b0f3656cb7",
"assets/assets/krant.png": "213f487937eac949ca8f1d4e469aa5bb",
"assets/assets/armcheer.png": "e091fd0190bfe7861682d819a713a9af",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
