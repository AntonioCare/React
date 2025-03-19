export default function UncontrolledLogin() {
  function onLogIn(event) {
    event.preventDefault();
    const username = event.target.elements.namedItem("username").value;
    const password = event.target.elements.namedItem("password").value;
    const checkBox = event.target.elements.namedItem("checkBox").checked;

    const data = {
      username,
      password,
      checkBox,
    };
    console.log(data);
  }
  function loginWithFormData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      checkBox: formData.get("checkBox"),
    };
    console.log(data);
  }
  return (
    <>
      <form onSubmit={onLogIn}>
        <h1>MY Uncontrolled Forms API DOM</h1>
        <input name="username" type="text" placeholder="username" />
        <input name="password" type="password" placeholder="password" />
        <input name="checkBox" type="checkBox" />
        <button>Login</button>
      </form>
      <form onSubmit={loginWithFormData}>
        <h1>MY Uncontrolled Forms FormData</h1>
        <input name="username" type="text" placeholder="username" />
        <input name="password" type="password" placeholder="password" />
        <input name="checkBox" type="checkBox" />
        <button>Login</button>
      </form>
    </>
  );
}
