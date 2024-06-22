import { createSlice, nanoid } from "@reduxjs/toolkit"
import { number } from "yup";
import { addContact, deleteContact, fetchContacts } from "./operations";
import { createSelector } from "@reduxjs/toolkit";


// const initialContacts = {
//     items: [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12"},
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
// ]}

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};


const contactSlice = createSlice(
    {
        name: "contacts",
        initialState: {
            items: [],
            isLoading: false,
            error: null
        },
        extraReducers: builder => {
            builder
                .addCase(fetchContacts.pending, handlePending)
                .addCase(fetchContacts.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.error = null;
                    state.items = action.payload;
                })
                .addCase(fetchContacts.rejected, handleRejected)
                .addCase(addContact.pending, handlePending)
                .addCase(addContact.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.error = null;
                    state.items.push(action.payload);
                })
                .addCase(addContact.rejected, handleRejected)
                .addCase(deleteContact.pending, handlePending)
                .addCase(deleteContact.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.error = null;
                    state.items = state.items.filter(contact => contact.id !== action.payload);
                })
                .addCase(deleteContact.rejected, handleRejected);
           
            // deleteContact(state, action) {
            //     state.items = state.items.filter(contact => contact.id !== action.payload);
            // }
        }
    });

export const getContacts = (state) => state.contacts.items;
export const getIsLoading = (state) => state.contacts.isLoading;
export const getError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [getContacts, (state) => state.filters.name],
  (contacts, filterName) => {
    if (!filterName) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }
);
// export const { fetchingInProgress, fetchingSuccess, fetchingError } = contactSlice.actions;
// export const selectContacts = state => state.contacts.items;
export const contactsReducer = contactSlice.reducer;


// addContacts: {
            //     reducer(state, action) {
            //         state.items.push(action.payload)
            //     },
            //     prepare(name, number) {
            //         return {
            //             payload: {
            //                 name,
            //                 number,
            //                 id: nanoid(),
            //                 // completed: false,
            //             },
            //         };
            //     },
            // },