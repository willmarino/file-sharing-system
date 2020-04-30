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
    this.handleUpload = this.handleUpload.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    formData = new FormData();
    formData.append('file', this.state.userFile.file);
    formData.append('name', this.state.userFile.name);
    formData.append('description', this.state.userFile.description);
  }
  handleUpload(e){
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
      this.setState({ [field] : e.currentTarget.value });
    }
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit} className='file-upload-form-container'>
        <input type="file" onChange={this.handleUpload}/> 
        <input type="text" onChange={this.update('name')} value={this.state.name}/>
        <input type="text" onChange={this.update('description')} value={this.state.description}/>
        <input type="submit"/>
      </form>
    )
  }
}

export default FileUploadForm;