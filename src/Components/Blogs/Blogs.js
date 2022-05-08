import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className='row mt-5 mb-5 g-4'>
                <div className='col-12 text-center'>
                    <h3 className='fw-bold text-black-50'>Question 1. <span className='text-black'>Difference between javascript and nodejs</span></h3>
                    <p className='text-black fw-bold container'>ANS: <span className='text-black-50 fw-light row g-4'>
                        <div className='col-md-6 text-start p-3'>
                            <h5>JavaScript</h5>
                            <p>1.Javascript is a programming language that is used for writing scripts on the website.</p>
                            <p>2.Javascript can only be run in the browsers</p>
                            <p>3.It is basically used on the client-side.</p>
                            <p>4.Javascript is capable enough to add HTML and play with the DOM.</p>
                            <p>5.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.</p>
                        </div>
                        <div className='col-md-6 text-start p-3'>
                            <h5>NodeJS</h5>
                            <p>1. NodeJS is a Javascript runtime environment.</p>
                            <p>2.We can run Javascript outside the browser with the help of NodeJS.</p>
                            <p>3.It is mostly used on the server-side.</p>
                            <p>4.Nodejs does not have capability to add HTML tags.</p>
                            <p>5.V8 is the Javascript engine inside of node.js that parses and runs Javascript.</p>
                        </div>
                    </span></p>
                </div>
                <div className='col-12 text-center'>
                    <h3 className='fw-bold text-black-50'>Question 2. <span className='text-black'>Differences between sql and nosql databases.</span></h3>
                    <p className='text-black fw-bold container'>ANS: <span className='text-black-50 fw-light row g-4'>
                        <div className='col-md-6 text-start p-3'>
                            <h5>SQL</h5>
                            <p>1.RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</p>
                            <p>2.These databases have fixed or static or predefined schema</p>
                            <p>3.These databases are not suited for hierarchical data storage.</p>
                            <p>4.These databases are best suited for complex queries</p>
                            <p>5.Vertically Scalable and Follows ACID property.</p>
                        </div>
                        <div className='col-md-6 text-start p-3'>
                            <h5>NoSQL</h5>
                            <p>1.Non-relational or distributed database system.</p>
                            <p>2.They have dynamic schema</p>
                            <p>3.These databases are best suited for hierarchical data storage.</p>
                            <p>4.These databases are not so good for complex queries</p>
                            <p>5.Horizontally scalable and Follows CAP(consistency, availability, partition tolerance)</p>
                        </div>
                    </span>
                    </p>
                </div>
                <div className='col-12 text-center'>
                    <h3 className='fw-bold text-black-50'>Question 3. <span className='text-black'>What is the purpose of jwt and how does it work?</span></h3>
                    <p className='text-black fw-bold container'>ANS: <span className='text-black-50 fw-light'>JWT , or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.

                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</span></p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;