import React, { Component } from 'react';

// podstrona kontakt, nie wymaga za bardzo tłumaczenia
class Contact extends React.Component {
    render(){
        return (
            <div className="contact">
                <h2>Kontakt</h2>
                <hr />
                <p>W przypadku pytań lub uwag bardzo prosimy o kontakt mailowy. Jesteśmy wdzięczni za wszystkie uwagi :)</p>
                <br />
                <p>Adres e-mail: <a href="mailto:psmiatek@gmail.com?Subject=StuffIOWN%20staff" target="_top">psmiatek@gmail.com</a></p>
                <br />
                <p>Autor strony: Paweł Smiatek</p>

            </div>
        )
    }
};

export default Contact;