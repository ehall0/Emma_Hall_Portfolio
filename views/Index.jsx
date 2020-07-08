const React = require('react');
const AppLayout = require('./components/AppLayout.jsx')

class Index extends React.Component {
  render() {
     
    return (
        <AppLayout>
          <head>    
          <link rel="stylesheet" href ="/css/style.css"/>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
          </head>
            <section id="section1">
              <br/>
                <h1 style={{color:"rgb(200, 200, 200)", fontFamily:'Raleway', fontSize:"7rem", marginTop:"6rem", fontWeight:"bold"}}>Emma Hall</h1>
                <h2 style={{color:"whitesmoke", fontFamily:'Raleway', fontSize:"2rem"}}>Full-Stack Web Developer | Austin, Tx</h2>
                <img style={{filter: "grayscale(100%)" ,width: "15rem", borderRadius:"100%", display:"block", marginLeft:"auto", marginRight:"auto", marginTop:"1.5rem", marginBottom:"1.5rem"}} src="https://ca.slack-edge.com/T0351JZQ0-U0101Q2050T-c604c198d01f-512" alt="Emma Hall" />
                <div style={{width:"30rem", display:"block",marginRight:"auto",marginLeft:"auto"}}>
                     <p style ={{color:"whitesmoke", textDecoration:"none", fontSize:"1.3rem",fontWeight:"bold", fontFamily:'Raleway' }}>Hi ! As a solutions-driven software developer, I take on problems with a creative mindset to deliver efficient and effective solutions. Check out my <a style={{color:"rgba(255, 72, 246)", textDecoration:"none",fontSize:"1.4rem", fontWeight:"bold"}} href="#section3">projects</a> !</p>
                </div>
             </section>
              <section id="section2">
                <br/>
                <h2 style={{color:"whitesmoke", fontFamily:'Raleway', fontSize:"3rem",fontweight:"bold", marginTop:"3rem"}}>Skills</h2>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style={{marginTop:"2.5rem"}}>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                  <img style={{width:'10rem',height:"auto"}}src="https://img.icons8.com/dotty/250/react.png"/>
                <img style={{width:'10rem',height:"auto"}} src="https://img.icons8.com/nolan/250/javascript.png"/>
                <img style={{width:'10rem',height:"auto"}}src="https://img.icons8.com/ios-filled/250/sass.png"/>
                <img style={{width:'10rem',height:"auto"}} src="https://img.icons8.com/windows/256/000000/node-js.png"/>
              </div>
               <div class="carousel-item">
               <img style={{width:'10rem',height:"auto"}} src="https://img.icons8.com/color/240/000000/npm.png"/>
                <img style={{width:'10rem',height:"auto"}} src="https://img.icons8.com/nolan/250/css-filetype.png"/>
                <img style={{width:'10rem',height:"auto"}}  src="https://img.icons8.com/color/240/000000/python.png"/>
                <img style={{width:'10rem',height:"auto"}} src="https://img.icons8.com/fluent/240/000000/github.png"/>
              </div>
               <div class="carousel-item">
                <img style={{width:'10rem',height:"auto"}} src="https://img.icons8.com/color/240/000000/bootstrap.png"/>
                <img style={{width:'10rem',height:"auto"}} src="https://img.icons8.com/material-sharp/250/django.png"/>
                <img  style={{width:'10rem',height:"auto"}} src="https://img.icons8.com/color/240/000000/mongodb.png"/>
                <img style={{width:'10rem',height:"auto"}} src="https://img.icons8.com/color/240/000000/postgreesql.png"/>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
              
            </div>
            </section>
            <section id="section3">
            <br/>
            <h2 style={{color:"whitesmoke", fontFamily:'Raleway', fontSize:"3rem",fontweight:"bold", marginTop:"3rem"}}>Projects</h2>
            <h2 style={{color:"whitesmoke", fontFamily:'Raleway', fontSize:"1.5rem",fontweight:"bold", marginBottom:"3rem"}}>Check out the first projects I created during my fellowship at <a style={{ color:"whitesmoke"}}href="https://generalassemb.ly/"> General Assembly</a></h2>
                {
                   this.props.projects.map((project, i) => {
                    return (
                      <div style={{borderBottom:" solid rgba(44, 35, 59, 0.3))", marginLeft:"8rem", marginRight:"8rem",minWidth:"50rem", backgroundImage:"linear-gradient(to right , rgba(12, 12, 29, 0.97), rgba(44, 35, 59, 0.01))", marginBottom:"1rem"}}class="media">
                    <img style={{width:"25rem"}}src={project.image} class="align-self-center mr-3" alt={project.title}/>
                    <div style={{color:"whitesmoke", fontFamily:'Raleway', fontSize:"1.3rem", textAlign:"right", paddingTop:"1rem"}} class="media-body">
                      <h5 style={{fontSize:"1.5rem", fontWeight:"bold"}}class="mt-0">{project.title}</h5>
                      <p>{project.description}</p>
                      
                          <a href={project.code} style={{backgroundImage:"linear-gradient(to bottom right, rgb(68, 68, 248), rgb(158, 49, 158))", border:"none", fontWeight:"bold"}}className="btn btn-primary">View Code <img style={{width:'1.2rem',height:"auto"}} src="https://img.icons8.com/fluent/240/000000/github.png"/></a>
                          <a  style={{backgroundImage:"linear-gradient(to bottom right, rgb(68, 68, 248), rgb(158, 49, 158))", border:"none", fontWeight:"bold", marginLeft:"1rem"}}href={project.deployment} className="btn btn-primary">View App</a>
                          

                    </div>
                   </div>
                     
     
                        )
                    })
                }
                <div style={{borderBottom:" solid rgba(44, 35, 59, 0.3))", marginLeft:"8rem", marginRight:"8rem",minWidth:"50rem", backgroundImage:"linear-gradient(to right , rgba(12, 12, 29, 0.97), rgba(44, 35, 59, 0.01))", marginBottom:"1rem"}}class="media">
                    <img style={{width:"25rem"}}src='https://github.com/ehall0/Emma_Hall_Portfolio/raw/master/jobmanager.png' class="align-self-center mr-3" alt='Job Manager'/>
                    <div style={{color:"whitesmoke", fontFamily:'Raleway', fontSize:"1.3rem", textAlign:"right", paddingTop:"1rem"}} class="media-body">
                      <h5 style={{fontSize:"1.5rem", fontWeight:"bold"}}class="mt-0">Job Manager</h5>
                      <p>An app made for managing jobs within a company. This is a MERN stack application using react hooks. </p>
                      
                          <a href='https://github.com/ehall0/task-manager-frontend' style={{backgroundImage:"linear-gradient(to bottom right, rgb(68, 68, 248), rgb(158, 49, 158))", border:"none", fontWeight:"bold"}}className="btn btn-primary">View Code <img style={{width:'1.2rem',height:"auto"}} src="https://img.icons8.com/fluent/240/000000/github.png"/></a>
                          <a  style={{backgroundImage:"linear-gradient(to bottom right, rgb(68, 68, 248), rgb(158, 49, 158))", border:"none", fontWeight:"bold", marginLeft:"1rem"}}href='http://localhost:3000/jobs' className="btn btn-primary">View App</a>
                          

                    </div>
                   </div>
            </section>
        <section id="section4">
        <div class="jumbotron jumbotron-fluid" style={{color:"whitesmoke", fontFamily:'Raleway',background:"linear-gradient( rgba(12, 12, 29, 0.97), rgba(44, 35, 59, 0.7))", marginBottom:"0rem"}} >
  <div class="container">
    <h1 class="display-4">Contact Me</h1>
    <div style={{fontWeight:"bold", fontSize:"1.3rem"}}>
    <p >Reach out to me on LinkedIn, or by Phone / Email</p>
    <span>ehallforex@gmail.com</span><span>  |  </span>
    <span>(409)-692-1650</span><span> | </span>
   <a href="https://www.linkedin.com/in/emmaehall/"><img style={{width:"3rem"}} src="https://img.icons8.com/nolan/256/linkedin.png"/></a>
   </div>
  </div>
</div>
        </section>
        </AppLayout>);
  }
}

module.exports = Index;