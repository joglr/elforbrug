import fs from "fs";
import { join } from "path";
import tempDir from "temp-dir"
// A cache class that takes a key in the constructor which corresponds to the file name in the .cache directory and a TTL, when the cached item will expire
// e.g. new Cache("my-cache-key", 10 * 1000) corresponds to .cache/my-cache-key.json and will expire after 10 seconds
// The JSON data is wrapped in an object that has a ttl and a value property
// the getItem and setItem methods are used to get and set the value of the cache

const cacheDir = join(tempDir, "elforbrug", ".cache")
console.log("Using temp dir:", cacheDir);

export class Cache<T> {
  private key: string;
  private ttl: number | null;
  private cacheFile: string;

  constructor(key: string, ttl: number | null = null) {
    this.key = key;
    this.ttl = ttl;
    this.cacheFile = join(cacheDir, `${this.key}.json`);
  }
  public getItem(): T | null {
    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir, { recursive: true });
    }
    if (!fs.existsSync(this.cacheFile)) {
      return null;
    }
    const data = fs.readFileSync(this.cacheFile, "utf8");
    if (!data) return null;

    const cacheData = JSON.parse(data) as { ttl: number; value: T };

    // If the cache has expired, clear it and return null
    if (cacheData.ttl && cacheData.ttl < Date.now()) {
      if (process.env.NODE_ENV !== "development") {
        this.clearItem();
      }
      return null;
    }
    return cacheData.value;
  }

  public async getOrFetchItem(getter: () => Promise<T>): Promise<T> {
    if (process.env.NODE_ENV !== "development") return await getter();
    const cachedItem = this.getItem();
    if (cachedItem) return cachedItem;
    const item = await getter();
    this.setItem(item);
    return item;
  }

  public setItem(value: T): void {
    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir);
    }
    const cacheData = {
      ttl: this.ttl === null ? null : Date.now() + this.ttl,
      value: value,
    };
    fs.writeFileSync(this.cacheFile, JSON.stringify(cacheData));
  }
  public clearItem(): void {
    if (fs.existsSync(this.cacheFile)) {
      fs.unlinkSync(this.cacheFile);
    }
  }
}
