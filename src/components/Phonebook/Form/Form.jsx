import React, { useState } from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";
import css from "./Form.module.css";


// class Form extends Component {
//     state = {
//         name: "",
//         number: ""
//     }

//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         const { name, number } = this.state;
//         this.props.onSubmit({
//             name,
//             number
//         });
//         this.setState({
//             name: "",
//             number: ""
//         })
//     }

//     render() {
//         const { name, number } = this.state;
//         return (
//             <>
//             <h1 className={css.mainTitle}>Phonebook</h1>
//             <form className={css.form} onSubmit={this.handleSubmit}>
//                 <Label text="Name">
//                     <Input type="text" name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" value={name} onChange={this.handleChange} />
//                 </Label>
//                 <Label text="Number">
//                     <Input type="tel" name="number" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" value={number} onChange={this.handleChange} />
//                 </Label>
//                 <button className={css.formButton} type="submit">Add</button>
//             </form>
//             </>
//         )
//     }
// }

const Form = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({
            name,
            number
        });
        setName("");
        setNumber("");
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "number":
                setNumber(value);
                break;
            default:
                return;
        }
    }

    return (
            <>
            <h1 className={css.mainTitle}>Phonebook</h1>
            <form className={css.form} onSubmit={handleSubmit}>
                <Label text="Name">
                    <Input type="text" name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" value={name} onChange={handleChange} />
                </Label>
                <Label text="Number">
                    <Input type="tel" name="number" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" value={number} onChange={handleChange} />
                </Label>
                <button className={css.formButton} type="submit">Add</button>
            </form>
            </>
        )
}

export default Form;