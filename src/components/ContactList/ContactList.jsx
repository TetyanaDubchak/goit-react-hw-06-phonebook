import { Button, Text } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { getContacts } from "../../redux/selectors";

export const ContactList = () => {
    const contacts = useSelector(getContacts);

    return (
        <ul>
            {contacts.map(obj => (
                // key={obj.id}
                <li >
                    <Text>{obj.name}: {obj.number}</Text>
                    {/* <Button type="button" onClick = {()=> onDelete(obj.id)}>Delete</Button> */}
                </li>
            ))

            }
        </ul>
    )
}