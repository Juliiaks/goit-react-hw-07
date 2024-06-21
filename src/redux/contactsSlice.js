import { createSlice, nanoid } from "@reduxjs/toolkit"
import { number } from "yup";

const initialContacts = {
    items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12"},
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
]}

const contactSlice = createSlice(
    {
        name: "contacts",
        initialState: initialContacts,
        reducers: {
            addContacts: {
                reducer(state, action) {
                    state.items.push(action.payload)
                },
                prepare(name, number) {
                    return {
                        payload: {
                            name,
                            number,
                            id: nanoid(),
                            // completed: false,
                        },
                    };
                },
            },
            deleteContact(state, action) {
                state.items = state.items.filter(contact => contact.id !== action.payload);
            }
        }
    });

export const { addContacts, deleteContact } = contactSlice.actions;
export const selectContacts = state => state.contacts.items;
export const contactsReducer = contactSlice.reducer;