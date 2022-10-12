import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog bg-pink-100">
      <div>
        <h1 className="text-5xl font-bold mb-5 text-purple-500">
          Frequently Ask Question
        </h1>
        <h3 className="text-4xl font-bold text-left text-purple-500">
          What is the purpose of react router?
        </h3>
        <p className="text-left mb-4 text-xl">
          ReactJS Router is mainly used for developing Single Page Web
          Applications. React Router is used to define multiple routes in the
          application. When a user types a specific URL into the browser, and if
          this URL path matches any 'route' inside the router file, the user
          will be redirected to that particular route.React Router is a standard
          library system built on top of the React and used to create routing in
          the React application using React Router Package. It provides the
          synchronous URL on the browser with data that will be displayed on the
          web page. It maintains the standard structure and behavior of the
          application and mainly used for developing single page web
          applications.
        </p>
      </div>
      <div>
        <h3 className="text-4xl font-bold text-left text-purple-500">
          How does Context API work?
        </h3>
        <p className="text-left mb-4 text-xl">
          Context provides a way to pass data through the component tree without
          having to pass props down manually at every level.Context is designed
          to share data that can be considered “global” for a tree of React
          components, such as the current authenticated user, theme, or
          preferred language.React.createContext() is all you need. It returns a
          consumer and a provider. Provider is a component that as it's names
          suggests provides the state to its children. It will hold the "store"
          and be the parent of all the components that might need that store.
          Consumer as it so happens is a component that consumes and uses the
          state.
        </p>
      </div>
      <div>
        <h3 className="text-4xl font-bold text-left text-purple-500">
          Write details about useRef hook?
        </h3>
        <p className="text-left text-xl">
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly.If we tried
          to count how many times our application renders using the useState
          Hook, we would be caught in an infinite loop since this Hook itself
          causes a re-render. To avoid this, we can use the useRef Hook.useRef()
          only returns one item. It returns an Object called current. When we
          initialize useRef we set the initial value: useRef(0).
        </p>
      </div>
    </div>
  );
};

export default Blog;
