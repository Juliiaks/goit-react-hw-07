import { filterSlise } from "../../redux/filtersSlice";
import css from "./searchBox.module.css"
import { useDispatch } from "react-redux";

export default function SearchBox() {

    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(filterSlise(event.target.value));
    };

    return (
        <div className={css.container}>
            <p className={css.text}>Search by name</p>
            <input className={css.input} type="text" placeholder="Enter..." onChange={handleChange}></input>
       </div>
    )
}