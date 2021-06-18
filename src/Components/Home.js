import React, {useState, useEffect} from 'react'; 
import '../App.css'
import {Link} from 'react-router-dom'; 



function Home(props) { 

    const [emps, setEmps] = useState([]); 
    const [url, setUrl] = useState(""); 
    
  
    useEffect(()=>{ 
      fetchItems(); 
    },[])
  
    const fetchItems = async () => {
      const data = await fetch('https://ersnode.herokuapp.com/employeeList');
      const emps = await data.json();
      setEmps(emps); 
    }

    const loginHandler = (e)  => { 
        props.setUser(e.target.value); 

        if(e.target.value == "Will") { 
            setUrl("/ManHome")
        } else { 
            setUrl("/EmpHome")
        }
    }
    
    return (
      <div>
        <h1>Welcome</h1>
        <div>
        <select className="login" onChange={loginHandler}>
            <option disabled selected>Select User</option>
          {emps.map(emp => (
            <option key = {emp._id} value={emp.name}>{emp.name}</option>
          ))}
        </select>
            <Link to = {url}>
                <button>Log In</button>
            </Link>
        </div>
      </div>
    )
  };

  export default Home; 