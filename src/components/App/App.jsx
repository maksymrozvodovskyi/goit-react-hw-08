import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../Layout/Layout";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegisterPage/RegisterPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then(() => {})
      .catch(() => {});
  }, [dispatch]);

  return (
    /* <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList /> */
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
