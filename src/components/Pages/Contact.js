
import React, { Component } from "react";
import Field from "../Common/Field";

const fields = {
    sections: [
        [
            { name: 'name', elementName: 'input', type: 'text', placeholder: '* Type your name' },
            { name: 'email', elementName: 'input', type: 'email', placeholder: '* Type your email' },
            { name: 'phone', elementName: 'input', type: 'tel', placeholder: '* Type your phone number' },
        ],
        [
            { name: 'message', elementName: 'textarea', type: 'text', placeholder: '* Type your message' },
        ]
    ]
}

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',
        }

    }

    submitForm = (e) => {
        e.preventDefault();

        // Open a small Window with this messeage
        alert("Form submitted. Thank you very much!");
    }

    render() {
        return (
            // id="contact"is important for rendering
            <section id="contact">
                {/* The "container" class typically provides a fixed width and centers the content horizontally within the container elemen */}
                <div className="container">

                    {/* Every coloumn in this new row will be with width:12 and text placed on center */}
                    <div className="col-lg-12 text-center">
                        {/* h2 stand for header 2 is the second larger, placed in heading section in the container with uppercase text */}
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        {/* h3 stand for header 3 is the third larger */}
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>

                    {/*Assigne in the screen a 12-width section that can split to 12 coloumn( Container alredy does it) */}
                    <div className="col-lg-12">
                        {/* Trigger submitForm function on submit */}
                        <form onSubmit={e => this.submitForm(e)} name="sentMessage" noValidate={false} >
                            {/* New Row */}
                            <div className="row">
                                {
                                    fields.sections.map(
                                        (section, sectionIndex) => {
                                            console.log("Rendering section :", sectionIndex, " with :", section);
                                            return (
                                                // *Assigne in the 12-width section a 6-width section ( It called twice, once for every fields.sections)
                                                <div className="col-md-6" key={sectionIndex}>
                                                    {section.map((field, i) => {
                                                        return <Field
                                                            //This action fill the Field class with field attributes correspondly
                                                            {...field}
                                                            //  i represents the index of the current element in the mapping iteration
                                                            key={i}
                                                            // set value to given filed.name value
                                                            value={this.state[field.name]}
                                                            // On change, active setState 
                                                            onChange={e => this.setState({ [field.name]: e.target.value })} />
                                                    })}
                                                </div>
                                            )
                                        }
                                    )
                                }
                            </div>

                            <div className="row">
                                <div className="clearfix"> </div>
                                <div className="col-lg-12 text-center">
                                    <div id="success"></div>
                                    <button
                                        className="btn btn-primary btn-xl text-uppercase"
                                        type="submit"
                                    >Send Message</button>
                                </div>
                            </div>

                        </form>

                    </div>

                </div>

            </section>

        )
    }
}
export default Contact


