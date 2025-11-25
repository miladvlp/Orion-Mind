'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "29f0672336b37cbc0ddab0556510fd97",
".git/config": "35938c03f2282a4ac9d0851a8754bc1d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f16f525177f53bb01e467004aa879b66",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a9c488e462aa678ba784571c40bda582",
".git/logs/refs/heads/main": "5caea924df76405c8a05ee118458774d",
".git/logs/refs/remotes/origin/main": "040a14a58cd82fd3aeb8b9fe258237ed",
".git/objects/00/24143fccc2f8448728ea8b551d30a83aa18e29": "1cd82f25843a8dab7474d1816d83dc38",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/08/59cf2a9f92c620f1e019e6b7b3e99e8c91a5d3": "d83a4f9592f81809a49cdd1cc4249444",
".git/objects/13/61b517e0bed02f63817980e90d1e615b8625f4": "ae124db82138c1813f24ade42c040061",
".git/objects/18/d9718d238bf8c75cf47a3cd293f92b85d397f7": "8ab7f995240154df419401752f359e79",
".git/objects/1c/12ba16e7f81e31b5b31315b75009454ebdfc7d": "c3061445ffe1f458c46cbe1dce2e9ff8",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/ce85261d9f0f6bc5ac330bacd523f43a724bc8": "91271bab0e1abc11fc3dcfd79b4b5e3a",
".git/objects/24/a630b34ccf64aba5c1ccf7736417c0445ceda8": "d397f82ae5b9fa37392127240f01c7bf",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2a/1def58ccbf8346868852db75c5a4c78f7d6877": "a07bc81ccd16c6eb9aec115ef26c96bf",
".git/objects/2c/8366b361e3537ce0694dc4db7d3a0ff4042b12": "4da3a85d19a4a64c0bb41bdcf2ddc27e",
".git/objects/32/14594fe156b27fd971be46a692d23e707d8a85": "a12f8e5b7c519d302c3f899d4f6c9562",
".git/objects/33/28572d70be7b0505163b0f33feff3076d4e5cf": "5cdc794c556e70e3a3710e711f8585fc",
".git/objects/3f/0727e6efd03495dacd4ff12aefe5d1f223675a": "2d66fe9b73108484096ed3a9da79fdec",
".git/objects/42/85d1c412b6b781a2b9cdc866912e3860fb7459": "4c847be65a6fb35e6c252d21504c72ee",
".git/objects/46/9876e38a86994a2b1465e8b3f287218b30fe3d": "89908eebed2ca3ba4c1dc5923e2f4c5d",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/58/c52a1c585b3cb30f402f8f1a80b400398c07e3": "69b7daee7b1bbb07155aca548213f195",
".git/objects/63/f66c6ebd32aced688e36a3d7d1d16783437ffa": "fb6d16e530c4c31fe103673c1ebd8957",
".git/objects/6b/7cf9bedd6215b5d0152f4e656f75f77ef4eec3": "243a3ad77c8997823d4bf213a085300a",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/cebdbf6c7e6f52d91a06f99e6e1c5567b33ec3": "35a8c043badde00890d3e523629c2e60",
".git/objects/6e/efb0f5959632dee79c0ec9a523759007f7578c": "c1f7f046db4f4c5450a4fce4253d4c47",
".git/objects/6f/5d7f1045980fb23831db79a5716f5c32d40aab": "445b48102235704aa6dcd08539879f7e",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7e/b124bedcc03a8e512a0d6e196faa9c48be47b5": "d9d27120b004e5ed296b2f11a0b188dd",
".git/objects/81/97348aef98677edad8431e79f5c1e72602cd9e": "629c6e9bbb90a9be55a7dbf4587327f0",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/93b901bee34b5f843f6bdc9f4c624b3da8f27c": "0a26ec033c96cfb79912c1d40fb855fa",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a6/eef50cb433bca9d08db60b6ec6d0b4836d5522": "914785c1b1ccb0a5e3f472684e029610",
".git/objects/ad/c0207e67b977d1a51f0705d15443780a9aa350": "0254d7b83a9b9583cdb587fe5f415933",
".git/objects/af/62cb716b671dccb520ba38ae987a2d113b04c0": "d81d7c325df3752eb5622a62a8883a57",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/436ecc163396fe2ef1c9fbdbfe7b941bc48d1c": "f866e3d240deb501a915b693854e97fd",
".git/objects/b7/98af95ccf681d434bd5d7972afb38c9ac9ecf7": "af29c66b01678741510c88754171c7e7",
".git/objects/bf/1096a2e44aff25ba5e79af81dfa629f4550d4d": "1a717757ac5fb78f44bec29b54aec43a",
".git/objects/c3/8b06904d815288892fb88d5ddd720a66dcf870": "205a2b7f8306f7eb93816b2d07d5e8c5",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/ca86fd6ad724a7219b0ee408e0859b9000ad6f": "ee794ac0d042b85140d24f18a9e26cba",
".git/objects/cc/9d9b4109e3e9f617d4221bc1d720873bee65b6": "b71f88befb2de5f2983b56f36119b8f9",
".git/objects/d2/269c4e5181ebf6d711f3913fe6908416baea31": "ba472360c1c2d86bb12ee9ae8cf15bfd",
".git/objects/d2/a3df79781dc3ecc08e9f84f9966fd08562a88d": "f9193fb99614ea3e329dee4974f1305a",
".git/objects/d2/d6fcd4ecd846e9d974a0ba19d2b3052d8054df": "c4684f7fe207e0645db93c12fdb91b1b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/29e984895d8ff4442fe7bdce1ed4dc754730ca": "b1752d2154478a6b9d06498cbb941b7d",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/d7b6d081732c12040a593ad7b728a75347fa26": "ba235a89922e53089da65a97331a33ec",
".git/objects/df/4487f573637f253aea9f708a79145d12e1cd37": "b2d6c3bdb9e2642bb5de9d19d017f354",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e5/5e17a05afda64a05f8fb6f95dee08556170189": "2eec3fbbfa23e2e7bd55d488c60c8053",
".git/objects/e9/66f12e75050bdaa8d0ef72eb06a0b4f1b30b4b": "32aafc10eb51c2812e361bdfb25e53d0",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ec/8c53e581696f88426a610fc170586607e987e2": "501af911a5b5c078a46e25704ad1a3ba",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ee/6da51e0ef4c0be2965aacf7a381fa094c29318": "559036ab80ae8d1535d633c8327dddfb",
".git/objects/f1/e75ef19523a03bf8f06f8c88fe55b42cac1b4c": "2e17e02e27d411d62242e7c9f196e9d3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/3e3656076ed32cca9e63a8ca323b179bf7573b": "bcbb386a52d086bfde25a94fce70047e",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/d8fbb1c5dd7b00621d17fe14779e08052a8e04": "1b3c54a330850c5294e175304f65aba3",
".git/objects/fb/0c0ad50d5078ceb74f8d2d42b168e6798412f6": "cd72a97861298cdc2319220f386d3f99",
".git/objects/fb/727e82b610176946cdff6a3033ff807988ed58": "01d29f861a2f563d1d5b02c28a49fe23",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "ed8bffcfa56bc8b857a7b6ad33fa2520",
".git/refs/remotes/origin/main": "ed8bffcfa56bc8b857a7b6ad33fa2520",
"assets/AssetManifest.bin": "aef692f67dfb229dd319ae10c0a0f470",
"assets/AssetManifest.bin.json": "5fbc6ce68d69d6f7767764bdd4c2175c",
"assets/AssetManifest.json": "c628120518922568be7a8a671bafa24d",
"assets/assets/fonts/iranYekan.ttf": "d13047e02b26b61b211234c4ef3d29bc",
"assets/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/FontManifest.json": "11677cbf09e4b8eddb70387c5a0c29b0",
"assets/fonts/MaterialIcons-Regular.otf": "88d0978d878ba569e23daa64813816a5",
"assets/NOTICES": "b68a0cceaa9d282b97c906ea28aa5c2c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "616a2564692d79d249d67a10767bae03",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "bb39ecc6fceb77d3b074defbe7109ec3",
"icons/icon-192.png": "84efeda50383b10fc96e23a6ac83cb18",
"icons/icon-512.png": "e348c64b4951254d16bcaa44dccc9f61",
"icons/Icon-maskable-192.png": "9bdcaf637e2f1899ae0df6c23e617906",
"icons/Icon-maskable-512.png": "fb7ed9188f29f90efd70f58fc79c04a5",
"index.html": "df7679ec93e5dbe4d02edf2ba9c96e01",
"/": "df7679ec93e5dbe4d02edf2ba9c96e01",
"main.dart.js": "a7eed094b67b1e984ec9c1fa2ba832b4",
"manifest.json": "379084a0ebeb2b81080945a9c348b7f2",
"screenshots/desktop-dark.png": "720bc79e43d3e8987e38387c5bf7ba63",
"screenshots/mobile-dark.png": "07d885e1116e9936e6533f4a7669b060",
"version.json": "bc9199f236f0da6c8733d8e61929f015"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
