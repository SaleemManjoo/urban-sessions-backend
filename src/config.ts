require('dotenv').config()

export const Config = {
    apiSettings: {
        port: process.env.PORT || 3001,
        baseUri: process.env.BASE_URI || "/",
    },
};