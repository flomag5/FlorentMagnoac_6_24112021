//--- Définition de la logique de routing pour la ressource sauce ---//

// Importation express
const express = require('express');

// Création du routeur pour les routes "sauces"
const router = express.Router();

// Import du middleware d'authentification pour vérification des tokens
const auth = require('../middleware/auth');
// Import de gestion des fichiers téléchargés
const multer = require('../middleware/multer-config');

// Import du controller pour sauces
const saucesCtrl = require('../controllers/sauces');

// Routes CRUD avec middleware d'authentification
router.post('/', auth, multer, saucesCtrl.createSauce);
router.get('/', auth, saucesCtrl.getAllSauces);
router.get('/:id', auth, saucesCtrl.getOneSauce);
router.put('/:id', auth, multer, saucesCtrl.modifySauce);
router.delete('/:id', auth, saucesCtrl.deleteSauce);
router.post('/:id/like', auth, saucesCtrl.likeSauce);


// Exportation du module de router
module.exports = router;

