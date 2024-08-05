import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BuscaState {
  query: string;
  selectIsland: string;
  selectPeople: string;
}

const initialState: BuscaState = {
  query: "",
  selectIsland: "",
  selectPeople: "",
};

export const buscaSlice = createSlice({
  name: "busca",
  initialState,
  reducers: {
    mudarBusca: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    mudarResort: (state, action: PayloadAction<string>) => {
      state.selectIsland = action.payload;
    },
    mudarCapacidade: (state, action: PayloadAction<string>) => {
      state.selectPeople = action.payload;
    },
  },
});

export const { mudarBusca, mudarResort, mudarCapacidade } = buscaSlice.actions;
export default buscaSlice.reducer;
