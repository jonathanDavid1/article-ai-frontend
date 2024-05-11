import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const QuestionandAnswer = () => {

  const {id} = useParams()
  const [data, setData] = useState('');
  useEffect(() => {
    axios.get(`http://localhost:8080/${id}/chat`)
      .then((response) => {
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div></div>
  )
}
export default QuestionandAnswer