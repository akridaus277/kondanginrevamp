
// Fungsi untuk menyimpan token ke Local Storage
export const setToken = (token) => {
    localStorage.setItem('token', token);
  };
  
  // Fungsi untuk mendapatkan token dari Local Storage
  export const getToken = () => {
    return localStorage.getItem('token');
  };
  
  // Fungsi untuk menghapus token dari Local Storage
  export const removeToken = () => {
    localStorage.removeItem('token');
  };