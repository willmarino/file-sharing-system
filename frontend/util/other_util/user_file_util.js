

export const CreateUserFile = (info) => (
  $.ajax({
    method: "POST",
    url: "/api/user_files",
    data: {info}
  })
);
