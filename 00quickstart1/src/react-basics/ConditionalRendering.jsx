const isLoggedIn = false;

function AdminPanel() {
    return (<h2>This is admin panel.</h2>)
}

function LoginForm() {
    return (
        <h2>This is Login Form.</h2>
    )
}


export default function Conditional() {
    let content = null;
    if (isLoggedIn) {
        content = <AdminPanel />
    } else
        content = <LoginForm /> 
    return (
    <>
        {content}
    </>
    )
}
