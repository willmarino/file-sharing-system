

export const loginUser = (user) => {
  return $.ajax({
    method: "POST",
    url: '/api/session',
    data: { user }
  })
}

export const logoutUser = () => (
  $.ajax({
    method: "DELETE",
    url: '/api/session'
  })
)