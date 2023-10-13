import express from "express";
import cors from "cors";
import merge from "lodash.merge";

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
  const overridesStr = new URLSearchParams(req.se).get("overrides");

  if (overridesStr) {
    const overrides = JSON.parse(overridesStr);
    return merge(config, overrides);
  }

  if (req.query.overrides) {
    try {
      const overridesObj = JSON.parse(req.query.overrides);

      if (overridesObj.bundles) {
        res.json(JSON.stringify(overridesObj.bundles));
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log("unable to parse overrides as a json");
    }
  }

  res.json({
    imports: {},
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
