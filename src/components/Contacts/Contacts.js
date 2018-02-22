import React,  { Component } from 'react';
import './Contacts.css';


const initialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

class Contacts extends Component {
   
    constructor() {
        super();
        this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
  
    render() {
       
        const {name, email, subject, message}  = this.state;

        return(
            <div className="contact tab">
                <h1 className="contact__title">Связаться</h1>
                <form className="contact__form" autoComplete="off">
                   <input
                     className="contact__input"
                     id="name"
                     type="text"
                     placeholder="Имя"
                     name="name"
                     value={name}
                     onChange={ e => this.handleChange(e)}
                   />
                   <input
                    className="contact__input"
                    id="email"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={ e => this.handleChange(e)}
                   />
                   <input
                     className="contact__input"
                     id="subject"
                     type="text"
                     placeholder="Тема"
                     name="subject"
                     value={subject}
                     onChange={ e => this.handleChange(e)}
                   />
                   <textarea
                    className="contact__input"
                    name="message"
                    id="message"
                    placeholder="Сообщение"
                    value={message}
                    onChange={e => this.handleChange(e)}
                   />
                   <input
                    className="contact__submit"
                    type="submit" value="Отправить сообщение" />
                </form>
                <div className="contact-links">
                    <a className="contact-links__link"  href="http://vk.com" target="_blank">vk</a>
                </div>    
            </div>
             
          
        );
        
    }
}

export default Contacts;