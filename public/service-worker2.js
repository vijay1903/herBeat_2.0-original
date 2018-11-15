/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [
  ['/auth/login'],
  ['/auth/register'],
  ['/auth/new_password'],
  ['/auth/reset_password'],
  ['/home#'],
  ['/home#/statistics'],
  ['/home#/sentMessages'],["/css/jquery.datetimepicker.min.css","45ba3fa7fdd6910d9dfcbd6bacc1ce22"],["/css/sb-admin - Copy.css","dfc1d1e0d72c6b7a0d19fee2c5686363"],["/css/sb-admin.css","dfc1d1e0d72c6b7a0d19fee2c5686363"],["/css/sb-admin.min.css","d29741b3e17259833e7b62fdea9abc68"],["/css/signin.css","e0a23a539065df33481caf76e27e42c3"],["/gulpfile.js","be30202d70d51ecce292a9cf15e7a15c"],["/js/app.js","0fa51e352c54cc33097084c45d3a0651"],["/js/datepair.min.js","995a9e4c732142f359e6ebd3b1be419f"],["/js/jquery.datepair.min.js","d5d6ee8cf2121eb7fa61356e5636095f"],["/js/responsive-paginate.js","0288a6d1fe1ceb9086912b99b800b165"],["/js/sb-admin-charts.js","73ad9a3d4113624efe225df7c476aa63"],["/js/sb-admin-charts.min.js","ea2647affa70199df25056695338e326"],["/js/sb-admin-datatables.js","a517b95a6e62fa8b3759d0baeb748ce7"],["/js/sb-admin-datatables.min.js","fdb45f5bf073c12c0b451eb0f79e6dc0"],["/js/sb-admin.js","930989d155d865b3dfa4d5b5e3c144c1"],["/js/sb-admin.min.js","4ec8e80afa3e08f288b141f62cdc764d"],["/js/sw.js","f47b41743d6a738612f0069ef26e0999"],["/manifest.json","db6e8b955fa4fb94235650211742d2ca"],["/service-worker.js","cf7b0212275168c7afb7612fbdd8f1d6"],["/vendor/angular-chart/angular-chart.min.js","c74c01e361d0fb68493afdce996e6c6b"],["/vendor/bootstrap/css/bootstrap-grid.css","af140c1b8accf71a5efb4750588039f8"],["/vendor/bootstrap/css/bootstrap-grid.min.css","c4e58fc63a4a243bd806a5cec941cf5b"],["/vendor/bootstrap/css/bootstrap-reboot.css","a3b54592a68baf9a041efa4e8139f52d"],["/vendor/bootstrap/css/bootstrap-reboot.min.css","fa64b9a8e65118bc480f4e8ad4001813"],["/vendor/bootstrap/css/bootstrap.css","8fa473e525b0210e422e4e400a530260"],["/vendor/bootstrap/css/bootstrap.min.css","6d418e5e96f0d9e04ea93d18d90500cd"],["/vendor/bootstrap/js/bootstrap.bundle.js","01f8997175530686aab6492d44a079a2"],["/vendor/bootstrap/js/bootstrap.bundle.min.js","b02fa47944a6cec4a176f3478125b16e"],["/vendor/bootstrap/js/bootstrap.js","bcf00b0344bd1d624badda30fe9895d6"],["/vendor/bootstrap/js/bootstrap.min.js","fb975a54300458089e4609e8bee7e814"],["/vendor/chart.js/Chart.bundle.js","47ca18f9d70d5451ecefe79efdc9ae49"],["/vendor/chart.js/Chart.bundle.min.js","23b8d1af5b2cf45a40b06362d8f1a9a0"],["/vendor/chart.js/Chart.js","5dc0c0d8f17689755931a8e9ad2f0936"],["/vendor/chart.js/Chart.min.js","82a4a9cf9afb562305b2134f929a44ac"],["/vendor/datatables/dataTables.bootstrap4.css","9ef17e5fe8b9f61d9e682c4001dfe59d"],["/vendor/datatables/dataTables.bootstrap4.js","9914a06d7df80e0d80a76ebc7113ac64"],["/vendor/datatables/jquery.dataTables.js","83fcdba04ae729daa09ff83d2b4a365a"],["/vendor/font-awesome/css/font-awesome.css","4bb3dd721c4652feee0953261d329710"],["/vendor/font-awesome/css/font-awesome.min.css","a0e784c4ca94c271b0338dfb02055be6"],["/vendor/font-awesome/fonts/FontAwesome.otf","0d2717cd5d853e5c765ca032dfd41a4d"],["/vendor/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/vendor/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/vendor/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/vendor/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/vendor/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/vendor/font-awesome/less/animated.less","7fec23ef95e17ff623af5dd5db0fc87d"],["/vendor/font-awesome/less/bordered-pulled.less","1f57858ac2a7ab59b01088c778f5fb0a"],["/vendor/font-awesome/less/core.less","da355b2c884a067eedd979b445968147"],["/vendor/font-awesome/less/fixed-width.less","6799c9cf7edf54b7432cca85854b0abf"],["/vendor/font-awesome/less/font-awesome.less","62ab0957ccd3369ed07a6d7241e7b9c1"],["/vendor/font-awesome/less/icons.less","ddaa02ea18934d4e03c9978f13311d5e"],["/vendor/font-awesome/less/larger.less","f588164c1a95535137186bbdb0d236c8"],["/vendor/font-awesome/less/list.less","abcbffd56677821190cf4dc72f660dd9"],["/vendor/font-awesome/less/mixins.less","5b203b320a03575de5f369cf49b1e7c2"],["/vendor/font-awesome/less/path.less","fc4e5dec2b323ba7f687b0414a6faecd"],["/vendor/font-awesome/less/rotated-flipped.less","2088e18f446fcf2fe91e5293fc7f2847"],["/vendor/font-awesome/less/screen-reader.less","79f38eb1f3eea913308f49ab5cd663bf"],["/vendor/font-awesome/less/stacked.less","8b7e28e004c785a0a1a73afde547b9e7"],["/vendor/font-awesome/less/variables.less","62803119d3ed114705a50717a53e2639"],["/vendor/font-awesome/scss/_animated.scss","79db4428659752f59630c4388bbaa174"],["/vendor/font-awesome/scss/_bordered-pulled.scss","6e194951ee06dd4cde6f94ed2ec86e47"],["/vendor/font-awesome/scss/_core.scss","d4d62bafcfb00eb1b208acbf895a95a3"],["/vendor/font-awesome/scss/_fixed-width.scss","e6fac8be09e2d3dc38fe9248b2eb0472"],["/vendor/font-awesome/scss/_icons.scss","e624b0b5cfd7ac3fcb4eefab15f983f6"],["/vendor/font-awesome/scss/_larger.scss","8b00a4d732107fc1844ea18314c3cff9"],["/vendor/font-awesome/scss/_list.scss","c33b069275c5877a4b3f144684664bf5"],["/vendor/font-awesome/scss/_mixins.scss","f07164e3950c5dac464e3f5f9e14858d"],["/vendor/font-awesome/scss/_path.scss","123f2994215b526902be3fa0596c8d13"],["/vendor/font-awesome/scss/_rotated-flipped.scss","9a3f214edda562bf122802da5c686a12"],["/vendor/font-awesome/scss/_screen-reader.scss","b4b497bdd83f580fa3942390763cc270"],["/vendor/font-awesome/scss/_stacked.scss","638e8ae84e80a3428e9446578a7ed6a0"],["/vendor/font-awesome/scss/_variables.scss","547c9f94a31ced29cbc7f029d700a639"],["/vendor/font-awesome/scss/font-awesome.scss","bc5096695c4092d06d77da5329254590"],["/vendor/jquery-easing/jquery.easing.compatibility.js","7ebc8be9e9a2f28ea50048706bffa6a1"],["/vendor/jquery-easing/jquery.easing.js","a641af63b0070328c337175a82f4bf2b"],["/vendor/jquery-easing/jquery.easing.min.js","e2d41e5c8fed838d9014fea53d45ce75"],["/vendor/jquery/jquery.js","a5a8ab0a7c815e296c5421f9eea326db"],["/vendor/jquery/jquery.min.js","473957cfb255a781b42cb2af51d54a3b"],["/views/index.html","0a84a27799015ff943b2895976b3d15a"],["/views/login.html","163b612f220d0e24bb03989d69fb1066"],["/views/partial/dashboard.html","4866dce04eb61776f398ec31557302e8"],["/views/partial/sentMessages.html","47262f020538e252955a0f496de42223"],["/views/partial/statistics.html","038bd511274c1d4b4006c766e0e122e3"],["/views/register.html","7265206b58732d85d883a15217a4703a"],["/views/resetPassword.html","174bbea4e162afaaf160d4384b682735"],["/views/verifyEmail.html","713f7b0a58bef9090889e8a79a42f458"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/auth/login';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







