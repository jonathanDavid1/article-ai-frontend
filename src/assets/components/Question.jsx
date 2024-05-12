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
    axios.post(`https://article-ai-backend.onrender.com/${id}/chat`, { question: question })
      .then(({ data }) => {
        setChat([...chat, { question: question, answer: data.answer }]);
        setQuestion('');
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="bg-blue-400 p-4">  
      {chat.map((item, index) => (
        <div key={index} className="bg-white p-4 my-2 rounded shadow">
          <div className="mb-2">
            <h2 className="text-lg font-bold">You</h2>
            <p className="text-gray-700">{item.question}</p>
          </div>
          <div>
            <h2 className="text-lg font-bold">AI</h2>
            <p className="text-gray-700">{item.answer}</p>
          </div>
        </div>
      ))}

      <form onSubmit={handleQuestionSubmit} className="mt-4">
        <input
         type="text" value={question} onChange={handleQuestionChange} className="border-5 border-black  p-2 rounded w-full" />
        <button type="submit" className="bg-blue-500 text-white p-2 mt-2 rounded">Send question</button>
      </form>

    </section>
  );
}

export default Question;
