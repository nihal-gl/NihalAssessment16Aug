import React from 'react'
import { useNavigate } from "react-router-dom"

function Dashboard() {

    const navigate = useNavigate()
  return (
    <>
    <div className="row">
        <nav class="navbar bg-light">
            <div class="container-fluid">
            <h1 class="navbar-brand">BookStore</h1>
            <form class="d-flex" role="search">
            <button class="btn btn-primary" onClick = {()=>navigate('/booklist')}>Shop More!</button>
            <button className= "btn btn-danger" onClick = {()=>navigate('/')} >Log Out</button>
            </form>
            </div>
        </nav>
                <div className="col-md-4">
                    <div class="card">
                    <img class="card-img-top" src="https://images.news18.com/ibnlive/uploads/2022/01/rishi-sunak.jpg" alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">Rishi</h5>
                        <hr></hr>
                        <p class="card-text">Place: London</p>
                        <hr></hr>
                        <p class="card-text">Course: BTech</p>
                        <hr></hr>
                        <p class="card-text">Phone: 8579624863</p>
                        <hr></hr>
                        
                    </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <h3>Recent Purchases</h3>
                    <div class="card">
                        <h5 class="card-header">Atomic Habits</h5>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">View course</a>
                        </div>
                    </div>
                    <div class="card">
                        <h5 class="card-header">Deep work</h5>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">View course</a>
                        </div>
                    </div>
                    <h3>Wish List</h3>
                    <div class="card">
                        <h5 class="card-header">Think and Grow Rich</h5>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">View course</a>
                        </div>
                    </div>
                    <div class="card">
                        <h5 class="card-header">Rich Dad Poor Dad</h5>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">View course</a>
                        </div>
                    </div>

                </div>
            </div>        
    
    
    </>
  )
}

export default Dashboard