import * as React from 'react';

export default class UploadButton extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      selectedFile: null
    };
  }
  onFileChange = (event: React.FormEvent<HTMLInputElement>) => { 
    // Update the state 
    console.log(event.target);
    this.setState({ selectedFile: event.target });
  };

  render() {
    return (
      <>
        <input type="file" onChange={this.onFileChange} />
        <button>UPLOAD</button>
      </>
    );
  }
}