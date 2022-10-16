import React from "react";

function useLocalStorage(itemName, initialValue) {

  // sumé este useState para mostrar un "cargando" a la vista
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    // Agregé un timeout para que se alcance a ver la carga.
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem = initialValue;
        if (!localStorageItem) {
          localStorageItem.setItem(itemName, JSON.stringify(parsedItem));
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        throw error;
      }
    }, 1000);
  });

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (error) {
      throw error;
    }
  };
  return {
    item,
    saveItem,
    loading,
  }
}
export { useLocalStorage };
