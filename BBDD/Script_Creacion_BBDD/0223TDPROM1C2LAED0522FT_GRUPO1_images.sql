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
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id_images` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `id_products` bigint DEFAULT NULL,
  PRIMARY KEY (`id_images`),
  KEY `FKf98kqud2c92acb6awlvr9nv3v` (`id_products`),
  CONSTRAINT `FKf98kqud2c92acb6awlvr9nv3v` FOREIGN KEY (`id_products`) REFERENCES `products` (`id_products`)
) ENGINE=InnoDB AUTO_INCREMENT=190 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'Imagen para Hostales','https://images.pexels.com/photos/3705536/pexels-photo-3705536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',NULL),(2,'Imagen para Hoteles','https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',NULL),(3,'Imagen para Departamentos','https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600',NULL),(4,'Imagen para Bed and Breakfast','https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',NULL),(5,'HOSTAL- Malibú Hostel','https://images.pexels.com/photos/5661024/pexels-photo-5661024.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',4),(6,'HOSTAL- Malibú Hostel','https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',4),(7,'HOSTAL- Malibú Hostel','https://images.pexels.com/photos/3789045/pexels-photo-3789045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',4),(8,'HOSTAL- Malibú Hostel','https://images.pexels.com/photos/3770884/pexels-photo-3770884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',4),(9,'HOSTAL- Malibú Hostel','https://images.pexels.com/photos/3771827/pexels-photo-3771827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',4),(10,'HOTEL- Gran Hotel','https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',3),(11,'HOTEL- Gran Hotel','https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',3),(12,'HOTEL- Gran Hotel','https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',3),(13,'HOTEL- Gran Hotel','https://images.pexels.com/photos/2134224/pexels-photo-2134224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',3),(14,'HOTEL- Gran Hotel','https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',3),(15,'DEPARTAMENTO - Luna azul','https://images.pexels.com/photos/1776574/pexels-photo-1776574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',5),(16,'DEPARTAMENTO - Luna azul','https://images.pexels.com/photos/15667606/pexels-photo-15667606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',5),(17,'DEPARTAMENTO - Luna azul','https://images.pexels.com/photos/1843647/pexels-photo-1843647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',5),(18,'DEPARTAMENTO - Luna azul','https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',5),(19,'DEPARTAMENTO - Luna azul','https://images.pexels.com/photos/15667603/pexels-photo-15667603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',5),(20,'HOTEL - Hotel Grizzly','https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',6),(21,'HOTEL - Hotel Grizzly','https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',6),(22,'HOTEL - Hotel Grizzly','https://images.pexels.com/photos/6032425/pexels-photo-6032425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',6),(23,'HOTEL - Hotel Grizzly','https://images.pexels.com/photos/5379219/pexels-photo-5379219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',6),(24,'HOTEL - Hotel Grizzly','https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',6),(25,'HOSTAL - La Costa','https://images.pexels.com/photos/3705536/pexels-photo-3705536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',7),(26,'HOSTAL - La Costa','https://images.pexels.com/photos/5137556/pexels-photo-5137556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',7),(27,'HOSTAL - La Costa','https://images.pexels.com/photos/9959711/pexels-photo-9959711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',7),(28,'HOSTAL - La Costa','https://images.pexels.com/photos/5137969/pexels-photo-5137969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',7),(29,'HOSTAL - La Costa','https://images.pexels.com/photos/7968275/pexels-photo-7968275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',7),(30,'B&B - Posada del Sol','https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',8),(31,'B&B - Posada del Sol','https://images.pexels.com/photos/6538891/pexels-photo-6538891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',8),(32,'B&B - Posada del Sol','https://images.pexels.com/photos/1843244/pexels-photo-1843244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',8),(33,'B&B - Posada del Sol','https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',8),(34,'B&B - Posada del Sol','https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',8),(35,'DEPARTAMENTO - Palace Hotel','https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600',9),(36,'DEPARTAMENTO - Palace Hotel','https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',9),(37,'DEPARTAMENTO - Palace Hotel','https://images.pexels.com/photos/3555614/pexels-photo-3555614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',9),(38,'DEPARTAMENTO - Palace Hotel','https://images.pexels.com/photos/3288104/pexels-photo-3288104.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',9),(39,'DEPARTAMENTO - Palace Hotel','https://images.pexels.com/photos/10551228/pexels-photo-10551228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',9),(40,'dream1','https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',10),(41,'dream2','https://images.pexels.com/photos/101533/pexels-photo-101533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',10),(42,'dream3','https://images.pexels.com/photos/1172518/pexels-photo-1172518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',10),(43,'dream4','https://images.pexels.com/photos/2255424/pexels-photo-2255424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',10),(44,'dream5','https://images.pexels.com/photos/8480750/pexels-photo-8480750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',10);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
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

-- Dump completed on 2023-04-04 15:05:29
