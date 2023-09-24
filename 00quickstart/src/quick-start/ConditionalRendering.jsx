const isLoggedIn = true;

function AdminPanel(){
    return(
        <h3>This is Admin Panel</h3>
    );
}

function LoginForm(){
    return (
        <h3>This is LoginForm</h3>
    )
}

export default function Condition(){
let content = null;
if(isLoggedIn){
    content = <AdminPanel/>;
}else{
    content = <LoginForm/>;
}
return (
    <div>
        {content}
    </div>
);
}

