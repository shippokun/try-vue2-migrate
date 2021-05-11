declare module "vue" {
  import { CompatVue } from "@vue/runtime-dom";
  const Vue: CompatVue;
  export default Vue;
}
