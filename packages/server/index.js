const express = require("express");
const cors = require("cors");
const merge = require("lodash.merge");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    // Allow follow-up middleware to override this CORS for options
    preflightContinue: true,
  })
);

const PORT = process.env.PORT || 9004;

app.get("/bundles", (req, res) => {
  const baseConfig = {
    "@single-spa/welcome":
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js",
    "@kampov/root-config":
      "//fwdays-mfe-showcase.vercel.app/kampov-root-config.js",
    "@kampov/header":
      "//fwdays-mfe-showcase-header.vercel.app/kampov-header.js",
    "@kampov/mfe1": "//fwdays-mfe-showcase-mfe1.vercel.app/kampov-mfe1.js",
    "@kampov/mfe2": "//fwdays-mfe-showcase-mfe2.vercel.app/kampov-mfe2.js",
  };

  if (req.query.overrides) {
    try {
      const overridesObj = JSON.parse(decodeURI(req.query.overrides));

      if (overridesObj.bundles) {
        res.json({
          imports: merge(baseConfig, overridesObj.bundles),
        });
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log("unable to parse overrides as a json");
    }
  }

  res.json({
    imports: merge(baseConfig, {}),
  });
});

app.get("/feature-toggles", (req, res) => {
  res.json({
    toggles: {
      newCardDesign: false,
    },
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server Listening on: http://localhost:${PORT}`);
});

module.exports = app;
