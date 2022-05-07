
import './App.css';
import  DeleteRequest  from './components/DeleteRequest';
import GetRequest from './components/GetRequest';
import  PatchRequest  from './components/PatchRequest';
import  PostRequest  from './components/PostRequest';
import  PutRequest  from './components/PutRequest';

function App() {
  return (
    <div className="button__container">
      
      <PostRequest/>
      <PutRequest/>
      <PatchRequest/>
      <GetRequest/>
      <DeleteRequest/>
    </div>
  );
}

export default App;
