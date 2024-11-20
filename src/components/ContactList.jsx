const ContactList = ({ contacts, deleteContact, onEditClick }) => {
    return (
      <div className="space-y-4">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex justify-between p-4 border bg-gray-50 rounded-lg shadow-sm"
          >
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800">{contact.name}</span>
              <span className="text-gray-600">{contact.email}</span>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => onEditClick(contact)} 
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Edit
              </button>
              <button
                onClick={() => deleteContact(contact.id)}
                className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ContactList;
  