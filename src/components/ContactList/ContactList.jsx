import { Button, Text } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { getContacts } from "../../redux/selectors";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice"; 

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    return (
        <ul>
            {contacts.map(obj => (
                
                <li key={obj.id}>
                    <Text>{obj.name}: {obj.number}</Text>
                    <Button type="button" onClick = {() => dispatch(deleteContact(obj.id))}>Delete</Button>
                </li>
            ))

            }
        </ul>
    )
}