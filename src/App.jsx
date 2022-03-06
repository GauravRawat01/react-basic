import './styles.css';
import React from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aChecked: false,
            bChecked: false
        }
    }

    checkedA = (checkedStatus) => {
        this.setState({ aChecked: checkedStatus })
    }

    checkedB = (checkedStatus) => {
        this.setState({ bChecked: checkedStatus })
    }

    render() {
        return (
            <div>
                Hello World
                <ComponentA boxChecked={this.checkedA} />
                <ComponentB boxChecked={this.checkedB} />
                <ComponentC aChecked={this.state.aChecked} bChecked={this.state.bChecked} />
            </div>
        );
    }
}

export default App;