// Part 1

import React from "react";

const UserContext = React.createContext()

export default UserContext

/*
all the component under UserContext will have access to 
UserContext Object, thik of it like global variable provider.

<UserContext > 
    <Login />
    <Card>
        <Data/>
    <Card/>
<UserContext />

*/