import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Question() {
  const [chat, setChat] = useState([]);
  const [question, setQuestion] = useState('');
  const { id } = useParams();

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleQuestionSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:8080/${id}/chat`, { question: question })
      .then(({ data }) => {
        setChat([...chat, { question: question, answer: data.answer }]);
        setQuestion('');
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="bg-blue-100 p-4">  
      {chat.map((item, index) => (
        <div key={index} className="bg-white p-4 my-2 rounded shadow">
          <div className="mb-2">
            <h2 className="text-xl font-bold">Question {index + 1}</h2>
            <p className="text-gray-700">{item.question}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Answer {index + 1}</h2>
            <p className="text-gray-700">{item.answer}</p>
          </div>
        </div>
      ))}

      <form onSubmit={handleQuestionSubmit} className="mt-4">
        <input type="text" value={question} onChange={handleQuestionChange} className="border p-2 rounded w-full" />
        <button type="submit" className="bg-blue-500 text-white p-2 mt-2 rounded">Send question</button>
      </form>

    </section>
  );
}

export default Question;
