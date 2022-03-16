/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: "file-loader",
      },
    });

    return config;
  },
};
// module.exports = {
//   webpack5: true,
//   webpack: (config) => {
//     config.resolve.fallback = { tls: false, fs:false, net:false };

//     return config;
//   },
// };

// odule.exports = withCSS(withSass({
//   webpack (config, options) {
//     config.module.rules.push({
//       test: /\.(glb|gltf)$/,
//       use: {
//         loader: 'file-loader',
//       }
//     })
//     return config
//   }
// }))
