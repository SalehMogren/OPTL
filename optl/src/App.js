import React, {Component} from 'react';
import NavBar from './copmonents/Navbar/Navbar.jsx';
import Background from './copmonents/Background/Background.jsx';
import TimeLine from './copmonents/TimeLine/TimeLine.jsx';
import ReactDOM from 'react-dom';



class App extends Component {
    render(){
        return(
            <div>
                                <Background/>

<header>
                <NavBar/>
                </header>

                <TimeLine/>
                {/* <Footer/> */}
            </div>
        );
    }
}

export default App;