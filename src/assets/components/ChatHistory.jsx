import axios from 'axios';
import { useEffect, useState } from 'react';
import DeleteArticle from './DeleteArticle';
import ButtonChat from './ButtonChat';

function Articulos() {
  const [articulos, setArticulos] = useState([]);
  const deleteArticleById = (id) => {
    setArticulos(articulos.filter(articulo => articulo.id !== id));
  };

  useEffect(() => {
    axios.get('http://localhost:8080/article')
      .then((response) => {
        setArticulos(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className="bg-black p-4 grid">
      {articulos.map((articulo, index) => (
        <div key={index} className="bg-blue-200 p-4 my-2 rounded shadow">
          <div className='flex gap-2'>
            <DeleteArticle id = {articulo.id } onDelete={deleteArticleById} /><ButtonChat id = {articulo.id }/>
            </div>
          <a href={articulo.url} className="text-blue-500 hover:underline">{articulo.url}</a>
          <p className="text-gray-700">{articulo.summary}</p>
        </div>
      ))}
    </div>
  );
}

export default Articulos;
