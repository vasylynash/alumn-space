module.exports.validateRegisterInput = (
    username,
    email,
    password,
    yearOfGraduation,
    className
    ) => {
    const errors = {};
    if (username.trim() === '') {
        errors.username = 'Username cannot be empty';
    }
    if (email.trim() === '') {
        errors.email = 'Email cannot be empty';
    } else {
        const regex = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if (!email.match(regex)) {
            errors.email = 'Email is not valid';
        }
    }
    if (password === '') {
        errors.password = 'Pasword cannot be empty';
    }
    if (yearOfGraduation === '') {
        errors.yearOfGraduation = 'Please specify the year';
    }
    if (className === '') {
        errors.className = 'Please specify the class';
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
};

module.exports.validateLoginInput = (username, password) => {
    const errors = {};
    if (username.trim() === '') {
        errors.username = 'Please enter your username';
    }
    if (password.trim() === '') {
        errors.password = 'Please enter your password'
    }

    return {
            errors,
            valid: Object.keys(errors).length < 1
        }
};
