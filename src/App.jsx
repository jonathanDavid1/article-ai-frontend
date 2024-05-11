import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Article from './assets/components/Article';
import Chat from './assets/components/Chat';
import ChatHistory from './assets/components/ChatHistory';
import QuestionandAnswer from './QuestionandAnswer';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Article />} />
        <Route path="/article/:id" element={<Chat />} />
        <Route path="/articles" element={<ChatHistory />} />
        <Route path="/articles/chat/:id" element={<QuestionandAnswer/>} />
      </Routes>
    </Router>
  );
}

export default App;
