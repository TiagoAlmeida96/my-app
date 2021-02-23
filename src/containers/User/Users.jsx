
import React,{useEffect,useState} from "react"; 
import Candidate from './Candidate'
import style from './user.module.css';



const Users = () => {

  
  const [candidates, setCandidates] = useState([]);
  const [search, setSearch] = useState('');
 

   
  useEffect (() =>{
    getCandidates();
  }, [search]);

  const getCandidates = async () =>{
  const response = await fetch(
    `http://cv-local.decode.localhost/api/dna/candidate`, {
      method:"get",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im1hbmFnZXJAZGVjb2RlLnB0IiwianRpIjoiOGYwMDhiMTk5ZDk2NGIwYTgyZTg3OTJjZGNhY2ZmZTAiLCJlbWFpbCI6Im1hbmFnZXJAZGVjb2RlLnB0Iiwicm9sZSI6Ik1hbmFnZXIiLCJuYmYiOjE2MTQwMDM1MzksImV4cCI6MTYxNDAxNDMzOSwiaWF0IjoxNjE0MDAzNTM5LCJpc3MiOiJETkFJc3N1ZXIiLCJhdWQiOiJETkFBdWRpZW5jZSJ9.gWwqJaOiLw9VUhNVblHQUAg2TKxBCKsRmRQA0cmUGHI'
      },
      mode: 'cors',
      cache: 'default'
    });
    const data = await response.json();
    setCandidates(data.response);
    console.log(data.response);   
}


const filteredCandidates = candidates.filter(candidate =>{
  return candidate.fullName.toLowerCase().includes(search.toLowerCase())
})

    return(
      <div className="App">
        <form  className="search-form">
          <input className="search-bar" type ="text" value={search} onChange={e => setSearch(e.target.value)}/>
          <button className="search-button" type ="submit">Limpar</button>

        </form>
        <div className='candidates'>
         {filteredCandidates.map(candidate =>(
           <Candidate
            key={candidate.fullName}
            fullname={candidate.fullName} 
            phone={candidate.phone} 
            email={candidate.mail}
            />
            
         ))}
         </div>
      </div>
    );
}
export default Users;
