export const createUserFile = (info) => {
  debugger;
  return(
    $.ajax({
      method: "POST",
      url: "/api/user_files",
      data: info,
      contentType: false,
      processData: false
    })
  )
};
