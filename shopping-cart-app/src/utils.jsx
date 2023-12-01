import React from "react";

function useLocalStorage(defaultValue, key) {
  const [value, setValue] = React.useState(() => {
    const getLocalStorage = window.localStorage.getItem(key);
    return getLocalStorage !== null ? JSON.parse(getLocalStorage) : defaultValue;
  })

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// const useLocalStorage2 = (key, initialValue) => {
//   const [storedValue, setStoredValue] = React.useState(() => {
//     if (typeof window === 'undefined') {
//       return initialValue;
//     }
//     try {
//       const item = localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//       console.log(error);
//       return initialValue;
//     }
//   });

//   const setValue = value => {
//     try {
//       setStoredValue(value);
//       if (typeof window !== 'undefined') {
//         localStorage.setItem(key, JSON.stringify(value));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return [storedValue, setValue];
// }

export default useLocalStorage;