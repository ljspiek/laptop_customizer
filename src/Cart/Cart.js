import React, { Component } from 'react'
// import Total from '../Total/Total'


class Cart extends Component {

  render() {
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    const summary = Object.keys(this.props.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.state.selected[feature];

      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    });

    const total = Object.keys(this.props.state.selected).reduce(
      (acc, curr) => acc + this.props.state.selected[curr].cost,
      0
    );

    console.log(this.props)
      return(
          <section className="main__summary">
          <h2>Your cart</h2>
          {summary}
          <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
              {USCurrencyFormat.format(total)}
            </div>
          </div>
        </section>
      )
  }
}

export default Cart