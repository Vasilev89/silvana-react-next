import React, { Component } from 'react';

class ContactForm extends Component{
    render(){
        return (
        <section>
        <p>If you are interested in forthcoming exhibitions, purchasing work or visiting the studio please contact me:</p>
        <form>        
            <input required type="text" className="form-control ss-form-firstName md-col-5" autoCapitalize="off" autoCorrect="off" name="MERGE0" id="MERGE0" size={25} placeholder="First Name" />
            <input required type="text" className="form-control ss-form-lastName md-col-5" autoCapitalize="off" autoCorrect="off" name="MERGE0" id="MERGE0" size={25} placeholder="Last Name" />
            <input required type="email" className="form-control ss-form-email md-col-12" autoCapitalize="off" autoCorrect="off" name="MERGE0" id="MERGE0" size={25} placeholder="Email" />
            <input required type="text" className="form-control ss-form-subject md-col-12" autoCapitalize="off" autoCorrect="off" name="MERGE0" id="MERGE0" size={25} placeholder="Subject" />
            <input required type="textarea" className="form-control ss-form-message md-col-12" autoCapitalize="off" autoCorrect="off" name="MERGE0" id="MERGE0" size={25} placeholder="Message" />
            <button className="ss-standard-cta-link ss-standard-cta-link__primary-cta ss-standard-cta-link__primary-cta-promotion" type="submit">Submit</button>
        </form>
        </section>
        );
    }
}
export default ContactForm;