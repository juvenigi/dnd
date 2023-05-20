export interface Environment {
  gapi: {
    authUri: string,
    tokenUri: string,
    clientId: string,
    clientSecret: string
  },
  ghPages: {
    baseHref: string
  }
}
