export const priceFormatted = value => {
    //L'objet Intl.NumberFormat est un constructeur permettant de créer des objets pour formater des nombres en fonction de la locale.
    //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
    return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
    }).format(value)
}