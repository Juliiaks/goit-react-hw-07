import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { number } from "yup";

// import { fetchingInProgress, fetchingSuccess, fetchingError } from "./contactsSlice";

axios.defaults.baseURL = "https://6676ab04145714a1bd7270a3.mockapi.io"

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            console.log(response);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
        
    }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({name, number}, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number});
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
      return contactId;
        } catch (error) {
             return thunkAPI.rejectWithValue(error.message)
        }
    }

)




// export const  fetchContscts = () => async (dispatch) => {
//     try {
//         dispatch(fetchingInProgress());
//         const response = await axios.get("/contacts");
//         dispatch(fetchingSuccess(response.data));
//     } catch (error) {
//         dispatch(fetchingError(error.message));
//     }
// }