export const createUserFile = (info) => (
  $.ajax({
    method: "POST",
    url: "/api/user_files",
    data: info,
    contentType: false,
    processData: false
  })
);


export const fetchFiles = () => (
  $.ajax({
    method: "GET",
    url: '/api/user_files'
  })
)