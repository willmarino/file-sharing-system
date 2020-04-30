export const createUserFile = (info) => {
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
