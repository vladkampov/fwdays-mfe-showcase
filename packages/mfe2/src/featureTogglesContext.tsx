import React, { useContext, createContext, useState, useEffect } from "react";
import merge from "lodash.merge";
const FeatureTogglesContext = createContext(null);

type FeatureTogglesConfig = {
  toggles: Record<string, boolean>;
};

function withOverrides(config) {
  const overridesStr = new URLSearchParams(window.location.search).get(
    "overrides"
  );

  if (overridesStr) {
    const overrides = JSON.parse(overridesStr);
    return merge(config, overrides);
  }
  return config;
}

export const FeatureTogglesProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [featureTogglesConfig, setFeatureTogglesConfig] =
    useState<FeatureTogglesConfig>({
      toggles: {},
    });

  useEffect(() => {
    fetch("//localhost:9004/feature-toggles")
      .then((res) => res.json())
      .then((config) => setFeatureTogglesConfig(withOverrides(config)));
  }, []);

  return (
    <FeatureTogglesContext.Provider value={featureTogglesConfig}>
      {children}
    </FeatureTogglesContext.Provider>
  );
};

export const useFeatureToggles = () => useContext(FeatureTogglesContext);
