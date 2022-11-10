/*-------------------story2_creer_compte-------------------*/

#INSERT 
INTO User 
(email ,password ,nickname ,user_creation) 
VALUES ('mail','mdp','nickname',NOW())

/*-------------------story3_modifier_mdp-------------------*/

#UPDATE User 
SET password = 'mdp' 
WHERE id = 1

/*-------------------story4_sidentifier-------------------*/

#

/*-------------------story5_ajouter_jeu-------------------*/

#

/*-------------------story6_affichage_scores-------------------*/

#
