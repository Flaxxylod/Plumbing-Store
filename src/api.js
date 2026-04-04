const API_BASE_URL = 'http://192.168.1.122:8081'; // Ваш IP

export const fetchProducts = () => {
    return fetch(`${API_BASE_URL}/products`).then(res => res.json());
};