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
-- Table structure for table `products_characteristics`
--

DROP TABLE IF EXISTS `products_characteristics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_characteristics` (
  `products_id_products` bigint NOT NULL,
  `characteristics_id_characteristics` bigint NOT NULL,
  KEY `FK5jwxy0gfm9u5tplambusd97lf` (`characteristics_id_characteristics`),
  KEY `FK9vkqlkd5oqmq76tssym7hlx5n` (`products_id_products`),
  CONSTRAINT `FK5jwxy0gfm9u5tplambusd97lf` FOREIGN KEY (`characteristics_id_characteristics`) REFERENCES `characteristics` (`id_characteristics`),
  CONSTRAINT `FK9vkqlkd5oqmq76tssym7hlx5n` FOREIGN KEY (`products_id_products`) REFERENCES `products` (`id_products`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_characteristics`
--

LOCK TABLES `products_characteristics` WRITE;
/*!40000 ALTER TABLE `products_characteristics` DISABLE KEYS */;
INSERT INTO `products_characteristics` VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(2,1),(2,2),(2,3),(2,5),(2,6),(3,1),(3,2),(3,3),(3,5),(3,6),(3,7),(4,1),(4,2),(4,3),(4,4),(4,5),(4,6),(5,1),(5,2),(5,3),(5,4),(5,5),(5,6),(6,1),(6,2),(6,3),(6,4),(6,5),(6,6),(6,7),(7,1),(7,2),(7,3),(7,4),(7,6),(8,1),(8,2),(8,3),(8,4),(8,6),(8,7),(9,1),(9,2),(9,3),(9,4),(9,5),(9,6),(9,7),(10,1),(10,2),(10,3),(10,4),(10,5),(10,6),(10,7),(11,1),(11,2),(11,3),(11,4),(11,5),(11,6),(11,7),(14,1),(14,2),(14,3),(14,4),(14,2),(14,3),(14,2),(15,1),(15,2),(16,5),(16,6),(16,3),(16,4),(17,5),(17,6),(17,2),(17,3),(17,4),(17,6),(17,5),(18,1),(18,2),(18,3),(18,4),(18,5),(18,6),(18,7),(19,1),(19,2),(19,3),(19,4),(19,5),(19,6),(19,7),(25,1),(25,2),(25,3),(25,4),(25,5),(25,6),(25,7),(27,1),(27,2),(27,7),(39,1),(39,2),(39,3),(39,4),(39,5),(39,6),(39,7),(40,1),(40,2),(40,3),(40,4),(40,5),(40,6),(40,7),(41,1),(41,2),(42,1),(42,2),(42,3),(42,4),(43,1),(43,3),(43,4),(44,1),(44,3),(44,4),(44,1),(44,2),(45,1),(45,2),(46,1),(46,2),(47,1),(47,2),(47,4),(48,1),(48,3),(48,5),(48,7),(49,1),(49,2),(49,4),(49,3),(50,2),(50,4),(50,6),(51,2),(51,6),(52,2),(52,6),(53,1),(54,1),(54,3),(55,2),(56,1),(56,4),(57,1),(57,4),(57,5),(58,4),(58,6),(59,4),(59,6),(60,4),(60,6),(61,1),(61,2),(61,3),(61,4),(61,5),(61,6),(61,7),(62,1),(62,2),(62,3),(62,4),(62,5),(62,6),(62,7);
/*!40000 ALTER TABLE `products_characteristics` ENABLE KEYS */;
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

-- Dump completed on 2023-04-04 15:05:39
