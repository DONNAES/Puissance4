/*-------------------story2_creer_compte-------------------*/

#INSERT 
INTO User 
(email ,password ,nickname ,user_creation) 
VALUES ('mail','mdp','nickname',NOW())

/*-------------------story3_modifier_mdp-------------------*/

#UPDATE User 
SET password = 'mdp' 
WHERE id = 1