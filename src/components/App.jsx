import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { Wrap } from "./App.styled";
import { ContactList } from "./ContactList/ContactList";

export const App = () => {
  return (
    <Wrap>
      <ContactForm />
      <Filter />
      <ContactList/>
    </Wrap>
  );
};
