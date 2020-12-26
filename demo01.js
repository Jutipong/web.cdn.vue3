function Demo01(app) {
  app.component("demo01-component", {
    /*html*/
    template: `
    <div>
      Count(Demo01): {{total}}
      <br>
      <button type="button" 
        v-on:click="Count()">
        Count++
      </button>
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
        debugger
        total.value++;
        emit("update:modelValue", total);
      };

      return { Count, total };
    },
  });
}
