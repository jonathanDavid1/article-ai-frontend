import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const QuestionandAnswer = () => {

  const {id} = useParams()
  const [chat, setChat ] = useState([]);
  useEffect(() => {
    axios.get(`https://article-ai-backend.onrender.com/${id}/chat`)
      .then((response) => {
        setChat(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  const filteredChat = chat.filter(item => item.articleId == id);



  return (
<section className="bg-blue-400 h-screen p-4">
  <h1 className="text-center text-2xl p-2 m-2 ">History of questions and answers</h1>
  {filteredChat.map((objeto, index) => (
    <div key={index} className="m-6 p-2 shadow-lg rounded-lg bg-blue-100">
      <h1 className="text-xl text-blue-500 font-bold">{objeto.question}</h1>
      <p className="text-base text-black">{objeto.answer}</p>
    </div>
  ))}
</section>

  )
}
export default QuestionandAnswer