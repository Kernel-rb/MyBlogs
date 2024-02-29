function hh(words) {
    const voyels = ['a', 'e', 'i', 'o', 'u', "y"];
    let conter = 0;
    for (let i = 0; i < words.length; i++) {
        if (voyels.includes(words[i])) {
         conter++
        }
    }
    return conter;
}
console.log(hh("beautiful")); 
console.log(hh("fly"));