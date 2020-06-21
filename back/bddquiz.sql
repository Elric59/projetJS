-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 06 avr. 2020 à 08:46
-- Version du serveur :  10.4.10-MariaDB
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `bddquiz`
--

-- --------------------------------------------------------

--
-- Structure de la table `proposition`
--

DROP TABLE IF EXISTS `proposition`;
CREATE TABLE IF NOT EXISTS `proposition` (
  `idProposition` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `idQuestion` bigint(20) NOT NULL,
  `proposition_reponse` varchar(255) NOT NULL,
  PRIMARY KEY (`idProposition`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `proposition`
--

INSERT INTO `proposition` (`idProposition`, `idQuestion`, `proposition_reponse`) VALUES
(1, 1, 'Jaune'),
(2, 1, 'Blanc'),
(3, 1, 'Marron'),
(4, 1, 'Noir'),
(5, 3, '1'),
(6, 3, '2'),
(7, 3, '3'),
(8, 4, '2013'),
(9, 4, '2015'),
(10, 4, '2017'),
(11, 4, '2019'),
(12, 5, 'Microsoft Word'),
(13, 5, 'Microsoft PowerDash'),
(14, 5, 'Microsoft Excel'),
(15, 5, 'Microsoft Back');

-- --------------------------------------------------------

--
-- Structure de la table `question`
--

DROP TABLE IF EXISTS `question`;
CREATE TABLE IF NOT EXISTS `question` (
  `idQuestion` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `idQuiz` bigint(20) NOT NULL,
  `phrase` varchar(255) NOT NULL,
  `video_path` varchar(255) NOT NULL,
  PRIMARY KEY (`idQuestion`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `question`
--

INSERT INTO `question` (`idQuestion`, `idQuiz`, `phrase`, `video_path`) VALUES
(1, 1, 'De quelle couleur est le cheval blanc d\'Henri IV ?', ''),
(3, 1, 'Combien de côtés contient un triangle ?', ''),
(4, 1, 'En quelle année a été créé l\'application Discord ?', ''),
(5, 1, 'Quel(s) logiciel(s) contient le pack Office ?', '');

-- --------------------------------------------------------

--
-- Structure de la table `quiz`
--

DROP TABLE IF EXISTS `quiz`;
CREATE TABLE IF NOT EXISTS `quiz` (
  `idQuiz` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `motscles` varchar(255) NOT NULL,
  PRIMARY KEY (`idQuiz`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `quiz`
--

INSERT INTO `quiz` (`idQuiz`, `nom`, `image_path`, `motscles`) VALUES
(1, 'Quiz1', '', 'Quiz1');

-- --------------------------------------------------------

--
-- Structure de la table `reponse`
--

DROP TABLE IF EXISTS `reponse`;
CREATE TABLE IF NOT EXISTS `reponse` (
  `idReponse` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `idQuestion` bigint(20) NOT NULL,
  `idProposition` bigint(20) NOT NULL,
  PRIMARY KEY (`idReponse`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `reponse`
--

INSERT INTO `reponse` (`idReponse`, `idQuestion`, `idProposition`) VALUES
(1, 1, 2),
(2, 3, 7),
(3, 4, 9),
(4, 5, 12),
(5, 5, 14);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
