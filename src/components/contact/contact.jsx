import { HiUser } from "react-icons/hi";
import { HiPhone } from "react-icons/hi2";
import css from "./contact.module.css"
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";
export default function Contact({ contact }) {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contact.id))

    return (
        <>
            <ul className={css.list}>
                <li><HiUser />{contact.name}</li>
                <li><HiPhone />{contact.number}</li>
            </ul>
            <button className={css.delete} onClick={handleDelete}>Delete</button>
        </>
    )
}

// onClick = {()=> onDelete(id)}