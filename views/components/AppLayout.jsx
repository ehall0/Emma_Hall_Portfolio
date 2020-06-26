const React = require('react')

class AppLayout extends React.Component {
    render() {
        return(
        
        <html>
            <head>
            
           
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet"/>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            
           <link rel="stylesheet" href ="/css/style.css"/>
            <title>Emma Hall</title>
            
            </head>
                <body  style={{backgroundImage: "linear-gradient(to bottom right, rgba(12, 12, 29, 0.97), rgba(44, 35, 59, 0.7))",display:"flex",flexDirection:"column", textAlign:"center", backgroundRepeat:"no-repeat" , backgroundSize:"cover"}}>
                    <nav id="navigation" className="navbar sticky-top main-nav" style={{background:"rgba(12, 12, 29, 0.7)", justifyContent:"center", fontFamily:'Raleway', fontSize:"1.3rem", paddingTop:"1rem", paddingBottom:"1rem"}}>
                        <a style={{color:"whitesmoke", textDecoration:"none", marginRight:"2.5rem", fontWeight:"bold"}} href="#section1">About</a>
                        <a style={{color:"whitesmoke", textDecoration:"none", fontWeight:"bold", marginRight:"2.5rem"}} href="#section2">Skills</a>
                        <a style={{color:"whitesmoke", textDecoration:"none", fontWeight:"bold", marginRight:"2.5rem"}} href="#section3">Projects</a>
                        <a style={{color:"whitesmoke", textDecoration:"none", fontWeight:"bold"}} href="#section4">Contact</a>
                    </nav>
                    <div id="content">
                    {this.props.children}
                    </div>
                    <footer  className="navbar" style={{background:" rgba(130, 123, 143, 0.3)", justifyContent:"center", fontFamily:'Raleway', fontSize:"1.3rem"}}>
                    <a style={{color:"whitesmoke", textDecoration:"none", fontWeight:"bold", fontSize:"1rem"}} href="https://icons8.com/icon/0Da6k7SMq0hs/react">Icons by Icons8</a>
            
                    </footer>
                </body>
        </html>
      
        )
    }
}
module.exports = AppLayout