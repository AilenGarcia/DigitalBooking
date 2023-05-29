-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: db_prod
-- ------------------------------------------------------
-- Server version	8.0.29

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

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `id_cities` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `province` varchar(150) NOT NULL,
  `id_countries` int NOT NULL,
  `coutries_id_countries` int DEFAULT NULL,
  `cities_id_cities` int DEFAULT NULL,
  `countries_id_countries` int DEFAULT NULL,
  PRIMARY KEY (`id_cities`),
  KEY `fk_Cities_Countries_idx` (`id_countries`),
  KEY `FKjsot8o3atrxx3qwyko22khki3` (`coutries_id_countries`),
  KEY `FKiip47bc0hnvd5i3ype3eb34jd` (`cities_id_cities`),
  KEY `FK6g52ht9vornbjm2wfxd0awfe3` (`countries_id_countries`),
  CONSTRAINT `FK6g52ht9vornbjm2wfxd0awfe3` FOREIGN KEY (`countries_id_countries`) REFERENCES `countries` (`id_countries`),
  CONSTRAINT `fk_Cities_Countries` FOREIGN KEY (`id_countries`) REFERENCES `countries` (`id_countries`),
  CONSTRAINT `FKiip47bc0hnvd5i3ype3eb34jd` FOREIGN KEY (`cities_id_cities`) REFERENCES `countries` (`id_countries`),
  CONSTRAINT `FKjsot8o3atrxx3qwyko22khki3` FOREIGN KEY (`coutries_id_countries`) REFERENCES `countries` (`id_countries`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-01 20:55:55
