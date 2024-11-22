import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import UserQuestions from './components/QuestionsPage/ques';
import SignIn from './components/SignInpage/signin';
import SignUp from './components/SignUppage/signup';
import Dashboard from './components/Dashboard/dash2';
import LandingPage from './components/Homepage/HomePage';
import ChatBot from './components/chatBot/ChatBot';
import ChatRoom from './components/Dashboard/chatRoom';
const routes = (
  <Router>
    <Routes>
      {/* <Route path="/dashboard" exact element ={<Home/>}/> */}
      <Route path="/login" exact element = {<SignIn/>}/>
      <Route path="/signup" exact element = {<SignUp/>}/>
      <Route path="/questions" exact element = {<UserQuestions/>}/>
      <Route path="/dashboard" exact element = {<Dashboard/>}/>
      <Route path="/chatAI" exact element= {<ChatBot/>}/>
      <Route path="/chatMentor" exact element = {<ChatRoom/>}/>
      <Route path="/home" exact element = {<LandingPage/>}/>
    </Routes>
  </Router>
);
function App() {

  return (
    <>
     {routes} 
    </>
  )
}

export default App
