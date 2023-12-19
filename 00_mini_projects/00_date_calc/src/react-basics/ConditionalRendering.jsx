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
    // let content = null;
    // if (isLoggedIn) {
    //     content = <AdminPanel />
    // } else
    //     content = <LoginForm /> 
    // return (
    // <>
    //     {content}
    // </>
    // )
    return (<div>
        {isLoggedIn ? (
            <AdminPanel />
        ) : (
            <LoginForm />
        )}
    </div>)

    // When you don’t need the else branch, you can also use a shorter logical && syntax:

    // return (<div>
    //     {isLoggedIn && <AdminPanel />}
    // </div>)

}
