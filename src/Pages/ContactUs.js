import React, { useState } from 'react';
import classes from "./ContactUs.module.css";
// import Header from "../components/UI/Header";
// import Footer from '../components/UI/Footer';
// import CartContext from '../components/Store/CartContext';

const ContactUs = () => {

    // const ctx = useContext(CartContext);

    const [name, setName] = useState();
    const [emailId, setEmailId] = useState();
    const [phoneNumber, setPhoneNumber] = useState();

    const nameHandler = (e) => {
        setName(e.target.value);
    };

    const emailIdHandler = (e) => {
        setEmailId(e.target.value);
    };

    const phoneNumberHandler = (e) => {
        setPhoneNumber(e.target.value);
    };

    let obj = {
        name: name,
        emailId: emailId,
        phoneNumber: phoneNumber
    };

    const submitHandler = (e) => {
        e.preventDefault();
        // ctx.ContactUs(obj);
        addContactUsDetails()
    };

    const addContactUsDetails = async () => {
        const response = await fetch("https://react-prep2-1e8ff-default-rtdb.firebaseio.com/contactUs.json", {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.ok) {
            // do something
        } else {
            throw new Error("Something went wrong ......Retrying");
        }
        const data = await response.json();
        console.log(data);
    };

  return (
    <>
       
        <div className="bg-gray-700 h-[8rem]   ani italic text-white text-center text-6xl align-text-center mt-[3rem] "> 
            The Generics
        </div>
        <div className=" font-serif m-auto w-[50rem] h-[30rem]">
            <form className={classes.contactUs}>
                <div className="w-[50rem] mt-[2rem]">
                    <h1>Contact-Us:</h1>
                </div>
                <div className={classes.control}>
                    <label className="mt-[2rem]" htmlFor="name">
                        Name:
                    </label>
                    <input className="bg-white border h-[4rem] rounded-md  border-black" type='text' id='name' onChange={nameHandler} placeholder='Enter Name' required />
                </div>
                <div className={classes.control}>
                    <label className="mt-[2rem]" htmlFor="email">
                        Email-Id:
                    </label>
                    <input className="bg-white border h-[4rem] rounded-md  border-black" type='text' id='emailId' onChange={emailIdHandler} placeholder='Enter Email-Id' required />
                </div>
                <div className={classes.control}> 
                    <label className="mt-[2rem]" htmlFor="phone">
                        Phone-Number:
                    </label>
                    <input className="bg-white border h-[4rem] rounded-md  border-black" type='number' id='phoneNumber' onChange={phoneNumberHandler} placeholder='Enter Phone-Number' required />
                </div>
                <div className="w-[50rem] mt-[2rem] ">
                    <div className={classes.action}>
                        <button onClick={submitHandler} className="border mx-auto w-[8rem] font-extrabold h-[3rem] rounded-lg border-black">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default ContactUs;