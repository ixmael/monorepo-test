module.exports = [
  {
    id: 'ping', // id of the route
    url: '/', // url in express format
    method: 'GET', // HTTP method
    variants: [
      {
        id: 'success', // id of the variant
        response: {
          status: 200, // status to send
        },
      },
    ],
  },
];
