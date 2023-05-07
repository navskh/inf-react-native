const { createContext, useState, useContext } = require('react');
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
    children: PropTypes.node,
};

export const useUserContext = () => useContext(UserContext);

export default UserContext;
