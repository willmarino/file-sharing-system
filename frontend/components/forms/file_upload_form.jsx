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
    formData.append('file', this.state.userFile.file);
    formData.append('name', this.state.userFile.name);
    formData.append('description', this.state.userFile.description);
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
    debugger;
  }
  update(field){
    return e => {
      let userFile = this.state.userFile;
      userFile[field] = e.currentTarget.value;
      this.setState({ userFile });
      // this.setState({ [field] : e.currentTarget.value });
    }
  }
  render(){
    debugger;
    return(
      <form onSubmit={this.handleSubmit} className='file-upload-form-container'>
        <input type="file" onChange={this.handleUpload}/> 
        <input type="text" onChange={this.update('name')} value={this.state.userFile.name}/>
        <input type="text" onChange={this.update('description')} value={this.state.userFile.description}/>
        <input type="submit"/>
      </form>
    )
  }
}

export default FileUploadForm;