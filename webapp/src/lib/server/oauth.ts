import { Configuration, OAuth2Api } from "@ory/client";

export const hydraAdmin = new OAuth2Api(
    new Configuration({
        basePath: "http://hydra:4445"
    })
)