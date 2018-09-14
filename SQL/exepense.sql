#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: businessman
#------------------------------------------------------------

CREATE TABLE businessman(
        com_id            Int  Auto_increment  NOT NULL ,
        com_mdp           Varchar (80) NOT NULL ,
        com_nom           Varchar (80) NOT NULL ,
        com_prenom        Varchar (80) NOT NULL ,
        com_datenaissance Date NOT NULL ,
        com_ville         Varchar (80) NOT NULL ,
        com_num           Varchar (80) NOT NULL ,
        com_mail          Varchar (80) NOT NULL ,
        com_sexe          Varchar (80) NOT NULL
	,CONSTRAINT businessman_PK PRIMARY KEY (com_id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: customers
#------------------------------------------------------------

CREATE TABLE customers(
        customer_id        Int  Auto_increment  NOT NULL ,
        customer_firstname Varchar (50) NOT NULL ,
        customer_lastname  Varchar (50) NOT NULL ,
        customer_etp       Varchar (50) NOT NULL ,
        customer_town      Varchar (50) NOT NULL ,
        customer_num       Varchar (50) NOT NULL ,
        customer_mail      Varchar (50) NOT NULL
	,CONSTRAINT customers_PK PRIMARY KEY (customer_id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: expense
#------------------------------------------------------------

CREATE TABLE expense(
        expense_id          Int  Auto_increment  NOT NULL ,
        expense_buisnessman Int NOT NULL ,
        expense_date        Date NOT NULL ,
        expense_type        Varchar (40) NOT NULL ,
        expense_mission     Varchar (40) NOT NULL ,
        expense_tva         Double NOT NULL ,
        expense_amountHT    Double NOT NULL ,
        expense_amountTTC   Double NOT NULL ,
        expense_validate    Int NOT NULL ,
        com_id              Int NOT NULL
	,CONSTRAINT expense_PK PRIMARY KEY (expense_id)

	,CONSTRAINT expense_businessman_FK FOREIGN KEY (com_id) REFERENCES businessman(com_id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: enterprise
#------------------------------------------------------------

CREATE TABLE enterprise(
        etp_id              Int  Auto_increment  NOT NULL ,
        etp_username        Varchar (40) NOT NULL ,
        etp_pass            Varchar (40) NOT NULL ,
        etp_siret           Varchar (80) NOT NULL ,
        etp_dirigeant       Varchar (40) NOT NULL ,
        etp_siege           Varchar (40) NOT NULL ,
        etp_ville           Varchar (40) NOT NULL ,
        etp_num             Varchar (40) NOT NULL ,
        etp_mail            Varchar (40) NOT NULL ,
        etp_dateinscription Date NOT NULL ,
        etp_nbcommerciaux   Int NOT NULL ,
        expense_id          Int NOT NULL
	,CONSTRAINT enterprise_PK PRIMARY KEY (etp_id)

	,CONSTRAINT enterprise_expense_FK FOREIGN KEY (expense_id) REFERENCES expense(expense_id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: employ
#------------------------------------------------------------

CREATE TABLE employ(
        com_id Int NOT NULL ,
        etp_id Int NOT NULL
	,CONSTRAINT employ_PK PRIMARY KEY (com_id,etp_id)

	,CONSTRAINT employ_businessman_FK FOREIGN KEY (com_id) REFERENCES businessman(com_id)
	,CONSTRAINT employ_enterprise0_FK FOREIGN KEY (etp_id) REFERENCES enterprise(etp_id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: manage
#------------------------------------------------------------

CREATE TABLE manage(
        customer_id Int NOT NULL ,
        com_id      Int NOT NULL
	,CONSTRAINT manage_PK PRIMARY KEY (customer_id,com_id)

	,CONSTRAINT manage_customers_FK FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
	,CONSTRAINT manage_businessman0_FK FOREIGN KEY (com_id) REFERENCES businessman(com_id)
)ENGINE=InnoDB;

