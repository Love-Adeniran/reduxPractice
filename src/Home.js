import React, {useEffect, useState} from 'react';
// import HandlingInput from './handlingInput';
// // import styles from './style.css'
// import style from './styles.module.css'

export const MyComponent =()=>{
    const myName ='Love Adeniran'
    const department = 'Software Engineering'
    const school = 'Soft Quest Incoporated'
    
    const detail = {firstname:'Loveth', Lastname: 'Seyi', School: 'SQI'}
    // let comment = ""
    const [comment, setComment] = useState("")
    // onload of the page set a welcome message
    // const [welcome, setWelcome] = useState("")
    const [message, setMessage] = useState("")
    let greeting = 'Welcome! How may i be of help to you?'
    let score = 56
    const getMessage =()=>{
        setMessage(greeting)
    }
    

    const getComment =()=> {
        if(score>=0 && score<=39){
            setComment('Fail')
        }
        else if(score>=40 && score<=44){
            setComment('fair');
        }
        else if(score>=45 && score<=49){
            setComment('good');
        }
        else if(score>=50 && score<=59){
            setComment('Average');
        }
        else if(score>=60 && score<=69){
            setComment('Very Good');
        }
        else if(score>=70 && score<=100){
            setComment('Excellent');
        }
        else{
            setComment('You are not Serious!');
        }
    }
    
    // getComment()
    
    useEffect(()=>{
        getComment()
        // setComment('You are welcome!') instead of a function
        getMessage()
    })
    
    return(
        <div>
           {comment}<br/>
           {message}<br/>
            My Name is {myName} from the department of {department} at {school} <br/>
            {/* <input/><br/>
            I am the Parent Element */}
            {/* <HandlingInput/> */}
            <SecondComponent myDetail={detail}/>
        </div>
    )
}
const SecondComponent = (props)=>{
    return(
        <div className={`styles.text`}>
            <p> 
                {props.myDetail.firstname}
            </p>
            I am the second component
        </div>
    )
}