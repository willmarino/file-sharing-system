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
    let formData = new FormData();
    formData.append('name', this.state.userFile.name);
    formData.append('description', this.state.userFile.description);
    formData.append('file', this.state.userFile.file);
    this.props.createUserFile(formData);
  }
  handleUpload(e){
    const fileReader = new FileReader();
    let file = e.currentTarget.files[0];
    let that = this;
    fileReader.onloadend = () => {
      let res = fileReader.result
      let userFile = that.state.userFile;
      userFile.file = res;
      that.setState({ userFile });
    }
    fileReader.readAsDataURL(file);
  }
  update(field){
    return e => {
      let userFile = this.state.userFile;
      userFile[field] = e.currentTarget.value;
      this.setState({ userFile });
    }
  }
  render(){
    return(
      <div className='file-upload-window'>
        <form onSubmit={this.handleSubmit} className='file-upload-form-container'>
          <input type="file" onChange={this.handleUpload} className='file-input' /> 
          <input type="text" onChange={this.update('name')} value={this.state.userFile.name} className='medium-width-input'/>
          <input type="text" onChange={this.update('description')} value={this.state.userFile.description} className='medium-width-input'/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default FileUploadForm;