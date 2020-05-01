import React from "react";
import Input from "./Input";

export default props => (
    <section className="contact">
        <div className="anchor" id="contact"></div>
        <h2>Contact</h2>
        <div className="container">
            <form className="form-horizontal" action="/confirmation" name="contact" method="POST" netlify-honeypot="dog-birthday" data-netlify="true">
                <div className="row">
                    <div className="col-md-6">
                        <Input name="dog-birthday" type="hidden" uncontrolled />
                        <Input name="form-name" type="hidden" value="contact" uncontrolled />
                        <Input name="name" type="text" label="Your name:" placeholder="John Doe" uncontrolled />
                        <Input name="email" type="email" label="Your e-mail:" placeholder="john.doe@mailme.com" uncontrolled />
                        <Input name="phone" type="text" label="Your phone number:" placeholder="0612345678" uncontrolled />
                    </div>
                    <div className="col-md-6">
                        <Input name="name" type="textarea" label="Your message:" placeholder="Let's work together!" uncontrolled />
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-primary">Contact us</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
);

