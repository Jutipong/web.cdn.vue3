function Layout(app) {
    app.component("demo01-component", {
      /*html*/
      template: `
      <div>
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
        const dataCount = computed(() => store.count);
        const decrease = () => store.count--;
        return { dataCount, decrease };
      },
    });
  }