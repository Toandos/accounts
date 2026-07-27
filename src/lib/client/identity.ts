import { Configuration, FrontendApi } from "@ory/client"

export const kratos = new FrontendApi(
    new Configuration({
        basePath: "https://accounts.toando.de/api",
        baseOptions: {
            withCredentials: true
        }
    }), 
);