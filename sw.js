(function() {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js')

  // quit the process unless workbox loaded
  if (!workbox) return
  
  // Cache font stylesheet
  workbox.routing.registerRoute(
    '/css/fonts.css',
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'font-stylesheets',
    })
  )
  
  // Cache font files
  workbox.routing.registerRoute(
    /.*\.woff2?$/,
    workbox.strategies.cacheFirst({
      cacheName: 'web-fonts',
    })
  )

  // Precache font files (.woff and woff2)
  workbox.precaching.precacheAndRoute([
  {
    "url": "fonts/shirokuma.0.custom-subset.woff2",
    "revision": "57ed11f4f7ecd4c36d1f4e424943cd8d"
  },
  {
    "url": "fonts/shirokuma.1.custom-subset.woff2",
    "revision": "57ed11f4f7ecd4c36d1f4e424943cd8d"
  },
  {
    "url": "fonts/shirokuma.10.custom-subset.woff2",
    "revision": "2dd4a8f6b7849872618198d49f4325be"
  },
  {
    "url": "fonts/shirokuma.100.custom-subset.woff2",
    "revision": "8806c1f2046725584164f19c1fce647c"
  },
  {
    "url": "fonts/shirokuma.101.custom-subset.woff2",
    "revision": "86c21a246c7fba95ee635598933484eb"
  },
  {
    "url": "fonts/shirokuma.102.custom-subset.woff2",
    "revision": "505196ff438d9a47991bc232caa150a5"
  },
  {
    "url": "fonts/shirokuma.103.custom-subset.woff2",
    "revision": "294ad20cee0d822649f2ef8d00c47569"
  },
  {
    "url": "fonts/shirokuma.104.custom-subset.woff2",
    "revision": "4237d3efad61fbb5688802602b88137f"
  },
  {
    "url": "fonts/shirokuma.105.custom-subset.woff2",
    "revision": "e463eaade4091ca82fbc6f18bd8e983b"
  },
  {
    "url": "fonts/shirokuma.106.custom-subset.woff2",
    "revision": "cf29a03de0a0275dc1a5397110127d92"
  },
  {
    "url": "fonts/shirokuma.107.custom-subset.woff2",
    "revision": "044877bc847ba9909802847aac115d2f"
  },
  {
    "url": "fonts/shirokuma.108.custom-subset.woff2",
    "revision": "3e698eb0631f207cab43e1c792e05391"
  },
  {
    "url": "fonts/shirokuma.109.custom-subset.woff2",
    "revision": "68c44a3bb5f294124ddac6bef9bbf8ec"
  },
  {
    "url": "fonts/shirokuma.11.custom-subset.woff2",
    "revision": "070c08f01977ea4955c303cb90c1599f"
  },
  {
    "url": "fonts/shirokuma.110.custom-subset.woff2",
    "revision": "3c6f600f4a4acdddec2aa6ef9acd2313"
  },
  {
    "url": "fonts/shirokuma.111.custom-subset.woff2",
    "revision": "28133368d845036f69eed0dd9af79489"
  },
  {
    "url": "fonts/shirokuma.112.custom-subset.woff2",
    "revision": "b3ed81ba90a01a765a9bfd81f6166295"
  },
  {
    "url": "fonts/shirokuma.113.custom-subset.woff2",
    "revision": "cc7ae0b89b7a2c36e78923673c99a1b0"
  },
  {
    "url": "fonts/shirokuma.114.custom-subset.woff2",
    "revision": "0626a58a7e0db51cfb93879cf55088bf"
  },
  {
    "url": "fonts/shirokuma.115.custom-subset.woff2",
    "revision": "e76bfcaf624ff048e8b06c3280061112"
  },
  {
    "url": "fonts/shirokuma.116.custom-subset.woff2",
    "revision": "f4e0953bf1b5a24f595931d1cf26fef5"
  },
  {
    "url": "fonts/shirokuma.117.custom-subset.woff2",
    "revision": "a8a2677257554ff98309bb392f76e28c"
  },
  {
    "url": "fonts/shirokuma.118.custom-subset.woff2",
    "revision": "c4c6824218c31e8481c2662e3695e2c4"
  },
  {
    "url": "fonts/shirokuma.119.custom-subset.woff2",
    "revision": "612f430d41503237c1deb9cddfed3faf"
  },
  {
    "url": "fonts/shirokuma.12.custom-subset.woff2",
    "revision": "0244074bc6d7f72f95f03fbc0abe50db"
  },
  {
    "url": "fonts/shirokuma.13.custom-subset.woff2",
    "revision": "0d8fe7e0a2a37285e95d7fea04857ff2"
  },
  {
    "url": "fonts/shirokuma.14.custom-subset.woff2",
    "revision": "a004ae89d9f88b110047d179986cdcc9"
  },
  {
    "url": "fonts/shirokuma.15.custom-subset.woff2",
    "revision": "a6b1eb214152fa8742c0706425a0095b"
  },
  {
    "url": "fonts/shirokuma.16.custom-subset.woff2",
    "revision": "fd5b91368f025c8931e5bae1eddd8913"
  },
  {
    "url": "fonts/shirokuma.17.custom-subset.woff2",
    "revision": "75f14131b699dfbfbf408b6156022f06"
  },
  {
    "url": "fonts/shirokuma.18.custom-subset.woff2",
    "revision": "7235eb4af4a0acaf9562f45a3c7f46f0"
  },
  {
    "url": "fonts/shirokuma.19.custom-subset.woff2",
    "revision": "3c45c3c60180a84e52bc3c128068bd68"
  },
  {
    "url": "fonts/shirokuma.2.custom-subset.woff2",
    "revision": "57ed11f4f7ecd4c36d1f4e424943cd8d"
  },
  {
    "url": "fonts/shirokuma.20.custom-subset.woff2",
    "revision": "ac0f4204271c437209fb5b241abbb7a2"
  },
  {
    "url": "fonts/shirokuma.21.custom-subset.woff2",
    "revision": "5b0f25e4cc76b928b62d0d7ddbe3308c"
  },
  {
    "url": "fonts/shirokuma.22.custom-subset.woff2",
    "revision": "d0935f429b8883727a033af7e480f801"
  },
  {
    "url": "fonts/shirokuma.23.custom-subset.woff2",
    "revision": "8b055deeed07eb222f6f6200075db1e0"
  },
  {
    "url": "fonts/shirokuma.24.custom-subset.woff2",
    "revision": "1e4ca2918d5a95266b880b51ab643da9"
  },
  {
    "url": "fonts/shirokuma.25.custom-subset.woff2",
    "revision": "2c6e00fb07b17f8c40cf90f09b12f243"
  },
  {
    "url": "fonts/shirokuma.26.custom-subset.woff2",
    "revision": "c9a4968453f71425b59c2677862c14e2"
  },
  {
    "url": "fonts/shirokuma.27.custom-subset.woff2",
    "revision": "12469e1779ae2ed9721e47e244dccdfb"
  },
  {
    "url": "fonts/shirokuma.28.custom-subset.woff2",
    "revision": "87683a2ee4145d896b495d6f6739bff7"
  },
  {
    "url": "fonts/shirokuma.29.custom-subset.woff2",
    "revision": "469c8453f649510c5a51d8a369b90ca7"
  },
  {
    "url": "fonts/shirokuma.3.custom-subset.woff2",
    "revision": "45ab7ee925818a98725a78be09545f8c"
  },
  {
    "url": "fonts/shirokuma.30.custom-subset.woff2",
    "revision": "d6afa892e23522e1c4d2fde8be72ac5a"
  },
  {
    "url": "fonts/shirokuma.31.custom-subset.woff2",
    "revision": "df92cdc615158a125af391af66f70ef4"
  },
  {
    "url": "fonts/shirokuma.32.custom-subset.woff2",
    "revision": "33482b8b7002c33764ba75dd03e916c2"
  },
  {
    "url": "fonts/shirokuma.33.custom-subset.woff2",
    "revision": "424a54f0c410290f53b35466465e8eb3"
  },
  {
    "url": "fonts/shirokuma.34.custom-subset.woff2",
    "revision": "ff46a80f77553309e96821180f2d0594"
  },
  {
    "url": "fonts/shirokuma.35.custom-subset.woff2",
    "revision": "7117a656d07c203350ff93f5f3680b29"
  },
  {
    "url": "fonts/shirokuma.36.custom-subset.woff2",
    "revision": "857128159c813028d10f93efe12dd101"
  },
  {
    "url": "fonts/shirokuma.37.custom-subset.woff2",
    "revision": "bdda64498197b1ce7ed69ef2f4dea3b7"
  },
  {
    "url": "fonts/shirokuma.38.custom-subset.woff2",
    "revision": "ce55d4a9d529d63345c42bfd540e783c"
  },
  {
    "url": "fonts/shirokuma.39.custom-subset.woff2",
    "revision": "8873f934b71f7f8f0c22efbfddc471df"
  },
  {
    "url": "fonts/shirokuma.4.custom-subset.woff2",
    "revision": "57ed11f4f7ecd4c36d1f4e424943cd8d"
  },
  {
    "url": "fonts/shirokuma.40.custom-subset.woff2",
    "revision": "7c72a09655fe7db7a53f64df965d2cfb"
  },
  {
    "url": "fonts/shirokuma.41.custom-subset.woff2",
    "revision": "d01b8bcc13edf7fd226069b112cd1de4"
  },
  {
    "url": "fonts/shirokuma.42.custom-subset.woff2",
    "revision": "e954eaf54647d7c36e5f9040b5b1fb86"
  },
  {
    "url": "fonts/shirokuma.43.custom-subset.woff2",
    "revision": "9719e4e906be47cf4ba8b5f5f8ed7df3"
  },
  {
    "url": "fonts/shirokuma.44.custom-subset.woff2",
    "revision": "09e80cdfaa64c986beb91108effd6073"
  },
  {
    "url": "fonts/shirokuma.45.custom-subset.woff2",
    "revision": "67ba35649e9337c262cfb76c29e4f1aa"
  },
  {
    "url": "fonts/shirokuma.46.custom-subset.woff2",
    "revision": "c3034503a1e16ba4a7e2b0c726aa36de"
  },
  {
    "url": "fonts/shirokuma.47.custom-subset.woff2",
    "revision": "51620c5aed47d9e21967914e21f98f45"
  },
  {
    "url": "fonts/shirokuma.48.custom-subset.woff2",
    "revision": "79575030f08f1be79c928e5884620ae3"
  },
  {
    "url": "fonts/shirokuma.49.custom-subset.woff2",
    "revision": "a3111bf4843b426ee542504cb98d3733"
  },
  {
    "url": "fonts/shirokuma.5.custom-subset.woff2",
    "revision": "9deeff0b1ae475cbe58fedca70e61c72"
  },
  {
    "url": "fonts/shirokuma.50.custom-subset.woff2",
    "revision": "0b593797ea53e038e455b0a9edaa79dc"
  },
  {
    "url": "fonts/shirokuma.51.custom-subset.woff2",
    "revision": "57ed11f4f7ecd4c36d1f4e424943cd8d"
  },
  {
    "url": "fonts/shirokuma.52.custom-subset.woff2",
    "revision": "57ed11f4f7ecd4c36d1f4e424943cd8d"
  },
  {
    "url": "fonts/shirokuma.53.custom-subset.woff2",
    "revision": "57ed11f4f7ecd4c36d1f4e424943cd8d"
  },
  {
    "url": "fonts/shirokuma.54.custom-subset.woff2",
    "revision": "57ed11f4f7ecd4c36d1f4e424943cd8d"
  },
  {
    "url": "fonts/shirokuma.55.custom-subset.woff2",
    "revision": "89494601af7b66fb842e4fb88edadd49"
  },
  {
    "url": "fonts/shirokuma.56.custom-subset.woff2",
    "revision": "d61b661fad4250907c2dc86652efdcbd"
  },
  {
    "url": "fonts/shirokuma.57.custom-subset.woff2",
    "revision": "7afe0faf75dff828dc255518757eb21f"
  },
  {
    "url": "fonts/shirokuma.58.custom-subset.woff2",
    "revision": "2361bd6fe7cd6480155d0ed356451823"
  },
  {
    "url": "fonts/shirokuma.59.custom-subset.woff2",
    "revision": "33dfcd1405b06043dc3845a3c4c4f225"
  },
  {
    "url": "fonts/shirokuma.6.custom-subset.woff2",
    "revision": "3df6f19c7a65466b5429e100523dd3a7"
  },
  {
    "url": "fonts/shirokuma.60.custom-subset.woff2",
    "revision": "336906e6af2049f81f89065c84000401"
  },
  {
    "url": "fonts/shirokuma.61.custom-subset.woff2",
    "revision": "5ea8df8041470887ce7aa1ddc8524436"
  },
  {
    "url": "fonts/shirokuma.62.custom-subset.woff2",
    "revision": "4fbf4a6ba600647c7c9302129142e35a"
  },
  {
    "url": "fonts/shirokuma.63.custom-subset.woff2",
    "revision": "a25f0140d47730b6e3f2f3307731af08"
  },
  {
    "url": "fonts/shirokuma.64.custom-subset.woff2",
    "revision": "fd2600ff365ef86934d9e0c91939afb0"
  },
  {
    "url": "fonts/shirokuma.65.custom-subset.woff2",
    "revision": "50fa81114b94d22d95241b4ae0cbf3af"
  },
  {
    "url": "fonts/shirokuma.66.custom-subset.woff2",
    "revision": "3a09630506c3075f7ce839c9654661c3"
  },
  {
    "url": "fonts/shirokuma.67.custom-subset.woff2",
    "revision": "bb033bccf73de8c41bb377e0148414d9"
  },
  {
    "url": "fonts/shirokuma.68.custom-subset.woff2",
    "revision": "96de3cf68b9b571eaf401ed960bb14ed"
  },
  {
    "url": "fonts/shirokuma.69.custom-subset.woff2",
    "revision": "d877070e952acc79b8395e4c2df91ca7"
  },
  {
    "url": "fonts/shirokuma.7.custom-subset.woff2",
    "revision": "aa22021fcf6a092e23f167a80600c479"
  },
  {
    "url": "fonts/shirokuma.70.custom-subset.woff2",
    "revision": "c746578bbbe4d6f743f59a183b123c64"
  },
  {
    "url": "fonts/shirokuma.71.custom-subset.woff2",
    "revision": "1754e640746baed077bc71dbf96a21f8"
  },
  {
    "url": "fonts/shirokuma.72.custom-subset.woff2",
    "revision": "dba61358122837e63fa482063c931526"
  },
  {
    "url": "fonts/shirokuma.73.custom-subset.woff2",
    "revision": "2c3d1774fc4da4761717f64c5a8c613f"
  },
  {
    "url": "fonts/shirokuma.74.custom-subset.woff2",
    "revision": "a5c59ca8943f36b805bd992e5ca885f3"
  },
  {
    "url": "fonts/shirokuma.75.custom-subset.woff2",
    "revision": "216e15664b0e682f041c4ada740cc000"
  },
  {
    "url": "fonts/shirokuma.76.custom-subset.woff2",
    "revision": "22fe687790726ba4974fbec78a1ec557"
  },
  {
    "url": "fonts/shirokuma.77.custom-subset.woff2",
    "revision": "e51d51fcd9360ca0a83748b7b19f4aa5"
  },
  {
    "url": "fonts/shirokuma.78.custom-subset.woff2",
    "revision": "681f28e6d833cd777af54e53e992a976"
  },
  {
    "url": "fonts/shirokuma.79.custom-subset.woff2",
    "revision": "c3ef08e54636df054f49a165861f3c3f"
  },
  {
    "url": "fonts/shirokuma.8.custom-subset.woff2",
    "revision": "4943187df908851377354d54032c09cd"
  },
  {
    "url": "fonts/shirokuma.80.custom-subset.woff2",
    "revision": "d6c5e0d698ad378387e80fce8d6ced59"
  },
  {
    "url": "fonts/shirokuma.81.custom-subset.woff2",
    "revision": "9edf634ba4852574d3b07a9b6f0c130e"
  },
  {
    "url": "fonts/shirokuma.82.custom-subset.woff2",
    "revision": "421fe7f7f1e7c0008bc3c7840efb2c84"
  },
  {
    "url": "fonts/shirokuma.83.custom-subset.woff2",
    "revision": "220601ad9d6975356b42f674ee66e512"
  },
  {
    "url": "fonts/shirokuma.84.custom-subset.woff2",
    "revision": "b7470d8e4a310564e9f790baa4c956b7"
  },
  {
    "url": "fonts/shirokuma.85.custom-subset.woff2",
    "revision": "bb8e41ea4e4833d0738f05a0addd8759"
  },
  {
    "url": "fonts/shirokuma.86.custom-subset.woff2",
    "revision": "096f761b3d738775c9709da35e04b3fd"
  },
  {
    "url": "fonts/shirokuma.87.custom-subset.woff2",
    "revision": "5d3b6c8aa97be175c3bd7937ccf59a73"
  },
  {
    "url": "fonts/shirokuma.88.custom-subset.woff2",
    "revision": "7df08470f1ff56aa426e86e97d53b57a"
  },
  {
    "url": "fonts/shirokuma.89.custom-subset.woff2",
    "revision": "647c399cbdc22bd2de27534afc852ae4"
  },
  {
    "url": "fonts/shirokuma.9.custom-subset.woff2",
    "revision": "4caf6749717b00a0759f855b7c0f1c2d"
  },
  {
    "url": "fonts/shirokuma.90.custom-subset.woff2",
    "revision": "88e094fa70e56fa8df9147e8d5d6d3ca"
  },
  {
    "url": "fonts/shirokuma.91.custom-subset.woff2",
    "revision": "7ba5651d28b6c86a74ceb9d9f2c59144"
  },
  {
    "url": "fonts/shirokuma.92.custom-subset.woff2",
    "revision": "c8376a95a6b35d7dd4f346659228feed"
  },
  {
    "url": "fonts/shirokuma.93.custom-subset.woff2",
    "revision": "71f22a957dd1daa701849b6cdacb9a72"
  },
  {
    "url": "fonts/shirokuma.94.custom-subset.woff2",
    "revision": "06818728ff1bbac71a7d640cbd3d3d20"
  },
  {
    "url": "fonts/shirokuma.95.custom-subset.woff2",
    "revision": "6c0754755291c7fa5b1b7ce50be1c349"
  },
  {
    "url": "fonts/shirokuma.96.custom-subset.woff2",
    "revision": "28fa1ce5e118c03f2be55ac5f59e818c"
  },
  {
    "url": "fonts/shirokuma.97.custom-subset.woff2",
    "revision": "0bdf6234fe8e96d764b9f9f6a976fe3f"
  },
  {
    "url": "fonts/shirokuma.98.custom-subset.woff2",
    "revision": "c0f3c29542ac8fcb40841dd56e52e135"
  },
  {
    "url": "fonts/shirokuma.99.custom-subset.woff2",
    "revision": "61345bac0eb8771cffd73d8dfada0412"
  }
]);

})()