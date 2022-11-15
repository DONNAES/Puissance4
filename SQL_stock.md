-- envoi de message sur le chat

INSERT INTO `message` (`game_id`, `author_id`, `message` , `message_time`) VALUES 
( '1', '1', 'je suis meilleur que toi !' , CURRENT_TIMESTAMP ),
( '1' , '2', 'tes nul', CURRENT_TIMESTAMP ),
( '1', '3', 'bien joué !' , CURRENT_TIMESTAMP ) ;


-- Afficher les messages des dernières 24 heures

SELECT `message`.`message` as 'message', user.pseudo as 'auteur', message_time as 'time', case when user.user_id = 2 then 'Vrai' else 'Faux' end as estExpediteur
FROM `message`
INNER JOIN user ON `message`.author_id = user.user_id
WHERE message_time > DATE_SUB(NOW(), INTERVAL 24 HOUR) AND message_time <= NOW();

/* enregistrer le score de mon joueur */

/*
SELECT as test FROM score
WHERE game_difficulty = "difficulty" AND game_id = 1 AND player_id = 2
IF EXISTS test 
THEN
UPDATE score
SET game_score = 75, game_date = NOW()
WHERE game_difficulty = "difficulty" AND game_id = 1 AND player_id = 2;
ELSE */
INSERT INTO `score` (`game_id`,`player_id`,`game_difficulty`,`game_score`,`game_date`) VALUES
(1,2,"facile", 75, NOW());

-- recherche de score, filtrage possible 

SELECT game.game_name as "Jeu", user.pseudo as "Joueur", score.game_difficulty as "Difficulté", score.game_score as "Score" score.game_date as "Date" FROM score
INNER JOIN user ON score.player_id = user.user_id
INNER JOIN game on score.game_id = game.game_id
WHERE game.game_name = 'The power of memory'
AND user.pseudo = 'alex'
AND score.game_difficulty = 'facile'

ORDER BY game.game_name ASC, score.game_difficulty, score.game_score;

-- Requête permettant d'afficher les scores

SELECT game.game_name as "Jeu", user.pseudo as "Joueur", score.game_difficulty as "Difficulté", score.game_score as "Score", score.game_date as "Date" FROM score
INNER JOIN user ON score.player_id = user.user_id
INNER JOIN game ON score.game_id = game.game_id
ORDER BY game.game_name ASC, score.game_difficulty, score.game_score;


/* request La requête permettra d’ajouter le jeu « The Power Of Memory » à la base de données */

INSERT INTO `game` (`game_id`, `game_name`) VALUES
(1,'The power of memory');

-- connexion au site

SELECT * FROM user
WHERE email = 'djamel@gmail.fr' 
AND   password = 'abcdefg';

/* mettre à jour le profil une fois connecté */

-- modifier l'email
UPDATE user
SET `email` = 'blabla@gmail.com'
WHERE `email` = 'djamel@gmail.fr' AND `password` = 'abcdefg' AND `user_id` = 3;

-- modifier le mot de passe
UPDATE user
SET `password` = 'pass123'
WHERE `password` = 'abcdefg' AND `user_id` = 3;

/* créer un utilisateur lors de la première inscription */

INSERT INTO `user`(`email`, `password`, `pseudo`, `register`) VALUES
('sofiane@gmail.fr','abcdefg','soso',CURRENT_TIMESTAMP),
('alexandre@gmail.fr','abcdefg','alex',CURRENT_TIMESTAMP),
('djamel@gmail.fr','abcdefg','dja',CURRENT_TIMESTAMP);