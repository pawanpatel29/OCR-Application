import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Scanner from './Scanner.component';
import Quagga from 'quagga'; 

class Barcode extends Component {
  state = {
    scanning:true,
    isDetected: false
  }

  _scan = () => {
    this.setState({ scanning: !this.state.scanning })
  }

  _onDetected = (result) => {
   
    console.log("fadsf"+result);
    this.props.getBarcodeResult(result);
    this.setState({
        isDetected : true,
        scanning: false
      })

      


  }

  render() {
     const {scanning} = this.state
    return (
      <div>          
        {/* <button onClick={this._scan}>
          {this.state.scanning ? 'Stop' : 'Start'}
        </button> */}
        {/* <ul className="results">
          {this.state.results.map((result, i) => (
            <Result key={result.codeResult.code + i} result={result} />
          ))}
        </ul> */}

        { scanning ? <Scanner onDetected={this._onDetected} /> : ''}
      </div>
    )
  }
}

export default Barcode