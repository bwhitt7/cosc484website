//Home page

import {Link} from "react-router-dom"

function Home() {
  return(
    <div className="Home">
      <Link to="/signup">Sign up here</Link><br></br>
      <Link to="/login">Log in here</Link>
    </div>
  )
}

export default Home;
