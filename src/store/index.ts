import Vue from "vue";
import Vuex, {Store} from "vuex";
import ModuleUsers from './modules/ModuleUsers';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ModuleUsers
  }
});
