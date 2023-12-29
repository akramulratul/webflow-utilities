const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    ["trackingAmplitudeClick"]:
      "./src/TrackingSystem/amplitudeTrackingSystem.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: "[name]",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true,
    clean: true,
  },
};
