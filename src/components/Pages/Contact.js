
import React, { Component } from "react";
import Field from "../Common/Field";
import { withFormik } from 'formik'


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

    render() {
        return (
            // id="contact"is important for rendering
            <section id="contact">
                {/* The "container" class typically provides a fixed width and centers the content horizontally within the container element*/}
                <div className="container">
                    {/* Every coloumn in this new row will be with width:12 and text placed on center */}
                    <div className="col-lg-12 text-center">
                        {/* h2 stand for header 2 is the second larger, placed in heading section in the container with uppercase text */}
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        {/* h3 stand for header 3 is the third larger */}
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        {/*Assigne in the screen a 12-width section that can split to 12 coloumn( Container alredy does it) */}
                        <div className="col-lg-12">
                            {/* Trigger submitForm function on submit */}
                            <form onSubmit={this.props.handleSubmit} name="sentMessage" noValidate={false}  >
                                {/* New Row */}
                                <div className="row">
                                    {/* Maps object fields.sections to this blocks: 
                                    section = [
                                                { name: 'name',
                                                  elementName: 'input',
                                                  type: 'text',
                                                  placeholder: '* Type your name' 
                                                },
                                                { name: 'email',
                                                  elementName: 'input',
                                                  type: 'email',
                                                  placeholder: '* Type your email' 
                                                },
                                                { name: 'phone',
                                                  elementName: 'input',
                                                  type: 'tel',
                                                  placeholder: '* Type your phone number' 
                                                }
                                            ]
                                    sectionIndex = 0 

                                    section = [
                                                { 
                                                name: 'message',
                                                elementName: 'textarea',
                                                type: 'text',
                                                placeholder: '* Type your message' 
                                                } 
                                              ]
                                    sectionIndex = 1 
                                    */}
                                    {fields.sections.map(
                                        (section, sectionIndex) => {
                                            console.log("Rendering section :", sectionIndex, " with :", section);
                                            return (
                                                // *Assigne in the 12-width section a 6-width section ( It called twice, once for every fields.sections)
                                                <div className="col-md-6" key={sectionIndex}>
                                                    {/* Maps the object "section" with sectionIndex=0 to this blocks:  
                                        field = {  
                                                  name: 'name',
                                                  elementName: 'input',
                                                  type: 'text',
                                                  placeholder: '* Type your name' 
                                                }
                                        fieldIndex = 0

                                        field = {  
                                                  name: 'email',
                                                  elementName: 'input',
                                                  type: 'email',
                                                  placeholder: '* Type your email' 
                                                }
                                        fieldIndex = 1

                                        field = {  
                                                  name: 'phone',
                                                  elementName: 'input',
                                                  type: 'tel',
                                                  placeholder: '* Type your phone number' 
                                                }
                                        fieldIndex = 2

                                        Maps the object "section" with sectionIndex=1 to this blocks:  
                                        field = {  
                                                  name: 'message',
                                                  elementName: 'textarea',
                                                  type: 'text',
                                                  placeholder: '* Type your message' 
                                                }
                                        fieldIndex = 0
                                                    */}
                                                    {section.map(
                                                        (field, fieldIndex) => {
                                                            return <Field
                                                                //This action fill the Field class with field attributes correspondly
                                                                {...field}
                                                                //  fieldIndex represents the index of the current element in the mapping iteration
                                                                key={fieldIndex}
                                                                name={field.name}
                                                                onChange={this.props.handleChange}
                                                                onBlur={this.props.handleBlur}
                                                                touch={this.props.touched[field.name]}
                                                                errors={this.props.errors[field.name]}
                                                                 />
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
                </div>
            </section>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    validate: values => {
        const errors = {};
        Object.keys(values).map(
            v => 
            {
            if (!values[v]) {
                errors[v] = "Required"
            }
            return null
            }
        )
        return errors
    },
    handleSubmit: (values, { setSubmitting }) => {
        console.log("VALUES :", values);
        alert("You've submitted the form", JSON.stringify(values));
    }

})(Contact);



