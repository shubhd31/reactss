//get users from API

const getUsersAPI = async () => {
    const response = await fetch(
        'https://raw.githubusercontent.com/Akash52/mock-json-data/main/users.json',
    );
    const data = await response.json();
    return data;
};

export default { getUsersAPI };