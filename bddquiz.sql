-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mar. 07 avr. 2020 à 11:43
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
  `type` varchar(255) NOT NULL DEFAULT 'texte',
  `correction` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0: Mauvaise réponse , 1: Bonne réponse',
  `image_path` varchar(255) NOT NULL,
  PRIMARY KEY (`idProposition`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `proposition`
--

INSERT INTO `proposition` (`idProposition`, `idQuestion`, `proposition_reponse`, `type`, `correction`, `image_path`) VALUES
(1, 1, 'Jaune', 'img', 0, 'jaune.jpg'),
(2, 1, 'Blanc', 'img', 1, 'blanc.jpg'),
(3, 1, 'Marron', 'img', 0, 'marron.jpg'),
(4, 1, 'Noir', 'img', 0, 'noir.jpg'),
(5, 3, '1', 'texte', 0, ''),
(6, 3, '2', 'texte', 0, ''),
(7, 3, '3', 'texte', 1, ''),
(8, 4, '2013', 'texte', 0, ''),
(9, 4, '2015', 'texte', 1, ''),
(10, 4, '2017', 'texte', 0, ''),
(11, 4, '2019', 'texte', 0, ''),
(12, 5, 'Microsoft Word', 'texte', 1, ''),
(13, 5, 'Microsoft PowerDash', 'texte', 0, ''),
(14, 5, 'Microsoft Excel', 'texte', 1, ''),
(15, 5, 'Microsoft Back', 'texte', 0, ''),
(16, 6, 'Justin Bieber - Baby', 'texte', 0, ''),
(17, 6, 'Psy - Gangnam Style', 'texte', 1, ''),
(18, 6, 'Pinkfong - Baby Shark', 'texte', 0, ''),
(19, 6, 'OneRepublic - Counting Stars', 'texte', 0, ''),
(20, 7, 'Il zinzinule', 'texte', 1, ''),
(21, 7, 'Il dodeldire', 'texte', 0, ''),
(22, 7, 'Il beugle', 'texte', 0, ''),
(23, 7, 'Il drense', 'texte', 0, '');

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
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `question`
--

INSERT INTO `question` (`idQuestion`, `idQuiz`, `phrase`, `video_path`) VALUES
(1, 1, 'De quelle couleur est le cheval blanc d\'Henri IV ?', 'indignite.mp4'),
(3, 1, 'Combien de côtés contient un triangle ?', ''),
(4, 1, 'En quelle année a été créée l\'application Discord ?', ''),
(5, 1, 'Quel(s) logiciel(s) contient le pack Office ?', ''),
(6, 2, 'Quel est la première vidéo à avoir atteint 1 milliard de vues sur YouTube ?', ''),
(7, 2, 'Quel est le cri du colibri ?', '');

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
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `quiz`
--

INSERT INTO `quiz` (`idQuiz`, `nom`, `image_path`, `motscles`) VALUES
(1, 'Quiz1', '1.png', 'Quiz1, histoire'),
(2, 'Quiz2', '2.png', 'Quiz2');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
