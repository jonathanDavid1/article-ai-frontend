import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Question from './Question';

function Chat() {
  const { id } = useParams();
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/article/${id}`)
      .then(({data}) => setSummary(data)) 
      .catch((err) => console.log(err));
  }, [id]);

  return(
    <div className="bg-blue-100 p-4">
      <h1 className='text-2xl font-bold p-2 m-5' >This is the summary for the article</h1>
      <section className='bg-white p-4 m-5 rounded shadow'>
        {summary?.summary}
      </section>
      <section>
          <h1 className='text-2xl font-bold p-2 m-5'>Chat</h1>
      </section>
      <Question/>
    </div>
  );
}

export default Chat;

