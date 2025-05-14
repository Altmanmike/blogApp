export default function fetchutils(util) {
    return fetch('https://dummyjson.com/'+util)
        .then(res => res.json());
}