import { ContactForm, ContactList, Filter, Section } from "./components/index"

export const App =()=> {
  return (
    <Section>
      <ContactForm />
      <Filter/>
      <ContactList/>
    </Section>
  );
}


