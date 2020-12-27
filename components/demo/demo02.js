function Demo02(app) {
  app.component("demo02-component", {
    /*html*/
    template: `
      <div>
      <h1>Component Demo02</h1>
      <br>
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
