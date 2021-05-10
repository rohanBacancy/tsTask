export const getItemFromStorage = (key: string) => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };

  export const setItemInStorage = (name: string, data: Object) => {
    window.localStorage.setItem(name, JSON.stringify(data));
  };

  export const removeItemFromStorage = (name: string) => {
    window.localStorage.removeItem(name);
  };