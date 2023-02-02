import React from 'react'
import Button from './buton'
import Component1 from './InputComponent1'
import Component2 from './InputComponent2'
import SocialCard from './SocialCard'
function Body(){
    return(
    <div class="">
        <Component1/>
        <Component2/>
        <Button/>
        <div>
            <SocialCard name="Facebook" id="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" />
            <SocialCard name="Google" id="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png"/>
            <SocialCard name="Apple" id="https://static.vecteezy.com/system/resources/previews/002/520/838/original/apple-logo-black-isolated-on-transparent-background-free-vector.jpg"/>
        </div>

    </div>
    )
}
export default Body