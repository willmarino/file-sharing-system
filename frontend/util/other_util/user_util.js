

export const signUpUser = (user) => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);

export const searchForUsers = (search) => {
  return(
    $.ajax({
      method: "GET",
      url: '/api/users/search',
      data: { search }
    })
  )
}