import React, { useState, useEffect } from "react";
import axios from "axios";
import Tabs from "./components/Tabs";
import CreateContact from "./components/CreateContact";
import ContactList from "./components/ContactList";
import EditContact from "./components/EditContact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [activeTab, setActiveTab] = useState("Contact List");

  const fetchContacts = async () => {
    try {
      const response = await axios.get(
        "http://localhost/contact_backend/api.php"
      );
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const deleteContact = async (id) => {
    try {
      await axios.delete("http://localhost/contact_backend/api.php", {
        data: { id },
      });
      fetchContacts();
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const handleEditSubmit = async (id, updatedData) => {
    try {
      await axios.put("http://localhost/contact_backend/api.php", {
        id,
        ...updatedData,
      });
      fetchContacts();
      setSelectedContact(null);
      setActiveTab("Contact List");
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  const handleEditClick = (contact) => {
    setSelectedContact(contact);
    setActiveTab("Edit Contact");
  };

  const handleCancelEdit = () => {
    setSelectedContact(null);
    setActiveTab("Contact List");
  };

  const handleAddContact = async () => {
    // After creating a contact, update the contact list and navigate back to the "Contact List" tab
    await fetchContacts();
    setActiveTab("Contact List");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="bg-white bg-opacity-90 shadow-lg rounded-lg w-full max-w-4xl h-auto p-8">
        {/* Título global */}
        <h1 className="text-4xl font-bold mb-6 text-center">Contacts</h1>

        <Tabs activeTab={activeTab} onTabChange={setActiveTab}>
          <div label="Create Contact">
            <CreateContact
              fetchContacts={fetchContacts}
              onAddContact={handleAddContact}
            />
          </div>
          <div label="Contact List">
            <ContactList
              contacts={contacts}
              deleteContact={deleteContact}
              onEditClick={handleEditClick}
            />
          </div>
          <div label="Edit Contact">
            {selectedContact ? (
              <div>
                <EditContact
                  contact={selectedContact}
                  handleEditSubmit={handleEditSubmit}
                />
                {/* Botón de Cancelar */}
                <button
                  onClick={handleCancelEdit}
                  className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 mt-4"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <p className="text-center text-gray-500">
                Select a contact to edit
              </p>
            )}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default App;
