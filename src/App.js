import { ContactForm, ContactList, Filter } from "./components/index"

export const App =()=> {
  return (
    <div className="App">
      <ContactForm />
      <Filter/>
      <ContactList/>
    </div>
  );
}


