-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 24, 2025 at 01:59 PM
-- Server version: 9.1.0
-- PHP Version: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bd_salegarage`
--

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(250) NOT NULL,
  `precio` int NOT NULL,
  `descripcion` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`Id`, `nombre_producto`, `precio`, `descripcion`, `img_id`) VALUES
(7, 'Reloj despertador', 1001, 'Reloj despertador vintage de estilo clásico, con carcasa metálica color crema, campanas dobles superiores y números negros en una esfera blanca, destacando por su diseño retro y su encanto nostálgico.', 'eyjwwotocxbydiccxrgn'),
(8, 'Microondas', 20000, 'Microondas con diseño retro marrón oscuro, equipado con perillas mecánicas para controlar el nivel de potencia y el temporizador, ideal para quienes buscan un toque nostálgico en su cocina.', 'adlpump9adv8opvyghbx'),
(9, 'Juguete Robot', 5000, 'Juguete de madera con forma de robot, pintado en tonos rojo, azul petróleo y detalles en amarillo y crema. Su diseño incluye ojos grandes y expresivos, brazos articulados y un panel frontal decorado con gráficos simulando controles mecánicos, evocando el estilo clásico de los juguetes de mediados del siglo XX.', 'tmigrdmvkcufw8clqbld'),
(10, 'Ordenador antiguo', 13000, 'Computadora de escritorio de los años 80 o 90, compuesta por un monitor CRT de gran tamaño, CPU con disquetera incorporada y teclado mecánico completo, todo en un característico color beige. Ideal para coleccionistas de tecnología retro o ambientaciones nostálgicas.', 'ikfbixpmsnn4ex7jaa9d'),
(11, 'Reloj de Pared', 50000, 'Reloj de pared con péndulo, de diseño clásico y elegante. Tiene una esfera redonda con números romanos, agujas negras estilizadas y un marco de madera oscura. Debajo, una caja rectangular aloja un péndulo dorado brillante, completando su estilo tradicional. Ideal para decoración retro o de época.', 'ad3akhpozrbvtoaabqfm'),
(12, 'Espejo Marco Madera', 30500, 'Espejo antiguo de forma rectangular con un marco de madera finamente tallado. El diseño incluye ornamentos curvos y motivos vegetales, típicos del estilo barroco o rococó. La madera tiene un acabado cálido y envejecido que realza su carácter clásico y elegante. Ideal como pieza decorativa en ambientes vintage o tradicionales.', 'iceqmh1p1t0mdkpmmohi'),
(13, 'Bicicleta', 20000, 'Bicicleta de estilo clásico con cuadro negro, asiento de cuero marrón y neumáticos de borde crema. Presenta un faro delantero metálico, guardabarros curvados y portaequipajes trasero. Su diseño evoca una estética retro, ideal para coleccionistas o decoración nostálgica.', 'paowjnhn5bwdxobfrsfh'),
(14, 'Camara', 13400, 'Cámara fotográfica vintage de estilo rangefinder, con cuerpo metálico plateado y recubrimiento de cuero negro. Cuenta con un objetivo de 50mm, controles mecánicos en la parte superior y visor óptico. Su diseño robusto y elegante refleja la estética clásica de las cámaras analógicas del siglo XX.', 'pfnfqnu0hzt5d4yertvx'),
(15, 'Lampara', 19800, 'Lámpara de escritorio estilo banquero, con pantalla de vidrio verde curvado y base de metal en acabado latón, encendido por cadena lateral.', 'iyewap9mk8vwti5iu0tm'),
(16, 'Oso de Peluche', 7500, 'Muñeco oso de peluche, de felpa marrón claro, con ojos de botón oscuros y un lazo de tela al cuello; presenta un diseño clásico y aspecto envejecido.', 'nc7iprzoeipdlwz9hmup');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`Id`, `usuario`, `password`) VALUES
(3, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(4, 'admin', '21232f297a57a5a743894a0e4a801fc3');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
