-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-03-2025 a las 19:42:36
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `animales`
--

--
-- Volcado de datos para la tabla `animales`
--

INSERT INTO `animales` (`id`, `nombre`, `created_at`) VALUES
(1, 'Armadillo', '2025-03-06 19:08:58'),
(2, 'Quetzal', '2025-03-06 19:21:35'),
(3, 'Axolote', '2025-03-07 23:49:22'),
(4, 'Zebra', '2025-03-08 00:03:15'),
(5, 'Gorila', '2025-03-08 00:18:00'),
(6, 'Zorro', '2025-03-08 00:22:05'),
(7, 'Cocodrilo', '2025-03-08 00:26:29'),
(8, 'Jaguar', '2025-03-08 00:38:21');

--
-- Volcado de datos para la tabla `posee`
--

INSERT INTO `posee` (`id_rol`, `id_privilegio`, `created_at`) VALUES
(1, 1, '2025-03-11 18:29:22'),
(2, 1, '2025-03-11 18:31:16'),
(3, 1, '2025-03-11 18:32:24'),
(3, 2, '2025-03-11 18:32:24');

--
-- Volcado de datos para la tabla `privilegios`
--

INSERT INTO `privilegios` (`id`, `nombre`, `created_at`) VALUES
(1, 'ver animales', '2025-03-11 18:22:40'),
(2, 'agregar animales', '2025-03-11 18:22:40');

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`, `created_at`) VALUES
(1, 'lider', '2025-03-11 18:20:59'),
(2, 'colaborador', '2025-03-11 18:20:59'),
(3, 'superadmin', '2025-03-11 18:20:59');

--
-- Volcado de datos para la tabla `tiene`
--

INSERT INTO `tiene` (`id_usuario`, `id_rol`, `created_at`) VALUES
(2, 1, '2025-03-11 18:35:28'),
(3, 2, '2025-03-11 18:35:28'),
(3, 3, '2025-03-11 18:35:28'),
(4, 2, '2025-03-11 18:35:28'),
(5, 2, '2025-03-11 18:36:53');

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `password`, `created_at`) VALUES
(1, 'Luisa', 'luisa', '2025-03-10 18:15:50'),
(2, 'Yessica ', '$2b$12$cXLaJRRqHGTNzbPXbkIvouNIMrtQDR0diRdLHwg5kjYhohyEZyc8e', '2025-03-10 18:23:51'),
(3, 'Luis ', '$2b$12$6GoQjzibSriA4NuerUjV7OX94rMfE130Tq7Y1TcPxEpjHFzmdIcNm', '2025-03-10 18:53:50'),
(4, 'Dam', '$2b$12$KkzKfXQJ.navW1Uzvgq4gecux8mT0DqtdFmDPy/xc4nwQdeKpgRy2', '2025-03-11 18:33:14'),
(5, 'Beto', '$2b$12$VX1LVH9ablPEHMmTraKB4eI5FJ0q2RdLnsYo4bOfqsOnmjuEGfIYa', '2025-03-11 18:36:29');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
