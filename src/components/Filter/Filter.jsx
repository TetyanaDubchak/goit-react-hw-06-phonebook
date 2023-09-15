import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/actions";
import { getFilters } from "../../redux/selectors";
import { Input, Text } from "./Filter.styled";

export const Filter = ({ onChangeFilter }) => {
    const dispatch = useDispatch();
    const handleFilterChange = text => dispatch(setFilter(text));

    return (
        <>
            <Text>Find contacts by name</Text>
            <Input type="text" onChange={evt=> handleFilterChange(evt.target.value)} />
        </>
    )
}