import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeNameFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const debounced = useDebouncedCallback((value) => {
    dispatch(changeNameFilter(value));
  }, 300);

  return (
    <div className={css.searchBoxWrap}>
      <p>Find contacts by name</p>
      <input
        type="text"
        defaultValue={filter}
        onChange={(event) => {
          debounced(event.target.value);
        }}
        className={css.textWrap}
      />
    </div>
  );
}
