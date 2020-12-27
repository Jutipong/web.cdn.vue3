const _html = /*html*/ `
    <div>
        <h1>App Component</h1>
        Count: {{ dataCount }}
        <hr>
        <demo01-component></demo01-component>
        <hr>
        <demo02-component></demo02-component>
        <hr>
    </div>
`;

function App(app) {
  app.component("app-component", {
    template: _html,
    setup() {
      const { computed } = Vue;
      const dataCount = computed(() => store.count);

      return { dataCount };
    },
  });
}
