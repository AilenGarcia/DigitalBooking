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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id_products` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(255) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `description_address` varchar(255) NOT NULL,
  `stars` int DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `id_categories` bigint NOT NULL,
  `id_cities` bigint NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `cancellation` varchar(255) NOT NULL,
  `houses_rules` varchar(255) NOT NULL,
  `safety_hygiene` varchar(255) NOT NULL,
  PRIMARY KEY (`id_products`),
  KEY `FK3iplhn224yof4qk7lfym5r047` (`id_categories`),
  KEY `FKd5mcyxov0766d2b34bs5kd1k4` (`id_cities`),
  CONSTRAINT `FK3iplhn224yof4qk7lfym5r047` FOREIGN KEY (`id_categories`) REFERENCES `categories` (`id_categories`),
  CONSTRAINT `FKd5mcyxov0766d2b34bs5kd1k4` FOREIGN KEY (`id_cities`) REFERENCES `cities` (`id_cities`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (3,'Marcelo Torcuato de Alvear 767','Este hotel de 5 estrellas cuenta con ubicación estrategica para poder acceder facil y rapidamente a varios puntos turisticos de la ciudad, tambien ofrece habitaciones de lujo con TV de pantalla plana y baño privado de mármol. Cuenta con terraza y piscina exterior climatizada.','Área ecléctica con elegantes galerías de arte y cafés, y la bulliciosa calle Florida y plaza San Martín',5,'Gran Hotel',2,2,'-34.59571374157417','-58.37804520314965','La cancelación o modificación de la reserva será solo posible hasta 3 días antes de la fecha.','CheckIn: 12pm. CheckOut:16pm. No se permite fumar dentro del establecimiento.','Detector de humo. Deposito de seguridad. Se aplican en las áreas comunes las medidas de seguridad por Covid decretadas'),(4,'RP 11','Malibú Hostel se encuentra en Mar del Plata, a 1,3 km de la playa, ofrece alojamiento con jardín, zona de barbacoa, aparcamiento privado, salón compartido con WiFi gratuito y terraza.','A metros de la playa',0,'Malibú Hostel',1,1,'-38.233099576819065','-57.75476874694296','La cancelación o modificación de la reserva será solo posible hasta 3 días antes de la fecha.','CheckIn: 12pm. CheckOut:16pm. No se permite fumar dentro del establecimiento.','Detector de humo. Deposito de seguridad. Se aplican en las áreas comunes las medidas de seguridad por Covid decretadas'),(5,'Sarmiento','Luna Azul Departamentos ofrece vistas a la ciudad y alojamiento con aire acondicionado, terraza y balcón a unos 3,7 km del centro comercial Córdoba. Ofrece vistas a la montaña y WiFi gratuita en todas las instalaciones','Con las mejores vistas de Cordoba',0,'Luna azul',3,3,'-30.923792','-64.523533','La cancelación o modificación de la reserva no es posible una vez confirmada la misma','CheckIn: 12pm. CheckOut:18pm. ','Detector de humo. Deposito de seguridad.'),(6,'San Martín 2954','El Hotel Grizzly se encuentra en Santa Fe dispone de un restaurante, piscina al aire libre y conexión Wi-Fi gratuito. Habitaciones impecables y elegantes con fascinantes vistas a la ciudad.','Se encuentra a 6 minutos a pie de la terminal de autobuses de Santa Fe, a 1 km del Teatro Municipal de Santa Fe y a 2 km del Museo Histórico Provincial Brigadier General Estanislao López',4,'Hotel Grizzly',2,4,'-31.641858176378932','-60.7048983363521','La cancelación o modificación de la reserva no es posible una vez confirmada la misma','CheckIn: 12pm. CheckOut:16pm. No se permite fumar dentro del establecimiento.','Detector de humo. Deposito de seguridad. Se aplican en las áreas comunes las medidas de seguridad por Covid decretadas'),(7,' Corbeta Uruguay 3550','Hostal La Costa ofrece servicio de conserjería, habitaciones para no fumadores, salón compartido, WiFi gratuito en todas las instalaciones. Terraza y parrilla compartidos ademas de una completa cafeteria a la disposicion de todos nuestros huespedes.','Se encuentra junto a la ruta provincial 11, a 5 minutos a pie de la playa Honu en el océano Atlántico y a 2 km del parque Bosque Peralta Ramos.',0,'La Costa',1,1,'-38.08822418535199','-57.54550400944272','La cancelación de la reserva no será posible desde 1 semana antes de la fecha','CheckIn: 12pm. CheckOut:16pm. No se permite fumar dentro del establecimiento.','Detector de humo. Deposito de seguridad. Se aplican en las áreas comunes las medidas de seguridad por Covid decretadas'),(8,' Chacabuco 3423','Posada del Sol B&B se encuentra a 15 minutos del centro de Mal del Playa, ofrece salón compartido y alojamiento con patio y WiFi gratuito.','A metros de la playa y a 15 minutos del centro de Mar del Plata',0,'Posada del Sol',4,1,'-37.9876879104816','-57.54943385578628','La cancelación de la reserva no será posible desde 1 semana antes de la fecha','CheckIn: 12pm. CheckOut:16pm. No se permite fumar dentro del establecimiento.','Detector de humo. Deposito de seguridad. Se aplican en las áreas comunes las medidas de seguridad por Covid decretadas'),(9,'Cl. 17 #20-11','Palace Hotel es un alojamiento que le hará sentir como en su casa. con vistas al jardín situado en Manizales, ubicado a 15 minutos de Ecoparque Los Alcazares Arenillo . Ofrece acceso a un balcón y aparcamiento privado gratuito.','A 15 minutos de Ecoparque Los Alcazares Arenillo',0,'Palace Hotel',3,5,'5.068856576017201','-75.52077707470343','La cancelación de la reserva deberá tratarse via email o whatsapp','CheckIn: 12pm. CheckOut:18pm. ','Detector de humo. Deposito de seguridad.'),(10,'Cl. 20 #44 16','El Acogedor B&B Dream Beach cuenta con habitaciónes privadas, ofrece alojamiento con WiFi gratuito, aire acondicionado, jardín y terraza en Medellín con increibles vistas a la ciudad.','Área revitalizada con edificios de oficinas altos, varios restaurantes, un parque y el Museo de Arte Moderno.',0,'Dream beach',4,6,'6.224391441711316','-75.57467564501268','La cancelación de la reserva deberá tratarse via email o whatsapp','CheckIn: 12pm. CheckOut:16pm. No se permite fumar dentro del establecimiento.','Detector de humo. Deposito de seguridad. Se aplican en las áreas comunes las medidas de seguridad por Covid decretadas');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
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

-- Dump completed on 2023-04-04 15:05:19
