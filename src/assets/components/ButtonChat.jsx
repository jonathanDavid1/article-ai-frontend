import { useNavigate } from "react-router-dom"

const ButtonChat = ({id}) => {

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/articles/chat/${id}`)
  }

  return (
    <button onClick={handleSubmit} className="border border-emerald-500 rounded p-2 bg-emerald-400">Chat History</button>
  )
}
export default ButtonChat