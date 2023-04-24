
const commonSort = (first: any, second: any, one: 1 | -1) => {
    return first === second ? 0 : first < second ? one : -one
}

// add new function for making hook reusable 
export const SortFunction = (type: "bucket" | "", first: any, second: any, direction: "asc" | "desc", key: string) => {
    switch (type) {
        case "bucket": {
            return bucketSort(first, second, direction, key)
        }
        default: {
            return defaultSort(first, second, direction,)
        }
    }
        
}

const favoritesSort = (first: any, second: any, key: string, one: 1 | -1) => {
    if (first.favorites === second.favorites) {
        return commonSort(first[key], second[key], one)
    } else if (first.favorites) {
        return -1
    } else if (second.favorites) {
        return 1
    } else {
        return commonSort(first[key], second[key], one)
    }
}

export const bucketSort = (first: any, second: any, direction: "asc" | "desc", key: string) => {
    if (direction === "desc") {
        return favoritesSort(first, second, key, 1)
    } else {
        return favoritesSort(first, second, key, -1)
    }
}

// Addet default sort
const defaultSort = (first: any, second: any, direction: "asc" | "desc",) => {
    if (direction === "desc") {
        return commonSort(first, second, 1)
    } else {
        return commonSort(first, second, -1)
    }
}
