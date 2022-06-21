import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteAddress, fetchAddress, insertAddress } from "../../db";


const initialState = {
  value: {
    locations: [],
    rowId: "",
    loading: false,
    error: null,
    responseDb: "",
  },
};

export const addLocationDb = createAsyncThunk(
  "location/addToDb",
  async (location, asyncThunk) => {
    try {
      const result = await insertAddress(
        location.title,
        location.id,
        location.picture,
        location.address
      );
      console.log("Add location db result:");
      console.log(result.insertId);
      return `El item con id: ${result.insertId} se guardó con éxito!`;
    } catch (error) {
      console.log(error.message);
      return asyncThunk.rejectWithValue("Error al grabar en db");
    }
  }
);

export const getLocations = createAsyncThunk(
  'location/getLocations',
  async(_, asyncThunk) => {
      try {
          const result = await fetchAddress()
          console.log("Resultado al traer los datos de la DB en el thunk");
          console.log(result);
          const data = result.rows._array
          return data
      } catch (error) {
          return asyncThunk.rejectWithValue("Error al traer los datos de la DB")
      }
  }
)

export const removeLocationDb = createAsyncThunk(
  'location/addToDb',
  async (location, asyncThunk) => {
      try {
          const result = await deleteAddress(
            location.id,
          )
          console.log("Remove location db result:");
          console.log(result);
          return `Item con id: ${location.id} borrado!`
      } catch (error) {
          console.log(error.message);
          return asyncThunk.rejectWithValue(`Error al borrar item con id: ${location.id}`)
      }
  }
)

const locationSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    addLocation: (state, { payload }) => {
      state.value.locations.push(payload);
    },
    removeLocation: (state, {payload}) => {
      state.value.locations = state.value.locations.filter(location => location.id !== payload.id)
  }
  },
  extraReducers: {
    [addLocationDb.pending]: (state) => {
      state.value.loading = true;
    },
    [addLocationDb.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.value.loading = false;
      state.value.error = null;
      // state.value.rowId = payload
    },
    [addLocationDb.rejected]: (state, { payload }) => {
      state.value.loading = false;
      state.value.error = payload;
    },
    [getLocations.pending]: (state) => {
      state.value.loading = true;
    },
    [getLocations.fulfilled]: (state, { payload }) => {
      state.value.loading = false;
      state.value.error = null;
      state.value.locations = payload;
    },
    [getLocations.rejected]: (state, { payload }) => {
      state.value.loading = false;
      state.value.error = payload;
    },
    [removeLocationDb.pending]: (state) => {
      state.value.loading = true;
    },
    [removeLocationDb.fulfilled]: (state, { payload }) => {
      state.value.loading = false;
      state.value.error = null;
      state.value.responseDb = payload;
    },
    [removeLocationDb.rejected]: (state, { payload }) => {
      state.value.loading = false;
      state.value.error = payload;
    },
  },
});

export const { addLocation, removeLocation} = locationSlice.actions;
export default locationSlice.reducer;
