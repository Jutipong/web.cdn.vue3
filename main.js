function CreateApp() {
  const app = Vue.createApp({
    data() {
      return { count: 0 };
    },
  });
  return app;
}
function Mount(app) {
  app.mount("#app");
}
