export const validateUsername = username => {
    const input = username;
    return /^[A-Za-z0-9]*$/.test(input) && input.length > 0;
};
