export function getExcludedIndexes<T>(lista: T[]): number[] {
    const excludedIndexes: number[] = [];
    const total = lista.length;
    const divider = Math.floor(total / 4);

    for (let i = 0; i < total; i++) {
      if (i % divider !== 0) {
        excludedIndexes.push(i);
      }
    }

    return excludedIndexes;
  }