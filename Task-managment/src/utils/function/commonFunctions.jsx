export const ValidEmailId = (value) => {
    return value.includes("@") ? "Valid Email" : "Invalid Email";
};

export const validatePassword = (value) => {
    return value.length >= 6 ? "Strong Password" : "Weak Password";
};

export const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });
};
