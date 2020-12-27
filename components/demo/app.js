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
      const dataCount = computed(() => _storeDemo.count);
      return { dataCount };
    },
  });
}

function jsList() {
  return ["../components/demo/demo01.js", "../components/demo/demo02.js"];
}
