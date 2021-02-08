import React from 'react';
import LifeCycleComp from './lifeCycleComp/LifeCycleComp';
import Product from './product/Product';
import StatelessComponent from './StatelessComponent';
import StatefullComponent from './StatefullComponent';
import YtComp from './ytcomponen/YtComp';

class Home extends React.Component {
    state = {
        showComponent: true
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                showComponent:false
            })
        }, 20000)
    }

    render () {
        return (
            <div>

                <StatelessComponent/>

                <StatefullComponent/>
                <hr/>
                <p>Youtube Component</p>
                <YtComp 
                    time="07.11" 
                    title="Breath" 
                    desc="Lyric"/>
                <YtComp 
                    time="08.00" 
                    title="Speakerphone" 
                    desc="Official music video"/>
                <YtComp/>
                <hr/>
                <p>Product</p>
                <Product/>
                <hr/>
                <p>Life cycle component</p>
                {
                    this.state.showComponent
                    ?
                    <LifeCycleComp/>
                    : null
                }
            </div>
        )
    }
}

YtComp.defaultProps = {
    time: "10.00",
    title: "Iridescent",
    desc: "Cover"
}

export default Home;