/*import React, { Fragment } from 'react';
import Header from "./components/Header.jsx";
import './App.css';

function App(){
  return (
  <React.Fragment>
    <Header/>
    </React.Fragment>

  )
}
export default */ 
/*
import React,{ Component} from 'react'

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count : 0
        }
    }
    render(){
        return(
            <>
            <div>{this.state.count}</div>
            <button onClick={()=> this.setState({count :this.state.count +1})}>increment</button>
            <button onClick={()=> this.setState({count :this.state.count -1})}>decrement</button>
            </>
        )
    }
}
export default App;
*/
/*
import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <>
    <BrowserRouter>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
    </ul>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
*/
/*
import React,{useState} from 'react'


function App() {
  const [count,setCount]= useState(0)
  return (
    <>
    <div>count={count} </div>
    <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
    <button onClick={()=>setCount((count)=>count-1)}>Decrement</button>
    <button onClick={()=>setCount((count)=>count+10)}>Increment by 10</button>
    <button onClick={()=>setCount((count)=>count-10)}>Decrement by 10</button>
    </>
  )
}
export default App
*/
/*
import React,{useState} from 'react'

function App() {
  const [name,setName] = useState('Hello')
  return (
    <form>
      <p style={{color:'red'}}>{name}</p>
    <input type ='text' value={name} onChange={(e)=>setName((e.target.value))}></input>
    </form>
  )
}
export default App
*/
/*
import React,{useState} from 'react'

function App() {
  const [name,setName] = useState('Hello Chennai')
  return (
    <>
      <p style={{color:'red'}}>{name}</p>
    <button onClick={()=>setName((name)=>'Hello Kanchi')}>click</button>
  </>
  )
}
export default App
*/
/*
import React,{useState,useEffect}from 'react'

function App() {
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(Response=>Response.json())
  .then(data=>setPosts(data))
  },[])
  return (
    <>
    <div>data getting from the api</div>
  <ul>
    {posts.map((post)=> (
      <li key={post.id}><h1>{post.title}</h1></li>
  ))}
  </ul>
  </>
  )
}
export default App
*/
/*
import React,{useState,useEffect}from 'react'

function App() {
  const [posts,setPosts]=useState([])
  const array=[34,45,78]
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(Response=>Response.json())
  .then(data=>setPosts(data))
  },[])
  return (
    <>
    <div>data getting from the api</div>
  <ul>
  {posts.map((post)=> (
    <li key={post.id} style={{listStyleType:'none'}}>
      <div style={{color:'black',height:'80px',backgroundColor:'blue',marginTop:'40px',padding:'60px',width:'40px'}}>{post.title}</div>
    </li>
  ))}
  </ul>
  </>
  )
}
export default App
*/
/*
import React,{useState,useEffect}from 'react'

function App() {
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    fetch('https://dummyjson.com/recipes')
  .then(Response=>Response.json())
  .then(data=>setPosts(data.recipes))
  })
  return (
    <>
    <div>App</div>
    <ul>
      {posts.map((x)=>(
        <li key={x.id}>{x.name}<'img src=${x.image}'/></li>
      ))}
    </ul>
    </>
  )
}
export default App*/

/*
import React, { useState } from 'react';
const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ name, email, password });
  };
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
};
export default App;

*/

/*
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddRecipe from "./pages/AddRecipe";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
*/
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import AddRecipe from "./pages/AddRecipe";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
