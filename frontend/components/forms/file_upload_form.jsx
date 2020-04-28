import React from 'react';

class FileUploadForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userFile: {
        file: null,
        name: '',
        description: ''
      },
      status: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlUpload = this.handlUpload.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    formData = new FormData();
    formData.append('file', this.state.userFile.file);
    formData.append('name', this.state.userFile.name);
    formData.append('description', this.state.userFile.description);
  }
  handlUpload(e){
    const fileReader = new FileReader();
    let file = e.currentTarget.files[0];
    fileReader.onloadend = () => {
      let res = fileReader.result
      let userFile = state.userFile;
      userFile.file = res;
      this.setState({ userFile });
    }
    fileReader.readAsDataURL(file);
  }
  update(field){
    return e => {

    }
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit} className='file-upload-form-container'>
        <input type="file"/> 
        <input type="text"/>
        <input type="text"/>
        <input type="submit"/>
      </form>
    )
  }
}

export default FileUploadForm;