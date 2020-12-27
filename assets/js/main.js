function CreateApp() {
  const app = Vue.createApp({});
  return app;
}
function Mount(app) {
  app.mount("#app");
}
