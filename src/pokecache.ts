type CacheEntry<T> = {
  createdAt: number;
  val: T;
};

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  add<T>(key: string, val: T) {
    this.#cache.set(key, { createdAt: Date.now(), val });
  }

  get<T>(key: string): T | undefined {
    const entry = this.#cache.get(key);
    if (!entry) return undefined;
    return entry.val;
  }

  #reap() {
    let reapDate = Date.now() - this.#interval;
    for (let [key, value] of this.#cache) {
      if (value.createdAt < reapDate) {
        this.#cache.delete(key);
      }
    }
  }

  #startReapLoop() {
    setInterval(() => this.#reap(), this.#interval);
  }

  stopReapLoop() {
    clearInterval(this.#reapIntervalId);
    this.#reapIntervalId = undefined;
  }

  constructor(interval: number) {
    this.#interval = interval;
    this.#startReapLoop();
  }
}
