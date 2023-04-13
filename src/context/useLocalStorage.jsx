import React from 'react';

export const useLocalStorage = (itemName, initialValue) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parseItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parseItem = initialValue;
        } else {
          parseItem = JSON.parse(localStorageItem);
        }
        setItem(parseItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 3000);
  });

  const saveItem = (newItem) => {
    try {
      const stringfyItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringfyItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };
  return { item, saveItem, loading, error };
};
