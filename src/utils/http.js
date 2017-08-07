export const anonHeaders = () => ({'Content-Type': 'application/json'});

export const authedHeaders = getState => ({
    ...anonHeaders(),
    Authorization: `Token ${getState().auth.data.token}`
});
