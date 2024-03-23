import { isDevMode } from "@angular/core";
import { environmentDev } from "./environment.dev";
import { environmentProd } from "./environment.prod";

const activeEnvironment = isDevMode() ? environmentDev : environmentProd;

export const environment = {
  production: activeEnvironment.production,
  name: activeEnvironment.name,
  domain: activeEnvironment.domain,
  api: activeEnvironment.api,
  baseUrl: activeEnvironment.domain + environmentDev.api,
  language: activeEnvironment.language
};
