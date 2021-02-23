import React from 'react';
import style from './user.module.css';

const Candidate = ({fullname,phone,email,image}) =>{
    return(
<div className={style.candidate}>
    <img className={style.image} src={image} alt=''/>
    <h2>{fullname}</h2>
    <p>{phone}</p>
    <p>{email}</p>
</div>
    );
}
export default Candidate;