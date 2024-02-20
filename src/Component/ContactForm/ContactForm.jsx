import React from 'react'
import styles from "./ContactForm.module.css"
import Button from '../Button/Button'
import { MdCall, MdMail, MdMessage } from 'react-icons/md'
import { useState } from 'react'


function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");



    const onSubmitFunction = (event) => {


        event.preventDefault()

        setName(event.target[0].value)
        setEmail(event.target[1].value)
        setText(event.target[2].value)



    }
    return (
        <section className={`${styles.container}`}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>

                    <Button text={"VIA SUPPORT CHAT"} icon={<MdMessage fontSize='20px' color={"blue"} />} />
                    <Button text={"VIA CALL"} icon={<MdCall fontSize='20px' color={"blue"} />} />
                </div>
                <Button
                    isOutline={true}

                    text={"VIA EMAIL FORM"} icon={<MdMail fontSize='20px' color={"blue"} />} />

                <form onSubmit={onSubmitFunction}>
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' />

                        <div className={styles.form_control}>
                            <label htmlFor="name">Email</label>
                            <input type="email" name='email' />
                        </div>
                        <div className={styles.form_control}>
                            <label htmlFor="">Text</label>
                            <textarea
                                style={{ padding: '8px' }}
                                name="text" rows="8" ></textarea>
                        </div>
                    </div>
                    <div style={
                        {
                            display: 'flex',
                            justifyContent: 'end',
                            margin: '8px'
                        }
                    } >
                        <Button
                            text={"SUBMIT"} />

                    </div>
                    <div>
                        {
                            name + "" +
                            email + "" +
                            text + ""
                        }
                    </div>


                </form>

            </div>

            <div className={styles.contact_image}>
                <img
                    src="./Images/contactimage.png" alt="" />
            </div>

        </section>
    )
}

export default ContactForm