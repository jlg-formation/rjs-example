const LoginView = () => {
  return (
    <main>
      <h1>Login</h1>
      <form>
        <label>
          <span>Login</span>
          <input type="text" name="login" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="password" />
        </label>
        <button className="primary">Se connecter</button>
      </form>
    </main>
  )
}

export default LoginView
