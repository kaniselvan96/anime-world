export const FAVORITES_KEY = "favoriteAnimes";

export const getLocalStorage = <T>(key: string): T[] => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const saveLocalStorage = <T>(key: string, items: T[]) => {
  localStorage.setItem(key, JSON.stringify(items));
};

export const addToLocalStorage = <T extends { id?: string | number }>(
  key: string,
  item: T
) => {
  const items = getLocalStorage<T>(key);
  if (!items.find((i) => i.id === item.id)) {
    items.push(item);
    saveLocalStorage(key, items);
  }
};

export const removeFromLocalStorage = <T extends { id?: string | number }>(
  key: string,
  itemId: string | number
) => {
  const items = getLocalStorage<T>(key);
  const updated = items.filter((i) => i.id !== itemId);
  saveLocalStorage(key, updated);
};
