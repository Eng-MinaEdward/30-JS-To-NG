// module.exports =
//   {
//     optimization: {
//       splitChunks: {
//         chunks: 'all',
//         cacheGroups: {
//           vendors: {
//             name: 'chunk-vendors',
//             test: /[\\/]node_modules[\\/]/,
//             minSize: 90000,
//             maxSize: 90000,
//             minChunks: 1,
//             priority: -20,
//             chunks: 'all'
//           },
//           // default Vue JS common chunk
//           common: {
//             name: 'chunk-common',
//             minChunks: 2,
//             priority: -30,
//             chunks: 'initial',
//             reuseExistingChunk: true
//           }
//         }
//       }
//     }
//   }


module.exports = function (base) {
  return {
    ...base,
    optimization: {
      ...base.optimization,
      splitChunks: {
        ...base.optimization.splitChunks,
        cacheGroups: {
          ...base.optimization.splitChunks.cacheGroups,
          vendors: {
            name: 'main-chunk',
            maxSize: 100000,
            chunks: 'all',
            priority: -20,

            //test: /[\\/]node_modules[\\/]/,
            // minSize: 90000,
            // minChunks: 1,

          },
        }
      }
    }
  }
}
// module.exports = {
//   //...
//   optimization: {
//     splitChunks: {
//       chunks: 'async',
//       minSize: 20000,
//
//       maxSize: 100000,
//
//       minRemainingSize: 0,
//       minChunks: 3,
//       maxAsyncRequests: 30,
//       maxInitialRequests: 30,
//       enforceSizeThreshold: 50000,
//       cacheGroups: {
//         defaultVendors: {
//           test: /[\\/]node_modules[\\/]/,
//           priority: -10,
//           reuseExistingChunk: true,
//         },
//         default: {
//           minChunks: 3,
//           priority: -20,
//           reuseExistingChunk: true,
//         },
//       },
//     },
//   },
// };
