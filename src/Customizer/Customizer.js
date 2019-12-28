import React, { Component } from 'react'


class Customizer extends Component {
    render() {
        
        return(
            <form className="main__form">
            <h2>Customize your laptop</h2>
            {this.props.features}
          
            <fieldset className="feature" key={this.props.summary.featureHash}>
            <legend className="feature__name">
                <h3>{this.props.summary.feature}</h3>
            </legend>
            {this.props.summary.options}
            </fieldset>
            </form>

          
        )
    }
}

export default Customizer