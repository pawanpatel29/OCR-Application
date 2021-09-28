import React from 'react'

import { BlobServiceClient, ContainerClient} from '@azure/storage-blob';


class Results extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blobList: [],
      returnedBlobs:[]
    };
  }


  componentDidMount() {
    this.getBlobsInContainer();
  }

  getBlobsInContainer = async () => {

  const sasToken = process.env.storagesastoken || 'sv=2019-12-12&ss=bfqt&srt=sco&sp=rwdlacupx&se=2021-03-31T15:22:13Z&st=2021-01-01T07:22:13Z&spr=https&sig=FVhtgV8zmhwD6I%2BCUDURS3ghXmP8Q%2FY%2FaP%2BXoW0ShrU%3D'; // SAS token
  const containerName = `ocrappinputimage01`;
  const storageAccountName = process.env.storageresourcename || "ocrfilesharestorageact01"; //Storage resource name
    

  const containerName2 = "ocroutput01";
  const blobServiceClient2 = new BlobServiceClient(`https://${storageAccountName}.blob.core.windows.net/?${sasToken}`);
  const containerClient2 = blobServiceClient2.getContainerClient(containerName2);
  // console.log("test"+containerClient2);

  async function blobToString(blob) {
    const fileReader = new FileReader();
    return new Promise((resolve, reject) => {
      fileReader.onloadend = (ev) => {
        resolve(ev.target.result);
      };
      fileReader.onerror = reject;
      fileReader.readAsText(blob);
    });
}
 
  const returnedBlobs= [];
  // console.log("A"+await containerClient2.listBlobsFlat());
  let i = 1;
  for await (const blob of containerClient2.listBlobsFlat()) {
    // console.log(`Blob ${i++}: ${blob.name}`);
  

  const blobClient = containerClient2.getBlobClient(blob.name);  
  const downloadBlockBlobResponse = await blobClient.download();
  const downloaded = await blobToString(await downloadBlockBlobResponse.blobBody);   
    
    
    returnedBlobs.push(JSON.parse(downloaded))
    // console.log("Downloaded blob content", downloaded);
    this.setState({
      blobList: returnedBlobs
    })
    
  };

  
  
  // this.setState({
  //   blobList: [returnedBlobs]
  // })
  // console.log("c"+this.state.blobList);

  // return returnedBlobs;
}


render() {
return (  
  <div>  
    <div style={{ display: "flex" }}>
        <button className="btn btn-success" style={{ marginLeft: "auto", marginRight:"20px", marginTop:"20px", 'border-radius':'10px' }} onClick={this.getBlobsInContainer}>Refresh</button>
      </div>
      {this.state.blobList && !this.state.blobList.length == 0 ?
      
      <div className="auth-wrapper">
      {this.state.blobList && this.state.blobList.map(item => (
                <div className="card" style={{width: "18rem;"}}>
                <div className="card-body">
                  <div className="active-row" key={item.transaction_id}>                       
                      <h6 className="card-text mb-3" className="card-text_trans" ><p className="card-subtitle text-muted" style={{'font-size':'11px',display: 'inline-block'}}>Transaction ID:&nbsp;&nbsp; </p>{item.transaction_id}</h6> <br/>
                      <p className="card-subtitle text-muted" style={{'font-size':'11px'}}>Image ID: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Supplier Code:</p>                                         
                      <h6 className="card-text mb-3" style={{'font-size':'15px'}}>{item.image_id} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {item.supplier_code}</h6>
                      <p className="card-subtitle text-muted" style={{'font-size':'11px'}}>Transaction Date and Time:</p>
                      <h6 className="card-text" style={{'font-size':'15px'}}>{item.transaction_date_time}</h6>
                  </div>
                </div>
                </div>
              ))}
      </div>
      




      /*{ <table className="table" className="styled-table" border="">
          <tbody>
              <tr>
                  <th>Transaction<br/>ID</th>
                  <th>Image<br/>ID</th>
                  <th>Supplier<br/>Code</th>
                  <th>Transaction<br/>Date and Time</th>
              </tr>              
              {this.state.blobList && this.state.blobList.map(item => (
                  <tr className="active-row" key={item.transaction_id}>
                      <td>{item.transaction_id}</td>
                      <td>{item.image_id}</td>
                      <td>{item.supplier_code}</td>
                      <td>{item.transaction_date_time}</td>
                  </tr>
              ))}
              
          </tbody>
      </table> }*/
     
      :
      'Loading...'
    }
    </div>
    )
}
}

export default Results