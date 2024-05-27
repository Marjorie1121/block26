import React, { useState } from 'react';
import ContactList from './components/ContactList';

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <div className="App">
      {selectedContactId ? (
        <div>
          Selected Contact View
        </div>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </div>
  );
}

export default App;



