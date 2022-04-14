import logo from './logo.svg';
import { useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { AboutPage, HomePage, PostsPage, PostPage, LoginPage } from './pages';
import { Layout } from './components/Layout';
import './App.css';


function App() {

  const [isLogedIn, setIsLoggedIn] = useState(false);

const history = useNavigate();

  const onLogin = () => {
    
    setIsLoggedIn(true);
    history("posts");
  }
  console.log(isLogedIn);
  return (<>

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage isLoggedIn={isLogedIn} onLogin={onLogin}/>} />
        <Route
          path="posts"
          element={isLogedIn ? <PostsPage/> : <Navigate to="/login" replace={true}/>}
        // render={()=>(isLogedIn ? <PostsPage/> : <Navigate to="/"/>)}
        />

      //
        <Route path="posts/:id" element={<PostPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  </>
  );
}

export default App;
