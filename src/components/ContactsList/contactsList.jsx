import { useDispatch, useSelector } from "react-redux";
import Contact from "../contact/contact";
import css from './contactsList.module.css'
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactsList() {
    const contacts = useSelector(selectContacts)
    const filter = useSelector(selectNameFilter)

     const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
    
    return (
        <ul className={css.list}>
            {visibleContacts.map((contact) => (
                <li key={contact.id} className={css.listItem}>
                    <Contact
               contact={contact}
                        id={contact.id}
        
                /></li>
           ))} 
        </ul>
    )
}