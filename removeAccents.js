const slugify = (str) => {
    var map = {
        '-' : ' ',
        '-' : '_',
        'a' : 'á|à|ã|â|ä|Ä|À|Á|Ã|Â',
        'e' : 'é|è|ê|ë|Ë|É|È|Ê',
        'i' : 'í|ì|î|ï|Ï|Í|Ì|Î',
        'o' : 'ó|ò|ô|õ|ö|Ö|Ó|Ò|Ô|Õ',
        'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
        'c' : 'ç|Ç',
        'n' : 'ñ|Ñ'
    };
    
    for (var pattern in map) {
        str = str.replace(new RegExp(map[pattern], 'g'), pattern);
    };

    return str;
};

console.log(slugify("ã, ç, á, â, ä, ë, ï, ö, ü"))