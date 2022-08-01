import ReactDOM from 'react-dom';
import React from 'react';
import './style.css';

// (React(console.log))

// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// function Navbar() {
//     return(
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar w/ text</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarText">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Features</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Pricing</a>
//                 </li>
//                 </ul>
//                 <span className="navbar-text">
//                 Navbar text with an inline element
//                 </span>
//             </div>
//         </nav>

//     )
// }

// function MainContent() {
//     return (
//         <h1>Hey, I'm learning react</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//         <Navbar/>
//         <MainContent/>
//     </div>,
//     document.getElementById("root")
// )

//   vanilla Javascript
// const h1 = document.createElement("h1")
// h1.textContent = "This ia an imperative way of programing"
// h1.className = "header"
// document.getElementById("root").append(h1)
//  const element = <h1 className="header">This is JSX</h1>
//  console.log(element);
// JSX
// const navbar = (
//    <nav>
//       <h1>Donut castle</h1>
//       <ul>
//         <li>Menu</li>
//         <li>Pricing</li>
//         <li>About</li>
//       </ul>
//    </nav>
// )

//    ReactDOM.createRoot(document.getElementById("root")).render(navbar)

// const webPage = (
//    <div>
//       <h1>My Page</h1>
//       <p>Welcome to my Page</p>
//       <span>What are you looking for?</span>
//       <button className="btn btn-primary">Click here</button>
//    </div>
// )

// ReactDOM.createRoot(document.getElementById("root")).render(webPage)

// const firstProject = (
//    <div className="parentElemrnt">
//       <img src="./react_logo-512.webp" className="img"></img> 
//       <h1>Fun facts about React</h1>
//       <ul>
//          <li>Was first released in 2013</li>
//          <li>Was originally created by Jordan Walke</li>
//          <li>Has well over 100k stars on github</li>
//          <li>Is maintained by facebook</li>
//          <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//    </div>
// )
 
// ReactDOM.createRoot(document.getElementById("root")).render(firstProject)

function Header() {
  return(
     <div>
        <header className="head">
           <nav className="nav">
              <img src="./logo512.png" className="img navBrand"></img> 
              <ul className="navItem">
                 <li>About</li>
                 <li>Pricing</li>
                 <li>Contact</li>
              </ul>     
           </nav>   
        </header>
     </div>
  )
}


function MainContent() {
   return(
      <div className="parentElement">
         <h3>Three reasons why I love React</h3>
         <ol>
            <li>It is composable</li>
            <li>It is Declarative</li>
            <li>It is Imperative</li>
         </ol>
     </div>
   )
   
}

function Footer() {
   return(
      <div>
        <footer className="footer"><small>© 2022 Slab development. All rights reserved.</small> </footer>
     </div>
   )
}

function TempoaryElement() {
   return (
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
      
   )
}

ReactDOM.createRoot(document.getElementById("root")).render(<TempoaryElement /> )
