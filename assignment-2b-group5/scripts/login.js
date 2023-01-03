window.addEventListener('load', () => {
    document.getElementById('registerGuardianChecbox').addEventListener('click', guardianCheckListener);
    document.getElementById('loginButton').addEventListener('click', loginClickListener);
    document.getElementById('loginEmail').addEventListener('click', clickListenerEmail);registerButton
    document.getElementById('registerButton').addEventListener('click', registerClickListener);
    guardianCheckListener();
});

var guardianCheckListener = () => {
    const checkbox = document.getElementById('registerGuardianChecbox');
    const fileUpload = document.getElementById('registerCVFile');
    if (checkbox.checked) {
        fileUpload.disabled = false;
    } else {
        fileUpload.disabled = true;
    }
};

var loginClickListener = () => {
    const mail = document.getElementById('loginEmail');
    // TODO: redirect
    if (mail.value.toLowerCase().includes('guardian')) {

    } else if (mail.value.toLowerCase().includes('student')) {

    } else {
        mail.classList.add('redText');
    }
};

var clickListenerEmail = (e) => {
    e.target.classList.remove('redText');
};

var registerClickListener = () => {
    const guardian = document.getElementById('registerGuardianChecbox');
    // TODO: Redirect
    if (guardian.checked) {

    } else {

    }
};