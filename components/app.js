function App(app) {
  app.component("app-component", {
    /*html*/
    template: `
    <div>
      Count (App): {{ dataCount }}
      <br>
      <button type="button" v-on:click="increase()">Count++</button>
    </div> 
    `,
    setup() {
      const { computed } = Vue;
      const dataCount = computed(() => store.count);
      const increase = () => store.count++;
      return { dataCount, increase };
    },
  });
}
