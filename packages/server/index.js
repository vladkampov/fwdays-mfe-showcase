import express from "express";
import cors from "cors";

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

app.get("/feature-toggles", (req, res) => {
  res.json({
    toggles: {
      newCardDesign: false,
    },
    bundles: {
      header: "//localhost:9001/kampov-header.js",
      mfe1: "//localhost:9002/kampov-mfe1.js",
      mfe2: "//localhost:9003/kampov-mfe2.js",
      "root-config": "//localhost:9000/kampov-root-config.js",
    },
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server Listening on: http://localhost:${PORT}`);
});
