import { openDB } from 'idb';



// the data will storage in browser
export async function initCacheDB() {
  // if (!('indexedDB' in window)) {
  //   console.log("This browser doesn't support IndexedDB");
  //   return;
  // }

  // const idb = window.indexedDB.open("cache-system@v1", 1);

  const db = await openDB('cache-system@v1', 1, {
    upgrade(db) {
      // Create a store of objects
      db.createObjectStore("cache", {
        // The 'id' property of the object will be the key.
        // keyPath: "id",
        // If it isn't explicitly set, create a value by auto incrementing.
        autoIncrement: true
      });
    }
  });

  const idbCache = {
    async get(key: string) {
      return db.get("cache", key);
    },
    async set(key: string, val: any) {
      return db.put("cache", val, key);
    },
    async delete(key: string) {
      return db.delete("cache", key);
    },
    async clear() {
      return db.clear("cache");
    },
    async keys() {
      return db.getAllKeys("cache");
    }
  };

  return {
    db, idbCache
  };
}
