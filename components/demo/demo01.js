function Demo01Component(app) {
  app.component("demo01-component", {
    /*html*/
    template: `
    <div>
      <h1>Component Demo01</h1>
      <br>
      Count(Demo01): {{ dataCount }}
      <br>
      <button type="button" 
        v-on:click="decrease()">
        Decrease--
      </button>
    </div> 
    `,
    setup() {
      const { computed } = Vue;
      const dataCount = computed(() => _storeDemo.count);
      const decrease = () => _storeDemo.count--;
      return { dataCount, decrease };
    },
  });
}