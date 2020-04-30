

export const createUserFile = (info) => (
  $.ajax({
    method: "POST",
    url: "/api/user_files",
    data: {info}
  })
);
