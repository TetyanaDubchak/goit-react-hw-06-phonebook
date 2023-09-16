import { Button, Text } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { getContacts, getFilters } from "../../redux/selectors";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice"; 

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filters = useSelector(getFilters);
    const dispatch = useDispatch();

    const filteredList = () => {
       return contacts.filter(contact => contact.name.toLowerCase().includes(filters))
    }

    const filteredContacts = filteredList()

    return (
        <ul>
            {filteredContacts.map(obj => (
                
                <li key={obj.id}>
                    <Text>{obj.name}: {obj.number}</Text>
                    <Button type="button" onClick = {() => dispatch(deleteContact(obj.id))}>Delete</Button>
                </li>
            ))

            }
        </ul>
    )
}