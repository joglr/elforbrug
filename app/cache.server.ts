import fs from "fs";
import { join } from "path";
// A cache class that takes a key in the constructor which corresponds to the file name in the .cache directory and a TTL, when the cached item will expire
// e.g. new Cache("my-cache-key", 10 * 1000) corresponds to .cache/my-cache-key.json and will expire after 10 seconds
// The JSON data is wrapped in an object that has a ttl and a value property
// the getItem and setItem methods are used to get and set the value of the cache

export class Cache<T> {
  private key: string;
  private ttl: number;
  private cacheDir: string;
  private cacheFile: string;

  constructor(key: string, ttl: number) {
    this.key = key;
    this.ttl = ttl;
    this.cacheDir = join(__dirname, "..", ".cache");
    this.cacheFile = join(this.cacheDir, `${this.key}.json`);
    console.log("🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳")
    console.log(this.cacheFile)
    console.log("🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳")
  }
  public getItem(): T | null {
    if (!fs.existsSync(this.cacheDir)) {
      fs.mkdirSync(this.cacheDir);
    }
    if (!fs.existsSync(this.cacheFile)) {
      return null;
    }
    const data = fs.readFileSync(this.cacheFile, "utf8");
    if (!data) return null;

    const cacheData = JSON.parse(data) as { ttl: number; value: T };

    // If the cache has expired, clear it and return null
    if (cacheData.ttl < Date.now()) {
        this.clearItem();
        return null;
    }
    return cacheData.value;
  }
  public setItem(value: T): void {
    if (!fs.existsSync(this.cacheDir)) {
      fs.mkdirSync(this.cacheDir);
    }
    const cacheData = {
      ttl: Date.now() + this.ttl,
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
