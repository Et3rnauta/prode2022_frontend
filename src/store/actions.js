import DISPATCH_GET_INITIAL_DATA from './actions/DISPATCH_GET_INITIAL_DATA';
import CREAR_GRUPO from './actions/CREAR_GRUPO';
import CREAR_EQUIPO from './actions/CREAR_EQUIPO';
import MODIFICAR_EQUIPO from './actions/MODIFICAR_EQUIPO';
import CREAR_PARTIDO_GRUPO from './actions/CREAR_PARTIDO_GRUPO';

export default {
  DISPATCH_GET_INITIAL_DATA,
  CREAR_GRUPO,
  CREAR_EQUIPO,
  MODIFICAR_EQUIPO,
  CREAR_PARTIDO_GRUPO,

  ABRIR_ERROR: ({ commit }, mensaje) => {
    commit('SET_SHOW_ERROR', true);
    commit('SET_MSJ_ERROR', mensaje);
  },
  CERRAR_ERROR: ({ commit }) => (commit('SET_SHOW_ERROR', false)),
}