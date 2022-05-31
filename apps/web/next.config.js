const withTM = require("next-transpile-modules")(["ui", "three-asset", "three", "@react-three/drei", "@react-three/fiber"]);

module.exports = withTM({
  reactStrictMode: true,
});
