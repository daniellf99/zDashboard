import Auth from "@aws-amplify/auth";

function signUpButtonHandler() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    signUpUser(email, password);
}

async function signUpUser(email, password) {
    try {
        const { user } = await Auth.signUp({
            username: email,
            password,
            attributes: {
                email
            }
        });
        console.log('Sign up successful.');
        console.log(user);
    } catch (error) {
        console.error('Error signing up.');
        console.error(error);
    }
}

document.getElementById("btnSignUp").addEventListener("click", signUpButtonHandler);