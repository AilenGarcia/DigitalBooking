CREATE DATABASE  IF NOT EXISTS `0223TDPROM1C2LAED0522FT_GRUPO1` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `0223TDPROM1C2LAED0522FT_GRUPO1`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: digitalhouse.cluster-cnyqegjgetrv.us-east-2.rds.amazonaws.com    Database: 0223TDPROM1C2LAED0522FT_GRUPO1
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `tipo` varchar(31) NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `id_roles` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK5i1go2t0eqag1spg3ubr63amq` (`id_roles`),
  CONSTRAINT `FK5i1go2t0eqag1spg3ubr63amq` FOREIGN KEY (`id_roles`) REFERENCES `roles` (`id_roles`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('Users',1,'karencg@gmail.com','Cofone','Karen','$2a$10$q6p00rMYTJBVCHNtp7yJROebs1H3FlEjOa6f.AXHuVDtghPr3ErXS',1),('Client',2,'karencg@gmail.com','Cofone','Karen','$2a$10$q6p00rMYTJBVCHNtp7yJROebs1H3FlEjOa6f.AXHuVDtghPr3ErXS',1),('Users',3,'aileng@gmail.com','Garcia','Ailen','$2a$10$eMBJe2GAi3lyLFOlzPFxo.xyk9RL7uALdoWiJr4I8thUp0zvE9t8S',1),('Users',4,'laurag@gmail.com','Sofia','Laura','$2a$10$jUGk762hz4WSKrnomBc56.zOcW6ZGwJsEKm2xrBJ.y5bhVGyuDiNO',1),('Users',7,'melinav@gmail.com','Valdiviezo','Melina','$2a$10$f.jF7k7fwxH6KBQ8q8D8heqFLnJmjPOy4n8xn7czsc1wc8JVb.Ll2',1),('Users',8,'mati@gmail.com','Aplanat','Matias','$2a$10$roDHjzxmwdag19mH2xEHrO/C9uOtbdaZTYVUc1avKASlP0.dIvk56',1),('Users',9,'holahola@hola.com','rodriguez','maria','$2a$10$62EtVrQC4lDBREmwyJukPOvbLa4I5dq7k88XcIyU1MrsvfkyPdOE6',1),('Users',10,'holahola@hola.com','rodriguez','maria','$2a$10$quLFGDiXRoxYEpOJKUQrZ.bCvJkvPRbpOSYxUKYWByHVSkMCMwzgO',1),('Users',11,'hola1@hola.com','rodriguez','maria','$2a$10$17kXUwSjY8l7RsEbdvbGcuSbIwSCZ41LUV0zO8wuhA6GzKcCvM/Nm',1),('Users',12,'hola1@hola.com','rodriguez','maria','$2a$10$QFac.7bil4wSm9zRMvsn0OI5xHNFlxcy1s9qBCgQ1oyYVPDTvSFMS',1),('Users',13,'hola1@hola.com','rodriguez','maria','$2a$10$6eVtfPbHn6jjYTr68.rw4eSkU.MryWicoLo/QXzYnzO3f7sPu.B.i',1),('Users',14,'hola@hola.com','sosa','maria','$2a$10$whqL6glP6paT3AcDwiinr.Z9b.Roytxxj0Tl5zCez9r0t1RsNzabu',1),('Users',15,'hola1@hola.com','rodriguez','maria ','$2a$10$ddLqbfnHvLlwAJ/rCCswQeClWev9CLIr4.y4TaWNqb0LkYryHbSQi',1),('Users',16,'hola2@hola.com','rodriguez','maria','$2a$10$63X8i3LA7yhaCSp9RxqnZ.ZM/etRo4b.IUu5ozqmMCpXsfn41i7Au',1),('Client',17,'laurag@gmail.com','Sofia','Laura','$2a$10$jUGk762hz4WSKrnomBc56.zOcW6ZGwJsEKm2xrBJ.y5bhVGyuDiNO',1),('Users',18,'hola1@hola.com','rodriguez','maria','$2a$10$imh8g/duXVja7HA1osgiCO/dwsXd7dUB.xnGTkffp7etXCWBtsi52',1),('Users',19,'hola3@hola.com','rodriguez','maria','$2a$10$NF.rlj88JYTeCTAM6EIbIe.Pvb9Ddf72aJ1526FCJ5VurUQ1p0l4G',1),('Client',20,'hola3@hola.com','rodriguez','maria','$2a$10$NF.rlj88JYTeCTAM6EIbIe.Pvb9Ddf72aJ1526FCJ5VurUQ1p0l4G',1),('Users',21,'matiaplanalp10@gmail.com','Aplanalp','MatiAp','$2a$10$Z1UJmlhnsfgrlBMVqJYvZuJNZ.l1F74atL82d19rrYuF7xJ0goQ8m',1),('Users',22,'matiaplanalp10@gmail.com','Aplanalp','MatiAp','$2a$10$cKDkYQQ9ccEk6y2LKxAKuOCf9.3l8WSf3eTtpA.9YgkYCmEz9P9MK',1),('Users',23,'matiaplanalp10@gmail.com','Aplanalp','MatiAp','$2a$10$hrsNId3KVTQO8nSc6ULYcODzBQw5zZhk2n8c0hVsg7HQd0DJyyoiq',1),('Users',24,'askdas@gmail.com','sadasd','asdasd','$2a$10$K1nnyqUeIYHeRbSojQAcuuG4zMnldATZUaDEjbS96ruJIIx5kW1.6',1),('Users',25,'sadasd@gmail.com','sadsadsa','asdsad','$2a$10$M/1zC0p24bqsU2LVdrfyK.N6U/1qj0i1O/.LzxfRNNF5l9mv8U/.q',1),('Client',26,'sadasd@gmail.com','sadsadsa','asdsad','$2a$10$M/1zC0p24bqsU2LVdrfyK.N6U/1qj0i1O/.LzxfRNNF5l9mv8U/.q',1),('Users',27,'aileng@gmail.com','Garcia','Ailen','$2a$10$FOGemSJ39hGj68G7jN.ltOFu/9cimvLKTlfu0B9231PYohrpMxq2O',1),('Users',28,'hola1@hola.com','rodriguez','maria','$2a$10$NmZfBtJnnRtNMlk8cCllk.ohztX8MolOktjLNxbCKhtynKsfmieS2',1),('Users',29,'aileng@gmail.com','Garcia','Ailen','$2a$10$MyAB5SnyHa0UXN3/jeKMdOqzzSGJUBBWrHLKF8LzVe64MXp6knUfe',1),('Users',30,'ailen@gmail.com','Garcia','Ailen','$2a$10$BGZUt2nAuY654wMVCwVGXuazHgqIjE7pRgGzl/hKmrTmsPa9MgRMm',1),('Client',31,'ailen@gmail.com','Garcia','Ailen','$2a$10$BGZUt2nAuY654wMVCwVGXuazHgqIjE7pRgGzl/hKmrTmsPa9MgRMm',1),('Users',32,'admmin@gmail.com','Garcia','Admin','$2a$10$6kOtQb0otO5BX/qTtqhyL.wTwocRQz33sFsZvTP2YanxiDWSosdJK',2),('Users',33,'pedrito@gmail.com','pascal','pedro','$2a$10$zRupjjLwUU2JKeiHe28bYuM9sXgPiR9aBpgYCSXbciWKWgothboVK',1),('Users',34,'malenar@gmail.com','Romero','Malena','$2a$10$JEFF2ReIRwOcOA3oVipZ7.uRHDXN2U4/afV1ecvHtre4nEcGw7inq',1),('Users',35,'ignaciof@gmail.com','Farinola','Ignacio','$2a$10$XRdmacwgc5YJir/SuXl9wuozoEZkyNLpHdl.vhn/5R8IMxHjuIQqm',1),('Users',36,'choni@gmail.com','Bordón','Jonatan','$2a$10$59xtGS24IuMz.nu5mAo4guyABcRPBN2oy2nRqaeNtMrEsZcxei01m',1),('Users',37,'candelac@gmail.com','Cofone','Candela','$2a$10$xf6NyMQcG8GcxVfQuvlTaO9jaIyP3ulcvtzfdpUsZTT4JEkbXP516',1),('Users',38,'sanguchita@gmail.com','Cofone','Sanguchita','$2a$10$JzTRxLlBAJHiHFcZGm6FI.4vdVLMY4ecHIKXWaYSitpBNAydwbE8u',1),('Users',39,'panchita@gmail.com','Cofone','Panchita','$2a$10$/mIQiLr/WU7kDx38OXkOP.4utUh/s4s5/Nfo.A6m2apjE1WGxRnI.',1),('Users',40,'camilad@gmail.com','Duran','Camila','$2a$10$nz2OaI2VEuzg0tV7DM.4DOt1iETSodxmhpg84HDQiFK7i7Pxkbzuy',1),('Users',41,'karen@gmail.com',NULL,'karen','$2a$10$8/DsbCLTen.1VSO14jo0VufA0YAAsPcmdwQJsfT6CytJ/vFaK3P0y',1),('Users',42,'marta@gmai.com',NULL,'Marta','$2a$10$ZuGTN0VUyOkIT7rx6ikC6.dZjcJ5.EabS6GPiYyi4h.kURbvD6PFa',1),('Users',43,'martin@gmail.com',NULL,'Martin','$2a$10$8VXyVMnBOPNyiWUByzui.uG/EQYu0hBgOCC1s8NZlHh.3SK8X2rfO',1),('Users',44,'luis@gmail.com',NULL,'luis','$2a$10$d4uEfiRcqpWd94QxII1VhOyI9rp/809VNw0Ufu9sNyLd/vUNHKQhe',1),('Users',45,'lucasl@gmail.com',NULL,'Lucas','$2a$10$LedDS8MFCKUdGmNX6ZG6w.S/usefzQyfefns94J6CsKUZhgls.cka',1),('Users',46,'julianaj@gmail.com',NULL,'Juliana','$2a$10$qpNOvshF7mzpwtouEFJT2.r5V1XkGW8mXpv/IuoGMmoBCLgNdT1fS',1),('Users',47,'loloholguin89@gmail.com',NULL,NULL,'$2a$10$/XrzMs0yZ5FyFN2aL3Q6gOsqOHghYELuI5/X7kC/XEocvv/qiCfNe',1),('Users',48,'manuelm@gmail.com',NULL,NULL,'$2a$10$E820c6r91yllgbilcKaCz.asblLSFeHShXLFqqhpHPKEB0/la1Ui.',1),('Users',49,'lucasp@gmail.com',NULL,'Lucas','$2a$10$nMK7PHl1MLTZ69gMfHYy8u0Diwl/zR11LdUED/2PYuBKs2TtrjR1e',1),('Users',50,'lucas@gmail.com',NULL,'Lucas','$2a$10$4O/BxEM6zzwmBLwLWmvxfulCsb03eJvwBSGgVxHrSCHgFM/3XaAQS',1),('Users',51,'perezp@gmail.com','Perez',NULL,'$2a$10$UW241c1kGWap8wjAXicgXuGMyXTOltb2ZWXO5rUxCqbwHues2Vkj6',1),('Users',52,NULL,'Perez','Juan','$2a$10$BCLRvqTCwWuKggkOGYkNve4d1XAgahhDNfHMsO4XJb4lzQwmytGuK',1),('Users',53,'loloholguin89@gmail.com',NULL,NULL,'$2a$10$QW93010pwYXu7P4LMDTCg.XrPXhV6YHiUezQdoS19.QEptIH/Irda',1),('Users',54,'loloholguin89@gmail.com',NULL,NULL,'$2a$10$5Vj0S1ixLPNOXneNnUq5GeLA1n2w1gXqw5TkVP19K9IXI4KPYfm2O',1),('Users',55,'lauraholguing89@gmail.com',NULL,NULL,'$2a$10$U45TI9OiRjn4g2Mv1PgDGewogsPpM68BAs4hdAd.GfEHoU5.lcG5a',1),('Users',56,'holaailu@gmail.com',NULL,NULL,'$2a$10$puZkzlIM.mzWmyOBfsh9feDaQPiTWgsFDUxD7.vzXiFO1QV//ROya',1),('Users',57,NULL,NULL,NULL,'$2a$10$ZjpxjXZFThqFUIjJEmBAVOizyD5A1SQRBvLkcXEid1vIQZXNFbD9q',1),('Users',58,'no@gmail.com','NOOOOO','SI','$2a$10$NtG9hWjDFThN4OUQmtb48eRDCFoOYjObWCMR9uGhyUJWsNOWwM7le',1),('Users',59,'holahola@hola.com','Hernandez','Victoria','$2a$10$8UcafSu7ysQ77m1pVwUDKOClK2kbElFLRUj.WRK//RyOZn7mgjUfS',1),('Users',60,'lauraholguing89@gmail.com','Sofia','Laura','$2a$10$9EODCpqVl.VHH3fWe7LOCujgZg15b65uoLHakNgpIyzHWtV34VCY6',1),('Users',61,'bigotes@gmail.com','Holguin','Bigotes','$2a$10$x/oxmxeHQFYjHGJL9d7/oOjyAdnNuQfkzK23YoCd7sai/9fk5.8VO',1),('Users',62,'amarillo@gmail.com','aaaaaaaa','Karen','$2a$10$HufmTmqqPurs5rlAz0IRgOlMuGJHFPI5/ejG/I0nR2D1CBAQn6MHO',1),('Users',63,'juanitajuanes@gmail.com','Juanes','Juanita','$2a$10$Stgcd3scp1QeXOn9MZXoq.zcytbdL.7sQh1k4ajWOVWrQX507C/sK',1),('Users',64,'marcosmarquines@gmail.com','Marquines','Marcos','$2a$10$YqJbHe9rKrfiUGrfQeqAceIaFdyiDkdr3CBnwAiwGBnMI4tHP7zJG',1),('Users',65,'marcosmarquines@gmail.com','Marquines','Marcos','$2a$10$gMtNXBrvwkgN1vpu4hiHe.qvMu81JTlILMWuRcdZeOsqRYG00Sq1O',1),('Users',66,'sofiasofites@gmail.com','Sofites','Sofia','$2a$10$X1xqqtjGK4UXJUtQK0PK4.mZoxJYoZnv0gua9.p1GtNZjft4xDN2G',1),('Users',67,'sofiasofites@gmail.com','Sofites','Sofia','$2a$10$MfiHkqs3Bqsew8wtEj6gkuFFmhcWevSgHJOa.hAYB/A1UOpE7fTgy',1),('Users',68,'sofiasofites@gmail.com','Sofites','Sofia','$2a$10$b7CrQFx7w7F.UxvT67fpk.hWpBy73WLFaKyFfZv7m82a0lnzaUgJu',1),('Users',69,'funcionaloko@gmail.com','loko','funciona','$2a$10$ljQ95D/hAAU0CfSage0w/uO1Tp7/1e0P3RQuazAL5JG4uHnWXLGva',1),('Users',70,'mariomarianitis@gmail.com','Marianitis','Mario','$2a$10$bCBotYBmlpVsCZZMQ47RK.uHoW2LY70NkM/Kcq45ZOFv7kfZZw2R.',1),('Users',71,'spencerr@gmail.com','Reid','Spencer','$2a$10$21Ipp5nE0hkrqv5D9ZBlhu4j.0VtG6IsyumvUj5nZFhD5JiN/NvJO',1),('Users',72,'martalunares@gmail.com','Lunares','Marta','$2a$10$QkG8J51IdObOBxafWRWoz.uZWe0l9PBYOVuQHMzV/M1HJdE1qhCD.',1),('Users',73,'hola1@hola.com','Hernandez','Victoria ','$2a$10$x1.2oreBftHEJf.ywJcd4.yA3zl3FyMEY8hnhdwd7UsLL9Hx2N4FG',1),('Users',74,'jaimejaimito@gmail.com','Jaimito','Jaime','$2a$10$W7WAT8yVcNzX9vNhtTCFxOjBJvwtHXpEoaan0ehgYR2pmKVn710ra',1),('Users',75,'hola1@hola.com','victoria','maria','$2a$10$McX.S/aJJ.eHno5rat9DNeK1eM7RIX3s/yzn.fgeQfXzm82.hkXp.',1),('Users',76,'victoria@gmail.com','Victoria','Maria','$2a$10$K5rFgSrDWT.te3pZT6rKxumGtYLDgKuR73F2soZMzlhZ7waTYWcxG',1),('Users',77,'rodriguez@hola.com','Rodriguez','Victoria','$2a$10$10c6RBnt0ii9rBYPhG1wpOBuE4ZNxIPRi46/rCfXCLcNi5zwtVDTS',1),('Users',78,'aileng@example.com','Garcia','Ailen','$2a$10$Vce08Qub0QZMJ1TvZuOfVu0zEI4702nw3h8xpoZkYRo67CfMHMlwW',1),('Client',79,'aileng@example.com','Garcia','Ailen','$2a$10$Vce08Qub0QZMJ1TvZuOfVu0zEI4702nw3h8xpoZkYRo67CfMHMlwW',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-04 15:05:59
