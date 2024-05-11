import axios from "axios"

const DeleteArticle = ({id, onDelete}) => {
    const handleDelete = () => {
        axios
            .delete(`http://localhost:8080/article/${id}`)
            .then(responde => {
                console.log("Article deleted succesfully")
                onDelete(id);
            })
            .catch(error => ('Error fetching data: ', error));
            
    };
  return (
    <button 
    onClick={handleDelete} 
    className="rounded border border-red-700 bg-red-500 p-2 ">DeleteArticle</button>
  )
}
export default DeleteArticle