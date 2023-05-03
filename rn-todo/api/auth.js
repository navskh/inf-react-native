const EMAIL = 'my@email.com';
const PASSWORD = '1234';

export const signIn = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === EMAIL && password === PASSWORD) {
                resolve(email);
            } else {
                reject('The Email or password is wrong');
            }
        }, 1000);
    });
};
