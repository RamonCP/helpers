const fruits = ["Maçã", "Banana", "Manga", "Goiaba", "Maracujá", "Uva"]

// Remove todos os itens antes do index 4
const removedFruits = fruits.splice(4)
/*
    Resultado:
    fruits fica [ 'Maçã', 'Banana', 'Manga', 'Goiaba' ]
    
    [ 'Maracujá', 'Uva' ] foram removidos
*/


// Remove todos os itens do index 1 ao index 4
// const removedFruits = fruits.splice(1, 4)
/*
    Resultado:
    fruits fica [ 'Maçã', "Uva" ]
    
    [ 'Banana', 'Manga', 'Goiaba', 'Maracujá' ] foram removidos
*/


// Substitui um item do array no index 4 por Mamão
// const removedFruits = fruits.splice(4, 1, "Mamão")
/*
    Resultado:
    fruits fica [ 'Maçã', 'Banana', 'Manga', 'Goiaba', 'Mamão', 'Uva' ]
    
    'Maracujá' foi substituido por 'Mamão'
*/


// Substitui um item do array no index 4 por Melância e Mexirica
// const removedFruits = fruits.splice(4, 1, "Melância", "Mexirica")
/*
    Resultado:
    fruits fica [ 'Maçã',
                'Banana',
                'Manga',
                'Goiaba',
                'Melância',
                'Mexirica',
                'Uva'
            ]
    
    'Maracujá' foi substituido por 'Melância' e 'Mexirica'
*/


// Adiciona Pêssego e Pêra no index 4
// const removedFruits = fruits.splice(4, 0, "Pêssego", "Pêra")
/*
    Resultado:
    fruits fica [ 'Maçã',
                'Banana',
                'Manga',
                'Goiaba',
                'Pêssego',
                'Pêra',
                'Maracujá',
                'Uva' 
            ]
    
    'Pêssego' e 'Pêra' foram adicionados
*/


console.log(fruits, removedFruits)