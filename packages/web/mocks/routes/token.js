const FAKE_FINGERPRINT = {
  "bayonet_id":"fake_bayonet_id",
  "token":"fake_token_id"
};

module.exports = [
  {
    id: 'token', // id of the route
    url: '/v3/token', // url in express format
    method: 'GET', // HTTP method
    variants: [
      {
        id: 'success', // id of the variant
        response: {
          status: 200, // status to send
          body: FAKE_FINGERPRINT, // body to send
        },
      },
      {
        id: 'error', // id of the variant
        response: {
          status: 400, // status to send
          body: {
            // body to send
            message: 'Error',
          },
        },
      },
    ],
  },
];
