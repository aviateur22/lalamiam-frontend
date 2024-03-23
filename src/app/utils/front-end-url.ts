export default {
  home: {
    url: 'home'
  },
  // Affichage d'une commande
  getCommandUrl: {
    url: 'display-command/store/:storeId/command/:commandId'
  },
  // Sélection produits dans commande
  selectProductsInCommandUrl: {
    url: 'select/product-in-command/store/:storeId/command/:commandId'
  },
  // Affichage des creneaux disponible pour une commande
  getAllSlotsAvailibilityUrl: {
    url: ''
  },
  confirmCommandUrl: {
    url: ''
  },
  notFindUrl: {
    url: 'not-found'
  },
  forbiddenUrl: {
    url: 'forbidden'
  }
}
