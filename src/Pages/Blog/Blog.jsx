import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


const Blog = () => {

    return (
        <div>
            <h1 className='text-dark'>Here is Our Blog.</h1>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <b>what is cors ?</b>
                    </Accordion.Header>
                    <Accordion.Body>
                        CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
                        In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.
                        If you want know more about CORS and it's policy, you can refer here.                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item    eventKey="1"    >
                    <Accordion.Header>
                        <b>Why are you using firebase ? </b>
                    </Accordion.Header>
                    <Accordion.Body>
                        Google Firebase founded in 2011 as a chat API and acquired by Google in 2014, It's a platform that now offers active backend as a service (BaaS) for building dynamic web and mobile apps.
                        Firebase concept is simple. When you build a client-side app with JavaScript or any of its frameworks, for instance, Google Firebase can turn this into a serverless app in no time. It also removes the need to manage databases yourself, as it does that for you.
                        Therefore, implementing Firebase means plugging a ready-made backend into your client code to make it dynamic. Ultimately, it eliminates the need to write backend code from scratch and gives you a fully functional one instead.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <b>What other options do you have to implement authentication ? </b>
                    </Accordion.Header>
                    <Accordion.Body>
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item  eventKey="3"      >
                    <Accordion.Header>
                        <b>How does the private route work ? </b>
                    </Accordion.Header>
                    <Accordion.Body>
                        Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="4" flush>
                <Accordion.Item        >
                    <Accordion.Header>
                        <b>What is Node? How does Node work ? </b>
                    </Accordion.Header>
                    <Accordion.Body>
                        Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return.
                        In the traditional approach to creating web servers, for each incoming request or connection the server spawns a new thread of execution or even forks a new process to handle the request and send a response. Conceptually, this makes perfect sense, but in practice it incurs a great deal of overhead.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;