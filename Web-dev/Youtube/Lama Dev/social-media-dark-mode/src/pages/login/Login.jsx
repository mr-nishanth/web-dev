import "./login.scss"

const Login = () => {
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Black Media</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat repellat soluta inventore? Assumenda hic dolore aliquam doloremque deserunt doloribus!</p>
                    <span>Don't you have an account ?</span>
                    <button>Register</button>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form >
                        <input type="text" name="" id="" placeholder="Username" />
                        <input type="password" name="" id="" placeholder="Password" />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login