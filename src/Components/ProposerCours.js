import React, { useState } from 'react';
import axios from 'axios';

const ProposerCours = ({ filiere, niveau, courses }) => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('title', selectedCourse);
    formData.append('description', description);
    formData.append('file', file);
    formData.append('filiere', filiere);
    formData.append('niveau', niveau);

    try {
      await axios.post('/api/propose-course', formData);
      alert('Proposition de cours soumise avec succès. En attente de validation.');
    } catch (error) {
      console.error('Erreur lors de la soumission de la proposition de cours:', error);
      alert('Échec de la soumission de la proposition de cours.');
    }
  };

  return (
    <div className="proposer-cours-form">
      <h2>Proposer un Cours</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Matière</label>
          <select 
            value={selectedCourse} 
            onChange={(e) => setSelectedCourse(e.target.value)} 
            required
          >
            <option value="" disabled>Choisissez une matière</option>
            {courses.map(course => (
              <option key={course.id} value={course.title}>{course.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Description du Cours</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Uploader le Fichier du Cours</label>
          <input 
            type="file" 
            onChange={(e) => setFile(e.target.files[0])} 
            required 
          />
        </div>
        <button type="submit">Soumettre la Proposition</button>
      </form>
    </div>
  );
};

export default ProposerCours;
