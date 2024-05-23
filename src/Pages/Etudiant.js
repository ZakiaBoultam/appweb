import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Etudiant() {
  const [courses, setCourses] = useState([]);
  const [messages, setMessages] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get('/api/courses').then(response => {
      setCourses(response.data);
    });

    axios.get('/api/messages').then(response => {
      setMessages(response.data);
    });

    axios.get('/api/feedbacks').then(response => {
      setFeedbacks(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Cours</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
      <h1>Messages</h1>
      <ul>
        {messages.map(message => (
          <li key={message.id}>{message.content}</li>
        ))}
      </ul>
      <h1>Feedback</h1>
      <ul>
        {feedbacks.map(feedback => (
          <li key={feedback.id}>{feedback.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default Etudiant;
