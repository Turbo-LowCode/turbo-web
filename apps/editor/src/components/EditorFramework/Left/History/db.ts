export interface StoreItem {
  id: number
  user: string
  pageSchema: string
  createTime: string
}

class IndexedDBWrapper {
  private dbInstance: IDBDatabase | null
  private dbName: string
  private storeName: string

  constructor(dbName: string, storeName: string) {
    this.dbName = dbName
    this.storeName = storeName
    this.dbInstance = null
  }

  open() {
    return new Promise<void>((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1)

      request.onupgradeneeded = e => {
        this.dbInstance = (e.target as IDBOpenDBRequest).result as IDBDatabase
        this.dbInstance.createObjectStore(this.storeName, { keyPath: 'id' })
      }

      request.onsuccess = (event: Event) => {
        this.dbInstance = (event.target as IDBOpenDBRequest).result as IDBDatabase
        resolve()
      }

      request.onerror = () => {
        reject((request as IDBRequest).error)
      }
    })
  }

  getAll() {
    const db = this.dbInstance
    if (!db) throw new Error('IndexedDBWrapper初始化失败')

    return new Promise<StoreItem[]>((resolve, reject) => {
      const transaction = db.transaction([this.storeName], 'readonly')
      const objectStore = transaction.objectStore(this.storeName)
      const request = objectStore.getAll()

      request.onsuccess = () => {
        const items: StoreItem[] = (request as IDBRequest<StoreItem[]>).result
        resolve(items)
      }

      request.onerror = () => {
        reject((request as IDBRequest).error)
      }

      transaction.oncomplete = () => {
        db.close()
      }
    })
  }

  add(item: StoreItem) {
    const db = this.dbInstance
    if (!db) throw new Error('IndexedDBWrapper初始化失败')

    return new Promise<void>((resolve, reject) => {
      const transaction = db.transaction([this.storeName], 'readwrite')
      const store = transaction.objectStore(this.storeName)
      const request = store.add(item)

      request.onsuccess = () => {
        resolve()
      }

      request.onerror = () => {
        reject((request as IDBRequest).error)
      }

      transaction.oncomplete = () => {
        db.close()
      }
    })
  }

  delete(id: number) {
    const db = this.dbInstance
    if (!db) throw new Error('IndexedDBWrapper初始化失败')

    return new Promise<boolean>((resolve, reject) => {
      const transaction = db.transaction([this.storeName], 'readwrite')
      const store = transaction.objectStore(this.storeName)
      const request = store.delete(id)

      request.onsuccess = () => {
        resolve(true)
      }

      request.onerror = () => {
        reject((request as IDBRequest).error)
      }

      transaction.oncomplete = () => {
        db.close()
      }
    })
  }
}

const dbWrapper = new IndexedDBWrapper('turbo', 'history')

export const getHistoryList = async () => {
  await dbWrapper.open()
  return await dbWrapper.getAll()
}

export const addHistoryRecord = async (record: StoreItem) => {
  await dbWrapper.open()
  return await dbWrapper.add(record)
}

export const deleteHistoryRecord = async (recordId: number) => {
  await dbWrapper.open()
  return await dbWrapper.delete(recordId)
}
