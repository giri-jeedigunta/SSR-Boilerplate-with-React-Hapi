import reactHandler from './reactHandler';
export default [
  // Static Files
  {
    path: "/{param*}",
    method: "GET",
    config: {
      handler: {
        directory: {
          path: 'dist'
        }
      }
    }
  },

  // Default Route
  {
    method: "GET",
    path: "/",
    handler: reactHandler
  },
  {
    method: "GET",
    path: "/test",
    handler: reactHandler
  },
  {
    method: "GET",
    path: "/todo",
    handler: reactHandler
  }
];
