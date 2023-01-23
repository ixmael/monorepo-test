const FAKE_RESPONSE = {
  "message": "updated",
};

module.exports = [
  {
    id: 'refresh', // id of the route
    url: '/v3/refresh/:token', // url in express format
    method: 'POST', // HTTP method
    variants: [
      {
        id: 'success', // id of the variant
        response: {
          status: 200, // status to send
          body: FAKE_RESPONSE, // body to send
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
