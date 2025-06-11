export const checkValidData = (email , password) => {
    if (!email || !password) {
        return "Email and Password are required";
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return "Invalid email format";
    }
    
    if (password.length < 6) {
        return "Password must be at least 6 characters long";
    }
    
    return null; 
}