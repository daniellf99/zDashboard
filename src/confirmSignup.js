import Auth from "@aws-amplify/auth";

function confirmSignUpButtonHandler() {
    const email = document.getElementById("email").value;
    const code = document.getElementById("code").value;
    confirmSignUpUser(email, code);
}

async function confirmSignUpUser(email, code) {
    try {
        await Auth.confirmSignUp(email, code);
        console.log('Sign up confirmed');
    } catch (error) {
        console.error('Error confirming sign up');
        console.error(error);
    }
}

document.getElementById("btnConfirm").addEventListener("click", confirmSignUpButtonHandler);