import { configureStore } from "@reduxjs/toolkit";
import { villasSlice } from "./reducers/itens";
import { buscaSlice } from "./reducers/busca";

export const store = configureStore({
  reducer: {
    villas: villasSlice.reducer,
    busca: buscaSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
