import { Route, Routes } from "react-router-dom";

import AllContacts from "./pages/AllContacts";
import ContactDetail from "./pages/ContactDetail";
import NewContact from "./pages/NewContact";
import EditContact from "./pages/EditContact";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllContacts />} />
        <Route path="/:contactId" element={<ContactDetail />} />
        <Route path="/edit/:contactId" element={<EditContact />} />
        <Route path="/new-contact" element={<NewContact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
