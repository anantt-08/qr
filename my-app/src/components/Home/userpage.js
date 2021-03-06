import React ,{Component} from 'react';
import QRCode from "qrcode.react";
import Alert from '@material-ui/lab/Alert';

class Homepage extends Component {


  constructor(props) {
    super(props);
    this.state={
      bgcolor:"#0063B2FF",
      fgcolor:"#9CC3D5FF",
      size:270
    }
  }


  render() {
           const DownloadQr =() => {
  this.setState({
      bgcolor: "#FFFFFF",
      fgcolor:  "#000000",
      size:270
    });
   yoho();
}
const yoho = () =>{
  setTimeout(() => {
    const canvas = document.getElementById(this.props.id);
  const pngUrl = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
  let downloadLink = document.createElement("a");
  downloadLink.href = pngUrl;
  downloadLink.download = this.props.name+".png";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
  this.setState({
      bgcolor: "#0063B2FF",
      fgcolor:  "#9CC3D5FF",
      size:270
    });
       }, 1000);
  
}
    
    return (    
        <div>          
         <QRCode
    id={this.props.id}
    value={this.props.id}
    size={this.state.size}
    level={"H"}
    includeMargin={true}
  bgColor={this.state.bgcolor}
  fgColor={this.state.fgcolor}
  />
  <br /><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <u><a onClick={DownloadQr} style={{fontWeight:"bold",fontSize:"20px",color:"brown"}}>Download QRCode</a></u>
<Alert variant="filled" severity="error" className="m-2">
    DO Not Share Your QRCode With Anyone!
  </Alert>
  </div>
     
    );
  }
}    

    
export default Homepage;  

