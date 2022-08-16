import React from "react";
class Booklist extends React.Component{
    constructor(props){
        super(props)
        this.state={
            productDetails:[],
            search:'',
            result:[]
        }
    }
    static getDerivedStateFromProps(props,state){
        return {productDetails:props.data}
    }
    handleChange=(event)=>{

        console.log(event.target.value)
        this.setState({search:event.target.value})
    }
    handleSearch=(event)=>{
        event.preventDefault()
      let data=this.state.productDetails.filter((item)=>item.author===this.state.search)
       this.setState({result:data}) 
    }
    render(){
      
        return(
            <div>
                <nav class="navbar bg-light">
            <div class="container-fluid">
            <h1 class="navbar-brand">BookStore</h1>
            <form class="d-flex" role="search">
            <a class="btn btn-primary" href="http://localhost:3000/dashboard">Go to Dashboard</a>
            <a className= "btn btn-danger" href="http://localhost:3000">Log Out</a>
            </form>
            </div>
        </nav>
                <form>
                    <input className="sbar" type='text' placeholder="search author!" onChange={(e)=>this.handleChange(e)}></input>
                    <button className="sb btn btn-success" onClick={(e)=>this.handleSearch(e)}>search</button>
                </form>
                <div className="row">
                    <div className="col-md-6">
                        <h5>All Books</h5>
                        {
                    this.state.productDetails.map((item)=>(
                        <div className="row">
                            
                            <div class="card">
                                <div className="col-md-4">
                                <img src={item.pic} class="card-img-top card-pic" alt="..."></img>
                                </div>
                                <div className="col-md-8">
                                    <div class="card-body">
                                    <h5 class="card-title">{item.pName}</h5>
                                    <p class="card-text">Rs. {item.price}</p>
                                    <p class="card-text">Author: {item.author}</p>
                                    <a href="#" class="btn btn-primary">Add to cart</a>
                                </div>
                                </div>
                            </div>
                           
                        
                        </div>
                    ))
                }
                    </div>
                    <div className="col-md-6">
                        <h5>Search Result</h5>
                        {
                    this.state.result.map((item)=>(
                        <div className="row">
                            
                        <div class="card">
                            <div className="col-md-4">
                            <img src={item.pic} class="card-img-top card-pic" alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <div class="card-body">
                                <h5 class="card-title">{item.pName}</h5>
                                <p class="card-text">Rs. {item.price}</p>
                                <p class="card-text">Author: {item.author}</p>
                                <a href="#" class="btn btn-primary">Add to cart</a>
                            </div>
                            </div>
                        </div>
                       
                    
                    </div>
                    ))
                }
                    </div>
                </div>
                
                
                
            </div>
        )
    }
}
export default Booklist