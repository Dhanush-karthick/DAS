import React from 'react';

//page footer

export default class Footer extends React.Component{
    render(){
        return(
          <div className="container-fluid" id="footer">
          <footer className="py-3 my-0">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Top Reviews</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Movies A-Z</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Account</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
              <li className="nav-item"><a href="https://www.flaticon.com/free-icons/cinema" className="nav-link px-2 text-muted">Cinema icon created by Good Ware - Flaticon</a></li>
            </ul>
            <p className="text-center text-muted">© 2024 Dhanush, Inc</p>
          </footer>
        </div>
        )
    }
}