(async function init() {
  onSignIn()
})()

async function onSignIn() {
  const button = document.querySelector('.main__button')
  button.addEventListener('click', async () => {
    const username = document.getElementById('email').value
    const password = document.getElementById('password').value

    try {
      const user = await authenticate(username, password)
      setCookie('token', user.id)

    } catch (error) {
      console.log(error)
    }
  })
}