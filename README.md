
### Feature Toggles

### Local development in the context of prod environment

Try running `yarn workspace @kampov/mfe2 start` and open `https://fwdays-mfe-showcase.vercel.app/?overrides={"bundles":{"@kampov/mfe2":"http://localhost:9003/kampov-mfe2.js"}}`

### Static Overrides

Try first with `http://localhost:9000/` and then with `http://localhost:9000/?overrides={"toggles":{"newCardDesign":true}}`

### You can mix them

Try running `yarn workspace @kampov/mfe2 start` and open `https://fwdays-mfe-showcase.vercel.app/?overrides={"bundles":{"@kampov/mfe2":"http://localhost:9003/kampov-mfe2.js"},"toggles":{"newCardDesign":true}}`