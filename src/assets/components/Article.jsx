import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Article = () => {

    const [url, setUrl] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
    event.preventDefault();
    axios
    .post('https://article-ai-backend.onrender.com/article', { 
      url: url,
    })
    .then(({data}) => {
        navigate(`/article/${data.id}`);
    }) 
    .catch((err) => console.log(err));
};
const handleButtonClick = () => {
    navigate('/articles');
  };

  return (
    <main className='relative'>
    <form style={{
        backgroundImage: `url('/bg-urlArticle.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }} className='flex flex-col items-center justify-center h-screen w-full' onSubmit={handleSubmit}>
        <label className='mb-2'>
          <h1 className='mb-8 text-2xl'>On this page, you can access a chat to get a summary <br /> of your article and ask questions about it.</h1>
          <h1 className='text-blue-700 text-lg' >Please provide the article URL:</h1>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className='border p-2 rounded mt-1 w-full '
          />
        </label>
        <button type="submit" className='bg-blue-500 text-white p-2 rounded mt-2'>Submit</button>
      </form>
      <button onClick={handleButtonClick} className="absolute top-2 right-2 z-10 border-2 p-2">ChatHistory
        </button>
      </main>
        );
      }
      
export default Article