import { addOrder } from '@/api';

const store = {
  mutations: {
    addOrder(state, { order }) {
      state.push(order);
    },
    updateOrderStatus(state, order) {
      const orderIndex = state.findIndex(o => o.id === order.id);
      state[orderIndex].status = order.status; // eslint-disable-line
    },
  },
  actions: {
    async addOrder({ commit }, _order) {
      const order = await addOrder(_order);

      commit({
        type: 'addOrder',
        order,
      });
    },
  },
};

export default store;
