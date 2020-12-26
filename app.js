function App(app) {
  app.component("app-component", {
    /*html*/
    template: `
    <div>
      Count (App): {{ total }}
      <br>
      <button type="button" v-on:click="Count()">Count++</button>
    </div> 
    `,
    props: ["modelValue"],
    emits: ["update:modelValue"],
    setup(prop, { emit }) {
      const { ref } = Vue;
      const { modelValue } = prop;

      const total = ref(0);
      total.value = modelValue || 0;

      const Count = () => {
        total.value++;
        emit("update:modelValue", total);
      };

      return { Count, total };
    },
  });
}
