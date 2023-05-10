export const initAuthForm = {
    email: '',
    password: '',
    passwordConfirm: '',
    isLoading: false,
    disabled: true,
};

export const AuthFormTypes = {
    UPDATE_FORM: 'UPDATE_FORM',
    TOGGLE_LOADING: 'TOGGLE_LOADING',
    RESET: 'RESET',
};

export const authFormReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FORM':
            return { ...state, ...action.payload };
        case 'RESET':
            return initAuthForm;
        case 'TOGGLE_LOADING':
            return { ...state, isLoading: !state.isLoading };
        default:
            return state;
    }
};
