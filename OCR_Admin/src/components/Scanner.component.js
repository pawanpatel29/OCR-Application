import React, { Component } from 'react'
import Quagga from 'quagga';

class Scanner extends Component {

  componentDidMount() {
    Quagga.init(
      {
        inputStream: {
          name : 'Live',
          type: 'LiveStream',
          target: document.querySelector('#Barcode'),
          constraints: {
            width: 240,
            height: 180,
            facingMode: 'environment', // or user
          },
        },
        numOfWorkers: 4,
        decoder: {
          readers: ['ean_8_reader'],
        },
        locate: true,
        multiple: false,
        locator: {
          halfSample: true,
          patchSize: 'large', // x-small, small, medium, large, x-large
          // debug: {
          //   showCanvas: false,
          //   showPatches: false,
          //   showFoundPatches: false,
          //   showSkeleton: false,
          //   showLabels: false,
          //   showPatchLabels: false,
          //   showRemainingPatchLabels: false,
          //   boxFromPatches: {
          //     showTransformed: false,
          //     showTransformedBox: false,
          //     showBB: false,
          //   },
          // },
        },
      },
      function(err) {
        if (err) {
          return console.log(err+"yadsfas")
        }
        Quagga.start()
        console.log("qwdc");
      },
    )
    Quagga.onDetected(this._onDetected);
    

  //   Quagga.decodeSingle({
  //     decoder: {
  //         readers: ["code_128_reader"] // List of active readers
  //     },
  //     locate: true, // try to locate the barcode in the image
  //      src: '/barcode_image.png' // or 'data:image/jpg;base64,' + data
  // }, function(result){
  //     if(result.codeResult) {
  //         console.log("result", result.codeResult.code);
  //     } else {
  //         console.log("not detected");
  //     }
  // });


  };  

  
  componentWillUnmount() {
    Quagga.offDetected(this._onDetected)
  }

  _onDetected = (result) => {
    console.log("asdv");
    Quagga.stop();
    console.log(result.codeResult.code);
    this.props.onDetected(result.codeResult.code);

  }

  render() {
    return ( 
      <div>            
        <div id="interactive" className="viewport" onChange={this._onDetected} />
      </div>
    )
    
  }
}

export default Scanner