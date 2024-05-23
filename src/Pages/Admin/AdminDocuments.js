import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDocuments() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    axios.get('/api/documents').then(response => {
      setDocuments(response.data);
    });
  }, []);

  const handleApprove = (documentId) => {
    axios.put(`/api/documents/${documentId}/approve`).then(() => {
      setDocuments(documents.map(doc => doc.id === documentId ? { ...doc, approved: true } : doc));
    });
  };

  const handleDelete = (documentId) => {
    axios.delete(`/api/documents/${documentId}`).then(() => {
      setDocuments(documents.filter(doc => doc.id !== documentId));
    });
  };

  return (
    <div>
      <h1>Gestion des Documents</h1>
      <ul>
        {documents.map(doc => (
          <li key={doc.id}>
            {doc.title} - {doc.approved ? 'Approuvé' : 'Non Approuvé'}
            {!doc.approved && <button onClick={() => handleApprove(doc.id)}>Approuver</button>}
            <button onClick={() => handleDelete(doc.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDocuments;
