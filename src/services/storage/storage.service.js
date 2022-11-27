export const setStorageValue = (keyName, keyValue, ttl) => {
  const data = {
    value: keyValue, // store the value within this object
    ttl: Date.now() + ttl * 1000, // store the TTL (time to live)
  };
  // store data in LocalStorage
  localStorage.setItem(keyName, JSON.stringify(data));
};

export const getStorageValue = (keyName) => {
  const data = localStorage.getItem(keyName);
  if (!data) {
    // if no value exists associated with the key, return null
    return null;
  }
  const item = JSON.parse(data);
  // If TTL has expired, remove the item from localStorage and return null
  if (Date.now() > item.ttl) {
    localStorage.removeItem(keyName);
    return null;
  }
  // return data if not expired
  return item.value;
};
