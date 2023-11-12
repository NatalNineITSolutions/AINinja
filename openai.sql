-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 12, 2023 at 09:47 AM
-- Server version: 8.0.31
-- PHP Version: 8.1.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `openai`
--

-- --------------------------------------------------------

--
-- Table structure for table `app_settings`
--

DROP TABLE IF EXISTS `app_settings`;
CREATE TABLE IF NOT EXISTS `app_settings` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `timezone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `copyright` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `openai_key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `aws_key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `aws_secret` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `app_settings`
--

INSERT INTO `app_settings` (`id`, `name`, `email`, `logo`, `timezone`, `copyright`, `openai_key`, `aws_key`, `aws_secret`, `created_at`, `updated_at`) VALUES
(1, 'AINinja', 'aiwriter@mail.com', 'assets/logo/fastai.png', 'Asia/Dhaka', 'Copyrights © 2023 AINinja. All rights reserved.', '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', 'io', 'io', '2023-11-09 17:51:27', '2023-11-09 23:27:24');

-- --------------------------------------------------------

--
-- Table structure for table `chat_bots`
--

DROP TABLE IF EXISTS `chat_bots`;
CREATE TABLE IF NOT EXISTS `chat_bots` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prompt` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_plan` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `chat_bots`
--

INSERT INTO `chat_bots` (`id`, `name`, `role`, `status`, `prompt`, `access_plan`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Ai Chatbot', 'Default Bot', 'active', 'You are a helpful assistant.', 'Free', 'assets/img/avatars/ai-bot.png', '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(2, 'Max Horton', 'Career Counsellor', 'active', 'You are consulting as a career counsellor specialist. You should provide career consulting about the user question.', 'Free', 'assets/img/avatars/max-horton.png', '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(3, 'Ewan Dunn', 'Poet', 'active', 'You are consulting as a poet specialist. You should make poet or provide poet consulting about poet', 'Free', 'assets/img/avatars/ewan-dunn.png', '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(4, 'Liam Cameron', 'Doctor', 'active', 'You are consulting as a medical specialist. You should provide medical consulting about patient issues.', 'Standard', 'assets/img/avatars/liam-cameron.png', '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(5, 'Joseph Day', 'Travel Guide', 'active', 'You are consulting as a travel guide specialist. You should provide consulting about traveling.', 'Standard', 'assets/img/avatars/joseph-day.png', '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(6, 'Leo Lawson', 'Accountant', 'active', 'You are consulting as a accountant specialist. You should provide consulting about accounting.', 'Standard', 'assets/img/avatars/leo-lawson.png', '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(7, 'Corey Barnes', 'SEO Specialist', 'active', 'You are consulting as a SEO specialist specialist. You should provide SEO consulting about SEO.', 'Standard', 'assets/img/avatars/corey-barnes.png', '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(8, 'Harvey Gough', 'Business Coach', 'active', 'You are consulting as a business coach specialist. You should provide business consulting about business strategy.', 'Standard', 'assets/img/avatars/harvey-gough.png', '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(9, 'Louis Naylor', 'Motivational Coach', 'active', 'You are consulting as a motivational coach specialist. You should provide motivation about user issues.', 'Premium', 'assets/img/avatars/louis-naylor.png', '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(10, 'Peter Clarke', 'Cyber Security Specialist', 'active', 'You are consulting as a cyber security specialist. You should provide consulting about cyber security.', 'Premium', 'assets/img/avatars/peter-clarke.png', '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(11, 'Zak Bell', 'Relationship Coach', 'active', 'You are consulting as a relationship coach specialist. You should provide consulting about relationship with everything.', 'Premium', 'assets/img/avatars/zak-bell.png', '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(12, 'Jack Walker', 'Life Coach', 'active', 'You are consulting as a life coach specialist. You should provide life consulting about human life.', 'Premium', 'assets/img/avatars/jack-walker.png', '2023-11-09 17:51:29', '2023-11-09 17:51:29');

-- --------------------------------------------------------

--
-- Table structure for table `chat_bot_chats`
--

DROP TABLE IF EXISTS `chat_bot_chats`;
CREATE TABLE IF NOT EXISTS `chat_bot_chats` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint UNSIGNED NOT NULL,
  `chat_bot_id` bigint UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `chat_bot_chats`
--

INSERT INTO `chat_bot_chats` (`id`, `user_id`, `chat_bot_id`, `title`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'New Conversation', '2023-11-09 17:55:16', '2023-11-09 17:55:16'),
(2, 1, 1, 'New Conversation', '2023-11-09 17:55:18', '2023-11-09 17:55:18'),
(3, 1, 2, 'New Conversation', '2023-11-09 18:06:07', '2023-11-09 18:06:07'),
(4, 2, 4, 'New Conversation', '2023-11-09 22:57:09', '2023-11-09 22:57:09'),
(5, 2, 4, 'New Conversation', '2023-11-09 22:57:13', '2023-11-09 22:57:13'),
(6, 2, 2, 'New Conversation', '2023-11-09 22:57:44', '2023-11-09 22:57:44'),
(7, 1, 4, 'New Conversation', '2023-11-09 22:58:11', '2023-11-09 22:58:11'),
(8, 1, 10, 'New Conversation', '2023-11-11 18:08:41', '2023-11-11 18:08:41');

-- --------------------------------------------------------

--
-- Table structure for table `chat_messages`
--

DROP TABLE IF EXISTS `chat_messages`;
CREATE TABLE IF NOT EXISTS `chat_messages` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint UNSIGNED NOT NULL,
  `chat_bot_id` bigint UNSIGNED NOT NULL,
  `chat_bot_chat_id` bigint UNSIGNED NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `chat_messages`
--

INSERT INTO `chat_messages` (`id`, `user_id`, `chat_bot_id`, `chat_bot_chat_id`, `message`, `role`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 2, 'hi', 'user', '2023-11-11 18:08:18', '2023-11-11 18:08:18'),
(2, 1, 1, 2, 'Hello! How can I assist you today?', 'assistant', '2023-11-11 18:08:18', '2023-11-11 18:08:18'),
(3, 1, 10, 8, 'hi', 'user', '2023-11-11 18:08:48', '2023-11-11 18:08:48'),
(4, 1, 10, 8, 'Hello! How can I assist you in the field of cyber security?', 'assistant', '2023-11-11 18:08:48', '2023-11-11 18:08:48'),
(5, 1, 10, 8, 'what is wmi', 'user', '2023-11-11 18:09:40', '2023-11-11 18:09:40'),
(6, 1, 10, 8, 'WMI stands for Windows Management Instrumentation. It is a Microsoft technology that allows administrators to manage and monitor systems in a networked environment. WMI provides a set of tools, APIs, and system services to manage devices, applications, and data in Windows-based operating systems.\n\nFrom a cyber security perspective, WMI can be both beneficial and potentially risky. On one hand, it enables system administrators to centrally manage and monitor Windows-based systems, ensuring proper security configurations, detecting potential vulnerabilities, and providing remote administrative access. It can be used for tasks like system inventory, software distribution, performance monitoring, and security auditing.\n\nHowever, WMI can also be exploited by attackers for malicious purposes. Adversaries can abuse WMI for lateral movement within a compromised network, execute remote commands, gather system information, and even persist their presence on a compromised system.\n\nTo ensure cyber security when working with WMI, it is important to:\n\n1. Implement strong access controls: Restrict WMI access to authorized users and secure authentication methods.\n\n2. Regularly update and patch systems: Keep the operating system and software up to date to minimize potential vulnerabilities in WMI.\n\n3. Monitor WMI activity: Monitor and log WMI activity to detect any suspicious behavior or unauthorized access.\n\n4. Use network segmentation: Segmenting the network can contain the impact of any potential WMI exploitation.\n\n5. Implement intrusion detection and prevention systems: These can help identify and block any malicious activity involving WMI.\n\n6. Follow the principle of least privilege: Only grant necessary permissions to WMI users to minimize the risk of misuse.\n\nBy following these best practices, organizations can maximize the benefits of utilizing WMI while minimizing the potential security risks.', 'assistant', '2023-11-11 18:09:40', '2023-11-11 18:09:40'),
(7, 1, 10, 8, 'hi', 'user', '2023-11-11 19:26:05', '2023-11-11 19:26:05'),
(8, 1, 10, 8, 'Hello! How can I assist you with your cyber security concerns?', 'assistant', '2023-11-11 19:26:05', '2023-11-11 19:26:05'),
(9, 1, 10, 8, 'what is dos attack', 'user', '2023-11-11 19:26:57', '2023-11-11 19:26:57'),
(10, 1, 10, 8, 'A Denial of Service (DoS) attack is a type of cyber attack where the goal is to disrupt or completely disable the targeted system or network, making it unavailable to its intended users. In a DoS attack, a large volume of traffic or requests is directed towards the target, overwhelming its resources and causing it to become unresponsive or crash. \n\nThere are several types of DoS attacks, including:\n\n1. Volume-based attacks: These involve flooding the target with a high volume of traffic, overwhelming its bandwidth capacity. Examples include UDP floods, ICMP floods, and DNS amplification attacks.\n\n2. Protocol attacks: These exploit vulnerabilities in network protocols or services to exhaust system resources. For example, SYN floods exploit the TCP three-way handshake process, causing the targeted system to allocate resources for incomplete connections, ultimately leading to a denial of service.\n\n3. Application layer attacks: These target specific applications or services running on a system, exploiting vulnerabilities or overwhelming their resources. Examples include HTTP floods, Slowloris, or DDoS attacks targeting specific web applications or servers.\n\n4. Distributed Denial of Service (DDoS) attacks: These involve multiple compromised systems, known as a botnet, coordinating to launch a DoS attack. DDoS attacks are more powerful and difficult to mitigate since they distribute the attack traffic across different sources, making it harder to filter or block.\n\nThe impact of a DoS attack can vary, ranging from temporary service disruption to more severe consequences such as financial losses, reputational damage, or even physical harm in critical infrastructures. Implementing appropriate network security measures, such as firewalls, traffic filtering, and intrusion detection systems, can help mitigate the risk of DoS attacks.', 'assistant', '2023-11-11 19:26:57', '2023-11-11 19:26:57');

-- --------------------------------------------------------

--
-- Table structure for table `child_sections`
--

DROP TABLE IF EXISTS `child_sections`;
CREATE TABLE IF NOT EXISTS `child_sections` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` text COLLATE utf8mb4_unicode_ci,
  `description` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `intro_section_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `child_sections`
--

INSERT INTO `child_sections` (`id`, `title`, `subtitle`, `description`, `image`, `intro_section_id`, `created_at`, `updated_at`) VALUES
(1, '✓ Free to try ✓ 2 min sign up · 5-day 100% money back guarantee', NULL, NULL, 'upload/1699570166.jpg', 1, '2023-11-09 17:51:29', '2023-11-09 23:19:26'),
(2, 'Ai Generator', 'With ai writer, you may create text, images, code, chat, and more.', NULL, NULL, 2, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(3, 'Advance Dashboard', 'Powerful visualizations and customizable analytics for actionable data insights.', NULL, NULL, 2, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(4, 'Payment Gateways', 'Seamless transactions made simple with secure and reliable payment gateways.', NULL, NULL, 2, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(5, 'Support Platform', 'Streamlined support platform for efficient assistance.', NULL, NULL, 2, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(6, 'Speech To Text', 'Convert speech to text effortlessly for efficient communication.', NULL, NULL, 2, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(7, 'Text To Speech', 'Transform text into natural-sounding speech for enhanced communication.', NULL, NULL, 2, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(8, 'Powered by OpenAi', 'Generate, Edit, Save, Export', NULL, 'assets/img/intro/ai-template.png', 3, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(9, 'Powered by OpenAi', 'Generate, Save, Download', NULL, 'assets/img/intro/ai-image.png', 4, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(10, 'Powered by OpenAi', 'Generate, Edit, Save', NULL, 'assets/img/intro/ai-code.png', 5, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(11, 'Powered by OpenAi', 'Chat, Solve, Repeat', NULL, 'assets/img/intro/ai-chatbot.png', 6, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(12, 'Powered by OpenAi', 'Paste Text, Generate', NULL, 'assets/img/intro/speech-to-text.png', 7, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(13, 'Powered by AWS Poly', 'Upload, Generate', NULL, 'assets/img/intro/text-to-speech.png', 8, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(14, 'Blog Content', 'Save Time and Write Smarter Your Social Media Post Faster', 'Simplify your content creation process with AI-powered blog title generator. Transform Your Blogging Success with AI Blog Intros that Set the Tone, Build Trust.', 'assets/img/intro/blog-dark.png', 9, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(15, 'Social Media', 'Save Time and Write Smarter Your Social Media Post Faster', 'Maximize Your Facebook Presence with Captivating Captions Using Our Template. Unlock Your Creativity and Create Compelling Social Media Posts.', 'assets/img/intro/social-dark.png', 9, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(16, 'Ads Content', 'Save Time and Effort Write Ads with FastAI Today!', 'Stand Out on Google and Drive Conversions with Engaging Ads Titles Using Our Template. Simplify your content creation process with AI-powered blog title generator.', 'assets/img/intro/ads-dark.png', 9, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(17, 'How accurate are the outputs of an AI writer?', NULL, 'While AI writers are capable of generating content, including text, headlines, and summaries, it is still a matter of debate whether they can generate truly creative content that rivals that of human writers.', NULL, 12, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(18, 'Are AI writers capable of generating creative content?', NULL, 'While AI writers are capable of generating content, including text, headlines, and summaries, it is still a matter of debate whether they can generate truly creative content that rivals that of human writers.', NULL, 12, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(19, 'Can AI writers write in different languages?', NULL, 'While AI writers are capable of generating content, including text, headlines, and summaries, it is still a matter of debate whether they can generate truly creative content that rivals that of human writers.', NULL, 12, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(20, 'Can AI writers replace human writers?', NULL, 'While AI writers are capable of generating content, including text, headlines, and summaries, it is still a matter of debate whether they can generate truly creative content that rivals that of human writers.', NULL, 12, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(21, 'Can AI writers write in different languages?', NULL, 'While AI writers are capable of generating content, including text, headlines, and summaries, it is still a matter of debate whether they can generate truly creative content that rivals that of human writers.', NULL, 12, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(22, 'Our Trusted Partners', NULL, NULL, 'assets/logo/stripe-dark.png', 14, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(23, 'Our Trusted Partners', NULL, NULL, 'assets/logo/paddle-dark.png', 14, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(24, 'Our Trusted Partners', NULL, NULL, 'assets/logo/razorpay-dark.png', 14, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(25, 'Our Trusted Partners', NULL, NULL, 'assets/logo/openai-dark.png', 14, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(26, 'Our Trusted Partners', NULL, NULL, 'assets/logo/laravel-dark.png', 14, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(27, 'Have any questions about our template?', NULL, NULL, NULL, 15, '2023-11-09 17:51:29', '2023-11-09 17:51:29');

-- --------------------------------------------------------

--
-- Table structure for table `child_section_links`
--

DROP TABLE IF EXISTS `child_section_links`;
CREATE TABLE IF NOT EXISTS `child_section_links` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `link_text` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link_url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `child_section_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `child_section_links`
--

INSERT INTO `child_section_links` (`id`, `link_text`, `link_url`, `child_section_id`, `created_at`, `updated_at`) VALUES
(1, 'Buy Now', '#', 1, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(2, 'View Demo', '#', 1, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(3, 'Try For Free', '#', 14, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(4, 'Try For Free', '#', 15, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(5, 'Try For Free', '#', 16, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(6, 'Buy Now', '#', 27, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(7, 'View Demo', '#', 27, '2023-11-09 17:51:29', '2023-11-09 17:51:29');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `generated_contents`
--

DROP TABLE IF EXISTS `generated_contents`;
CREATE TABLE IF NOT EXISTS `generated_contents` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint UNSIGNED NOT NULL,
  `content_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `generation_date` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '09-11-2023',
  `content_count` int NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `generated_contents`
--

INSERT INTO `generated_contents` (`id`, `user_id`, `content_type`, `generation_date`, `content_count`, `created_at`, `updated_at`) VALUES
(1, 2, 'image', '10-11-2023', 2, '2023-11-09 22:55:19', '2023-11-09 22:56:52'),
(2, 2, 'template', '10-11-2023', 2, '2023-11-09 23:05:12', '2023-11-09 23:05:25'),
(3, 1, 'code', '10-11-2023', 2, '2023-11-10 09:44:29', '2023-11-10 09:45:23'),
(4, 1, 'image', '10-11-2023', 5, '2023-11-10 14:39:11', '2023-11-10 17:02:45'),
(5, 1, 'template', '11-11-2023', 4, '2023-11-10 19:43:41', '2023-11-11 18:05:15'),
(6, 1, 'code', '11-11-2023', 1, '2023-11-11 18:10:41', '2023-11-11 18:10:41'),
(7, 1, 'image', '11-11-2023', 5, '2023-11-11 18:13:20', '2023-11-11 18:13:57'),
(8, 1, 'template', '12-11-2023', 4, '2023-11-11 19:21:08', '2023-11-11 19:25:08'),
(9, 1, 'code', '12-11-2023', 1, '2023-11-11 20:09:40', '2023-11-11 20:09:40');

-- --------------------------------------------------------

--
-- Table structure for table `intro_sections`
--

DROP TABLE IF EXISTS `intro_sections`;
CREATE TABLE IF NOT EXISTS `intro_sections` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` text COLLATE utf8mb4_unicode_ci,
  `description` text COLLATE utf8mb4_unicode_ci,
  `asset` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `intro_sections`
--

INSERT INTO `intro_sections` (`id`, `type`, `title`, `subtitle`, `description`, `asset`, `created_at`, `updated_at`) VALUES
(1, 'header', 'THE MOST POWERFUL AI WRITER', 'Generate SEO-Optimized Content on Autopilot with our AINinjaTemplate', 'Discover Our AI-Driven Website Template for Scalable, High-Quality Content Creation and Take Your Business to the Next Level', 'upload/1699614329.mp4', '2023-11-09 17:51:29', '2023-11-10 11:35:29'),
(2, 'features', 'Key Features', 'The SaaS platform creation and management features are all available in Ai Writer.', NULL, NULL, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(3, 'ai_template', 'AI TEMPLATE CONTENT', 'Writing assistant with intelligence', 'The AI Template Content feature is a game-changing tool that harnesses the power of artificial intelligence to simplify and streamline the process of creating compelling written content. With just a few clicks, users can access a wide range of customizable templates equipped with intelligent algorithms that generate high-quality copy to meet their specific needs.', NULL, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(4, 'ai_image', 'AI IMAGE GENERATOR', 'Make captivating visuals and pictures', 'The AI Image Generator is a cutting-edge tool powered by artificial intelligence that allows you to create stunning, high-quality images with just a few clicks. By leveraging advanced algorithms and vast datasets, this tool generates realistic and visually captivating images tailored to your specifications. With the AI Image Generator, you no longer need extensive design skills or hours spent manipulating software.', NULL, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(5, 'ai_code', 'AI CODE GENERATOR', 'Create high-quality code quickly.', 'The AI Code Generator is a revolutionary tool that utilizes artificial intelligence to automate and streamline the process of code creation. By analysing patterns, syntax, and best practices from vast code repositories, it generates high-quality code snippets tailored to specific programming languages, frameworks, and functionalities. This powerful tool empowers developers to save time, increase productivity, and focus on higher-level problem-solving.', NULL, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(6, 'ai_chatbot', 'AI CHATBOTS', 'Introducing your new virtual assistant', 'AI chatbots are intelligent virtual assistants designed to interact with users in a natural and conversational manner. Powered by artificial intelligence and natural language processing algorithms, these chatbots can understand and respond to user queries, providing instant assistance and support across a wide range of applications. These chatbots are trained on vast amounts of data and continually learn and improve over time.', NULL, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(7, 'speech_to_text', 'AI SPEECH TO TEXT', 'Make a text version of your speech', 'AI Speech-to-Text technology utilizes advanced artificial intelligence algorithms to convert spoken language into written text. By leveraging machine learning and natural language processing techniques, this innovative technology enables accurate and real-time transcription of audio content. With AI Speech-to-Text, users can easily convert recorded or live speech, such as interviews, meetings, lectures, or voice notes, into text format.', NULL, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(8, 'text_to_speech', 'AI TEXT TO SPEECH', 'Make a speech version of your text', 'AI Text-to-Speech technology utilizes sophisticated artificial intelligence algorithms to convert written text into natural-sounding speech. By leveraging deep learning and neural networks, this innovative technology can generate lifelike and expressive audio representations of written content. With AI Text-to-Speech, users can transform written documents, articles, emails, or any other text-based content into spoken words.', NULL, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(9, 'demo_content', 'Dominate the Content Game with Our Game-Changing AI Platform', 'The AI-powered platform that will take your content to the next level. Innovative AI solutions for content creators and marketers', NULL, NULL, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(10, 'templates', 'Explore Our Amazing Templates', 'Stand Out on Google and Drive Conversions with Engaging Ads Titles Using Our Template.', NULL, NULL, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(11, 'testimonials', 'What our Users say About us', 'More than 15K+ customer says about us!', NULL, NULL, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(12, 'faqs_content', 'Feel free to ask any Questions!', 'A Comprehensive Guide to Frequently Asked Questions', NULL, 'assets/img/intro/faqs-right.png', '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(13, 'pricing', 'The Perfect Price Plan for you', 'Find the Perfect Plan for Your Business Goals with Our Comprehensive Pricing Options', NULL, NULL, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(14, 'partners', 'Our Trusted Partners', 'Empowering Your Business with Our Trusted Partners', NULL, NULL, '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(15, 'banner', 'Have any questions about our template?', NULL, NULL, NULL, '2023-11-09 17:51:29', '2023-11-09 17:51:29');

-- --------------------------------------------------------

--
-- Table structure for table `intro_section_children`
--

DROP TABLE IF EXISTS `intro_section_children`;
CREATE TABLE IF NOT EXISTS `intro_section_children` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` text COLLATE utf8mb4_unicode_ci,
  `description` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `intro_section_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2018_02_23_000000_create_users_table', 1),
(2, '2019_05_03_000002_create_subscriptions_table', 1),
(3, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(4, '2023_02_23_000000_create_failed_jobs_table', 1),
(5, '2023_02_23_100000_create_password_reset_tokens_table', 1),
(6, '2023_03_02_145953_create_subscription_plans_table', 1),
(7, '2023_03_05_122741_create_templates_table', 1),
(8, '2023_03_05_123426_create_saved_documents_table', 1),
(9, '2023_03_05_130209_create_most_used_templates_table', 1),
(10, '2023_03_09_222836_create_supports_table', 1),
(11, '2023_03_09_224730_create_support_replays_table', 1),
(12, '2023_05_02_185032_create_generated_contents_table', 1),
(13, '2023_05_03_175017_create_chat_bots_table', 1),
(14, '2023_05_03_175041_create_chat_bot_chats_table', 1),
(15, '2023_05_03_175143_create_chat_messages_table', 1),
(16, '2023_05_03_175558_create_saved_images_table', 1),
(17, '2023_05_03_175638_create_saved_codes_table', 1),
(18, '2023_05_03_175715_create_text_to_speeches_table', 1),
(19, '2023_05_03_175735_create_speech_to_texts_table', 1),
(20, '2023_05_15_165455_create_app_settings_table', 1),
(21, '2023_05_15_165512_create_payment_gateways_table', 1),
(22, '2023_05_15_165529_create_smtp_settings_table', 1),
(23, '2023_05_15_165548_create_social_logins_table', 1),
(24, '2023_06_08_155610_create_token_counts_table', 1),
(25, '2023_06_26_122726_create_intro_sections_table', 1),
(26, '2023_06_26_122733_create_child_sections_table', 1),
(27, '2023_06_26_122734_create_intro_section_children_table', 1),
(28, '2023_06_26_122840_create_child_section_links_table', 1),
(29, '2023_06_28_150110_create_testimonials_table', 1),
(30, '2023_07_25_123405_add_email_change_columns_to_users_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `most_used_templates`
--

DROP TABLE IF EXISTS `most_used_templates`;
CREATE TABLE IF NOT EXISTS `most_used_templates` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint UNSIGNED NOT NULL,
  `template_id` bigint UNSIGNED NOT NULL,
  `count` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `most_used_templates`
--

INSERT INTO `most_used_templates` (`id`, `user_id`, `template_id`, `count`, `created_at`, `updated_at`) VALUES
(1, 2, 1, 1, '2023-11-09 23:05:12', '2023-11-09 23:05:25'),
(2, 1, 12, 1, '2023-11-10 19:43:41', '2023-11-10 19:44:07'),
(3, 1, 1, 1, '2023-11-11 18:04:50', '2023-11-11 18:05:15'),
(4, 1, 27, 1, '2023-11-11 19:21:08', '2023-11-11 19:21:21'),
(5, 1, 21, 1, '2023-11-11 19:24:49', '2023-11-11 19:25:08');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment_gateways`
--

DROP TABLE IF EXISTS `payment_gateways`;
CREATE TABLE IF NOT EXISTS `payment_gateways` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `active` tinyint(1) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payment_gateways`
--

INSERT INTO `payment_gateways` (`id`, `active`, `name`, `key`, `secret`, `created_at`, `updated_at`) VALUES
(1, 0, 'stripe', '', '', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(2, 1, 'razorpay', 'rzp_test_jJFUEPDy4DR6Gd', 'kuozTkzWgsnsy9MmQ5xSAZ25', '2023-11-09 17:51:28', '2023-11-09 22:49:54'),
(3, 0, 'paypal', '', '', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(4, 0, 'mollie', '', NULL, '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(5, 0, 'paystack', '', '', '2023-11-09 17:51:28', '2023-11-09 17:51:28');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `saved_codes`
--

DROP TABLE IF EXISTS `saved_codes`;
CREATE TABLE IF NOT EXISTS `saved_codes` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `language` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `saved_documents`
--

DROP TABLE IF EXISTS `saved_documents`;
CREATE TABLE IF NOT EXISTS `saved_documents` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint UNSIGNED NOT NULL,
  `template_id` bigint UNSIGNED NOT NULL,
  `document_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `language` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `document` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `word_count` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `saved_documents`
--

INSERT INTO `saved_documents` (`id`, `user_id`, `template_id`, `document_name`, `language`, `document`, `word_count`, `created_at`, `updated_at`) VALUES
(1, 2, 1, 'New Document', 'English', '<p>ll 1. \"Leveling Up Your Youtube Channel: A Casual Guide\"</p><p>2. \"Cracking the Code to Youtube Success: A Casual Approach\"</p><p>3. \"Unleashing Your Youtube Channel\'s Potential: A Casual Perspective\"</p><p>4. \"Casual Strategies to Boost Your Youtube Channel\'s Growth\"</p><p>5. \"From Zero to Hero: Casual Tips for Growing Your Youtube Channel\"</p><p>6. \"Mastering the Art of Youtube Channel Growth: A Casual Journey\"</p><p>7. \"The Casual Creator\'s Guide to Skyrocketing Your Youtube Channel\"</p><p>8. \"Get Ready to Go Viral: Casual Tactics for Youtube Channel Growth\"</p><p>9. \"Growing Your Youtube Channel the Casual Way: Simple and Effective Tips\"</p><p>10. \"The Secret Sauce of Youtube Channel Growth: Casual Insights Revealed\" 1. \"How to Boost Your YouTube Channel and Watch Your Subscribers Multiply\"</p><p>2. \"Unlocking the Secrets to Rapid YouTube Channel Growth\"</p><p>3. \"The Ultimate Guide to Growing Your YouTube Channel Like a Boss\"</p><p>4. \"Mastering the Art of YouTube Channel Expansion: A Beginner\'s Guide\"</p><p>5. \"Kickstarting Your YouTube Channel Growth: Proven Strategies for Success\"</p><p>6. \"From Zero to Hero: Growing Your YouTube Channel from Scratch\"</p><p>7. \"Crack the Code: Insider Tips for Rapid YouTube Channel Growth\"</p><p>8. \"YouTube Channel Growth Made Easy: Simple Steps to Success\"</p><p>9. \"Unleashing the Power of YouTube: Ignite Your Channel\'s Growth\"</p><p>10. \"YouTube Channel Growth Hacks: Secrets Revealed\"</p>', 191, '2023-11-09 23:05:35', '2023-11-09 23:05:35'),
(2, 1, 1, 'Cyber security', 'English', '<p>1. \"Embark on a Thrilling Journey into the World of Cyber Security\"</p><p>2. \"Unlocking the Secrets of Cyber Security: A Beginner\'s Guide\"</p><p>3. \"Prepare to be Amazed: Discovering the Power of Cyber Security\"</p><p>4. \"Step into a Fascinating Realm of Digital Defense: Introduction to Cyber Security\"</p><p>5. \"Decoding the Enigma: A Journey into the Basics of Cyber Security\"</p><p>6. \"Get Ready for an Exciting Dive into the World of Cyber Security\"</p><p>7. \"Unveiling the Magic of Cyber Security: A Beginner\'s Introduction\"</p><p>8. \"Gear up for an Epic Adventure: Exploring the Basics of Cyber Security\"</p><p>9. \"Prepare to be Thrilled: An Introduction to the Exciting Field of Cyber Security\"</p><p>10. \"Buckle up for an Exciting Ride: A Beginner\'s Guide to Cyber Security\"</p>', 112, '2023-11-11 18:05:15', '2023-11-11 18:05:15');

-- --------------------------------------------------------

--
-- Table structure for table `saved_images`
--

DROP TABLE IF EXISTS `saved_images`;
CREATE TABLE IF NOT EXISTS `saved_images` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `generated_at` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img_url` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `saved_images`
--

INSERT INTO `saved_images` (`id`, `user_id`, `title`, `description`, `generated_at`, `img_url`, `created_at`, `updated_at`) VALUES
(1, 2, 'New Image', 'pizza', '2023-11-10 04:25:19', 'generated/20231110042521.jpg', '2023-11-09 22:55:21', '2023-11-09 22:55:21'),
(2, 2, 'New Image', 'dog riding a cycle', '2023-11-10 04:26:52', 'generated/20231110042655.jpg', '2023-11-09 22:56:55', '2023-11-09 22:56:55'),
(3, 1, 'New Image', 'dog dancing in the rain', '2023-11-10 20:09:11', 'generated/20231110200915.jpg', '2023-11-10 14:39:15', '2023-11-10 14:39:15'),
(4, 1, 'New Image', 'create a image that dog into the space', '2023-11-10 22:32:03', 'generated/20231110223206.jpg', '2023-11-10 17:02:06', '2023-11-10 17:02:06'),
(5, 1, 'New Image', 'create a image that dog into the space', '2023-11-10 22:32:20', 'generated/20231110223223.jpg', '2023-11-10 17:02:23', '2023-11-10 17:02:23'),
(6, 1, 'New Image', 'create a image that dog into the space', '2023-11-10 22:32:45', 'generated/20231110223247.jpg', '2023-11-10 17:02:47', '2023-11-10 17:02:47'),
(7, 1, 'New Image', 'create a image that dog into the space', '2023-11-10 22:32:45', 'generated/20231110223250.jpg', '2023-11-10 17:02:50', '2023-11-10 17:02:50'),
(8, 1, 'new', 'microfunges infecting human brain using motorbike in space', '2023-11-11 23:43:20', 'generated/20231111234322.jpg', '2023-11-11 18:13:23', '2023-11-11 18:13:23'),
(9, 1, 'new', 'microfunges infecting human brain using motorbike in space', '2023-11-11 23:43:57', 'generated/20231111234359.jpg', '2023-11-11 18:14:00', '2023-11-11 18:14:00'),
(10, 1, 'new', 'microfunges infecting human brain using motorbike in space', '2023-11-11 23:43:57', 'generated/20231111234402.jpg', '2023-11-11 18:14:02', '2023-11-11 18:14:02'),
(11, 1, 'new', 'microfunges infecting human brain using motorbike in space', '2023-11-11 23:43:57', 'generated/20231111234404.jpg', '2023-11-11 18:14:04', '2023-11-11 18:14:04'),
(12, 1, 'new', 'microfunges infecting human brain using motorbike in space', '2023-11-11 23:43:57', 'generated/20231111234406.jpg', '2023-11-11 18:14:06', '2023-11-11 18:14:06');

-- --------------------------------------------------------

--
-- Table structure for table `smtp_settings`
--

DROP TABLE IF EXISTS `smtp_settings`;
CREATE TABLE IF NOT EXISTS `smtp_settings` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `host` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `port` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sender_email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sender_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `encryption` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `smtp_settings`
--

INSERT INTO `smtp_settings` (`id`, `host`, `port`, `username`, `password`, `sender_email`, `sender_name`, `encryption`, `created_at`, `updated_at`) VALUES
(1, '', '', '', '', 'fastai@gmail.com', 'FastAI', 'tls', '2023-11-09 17:51:28', '2023-11-09 17:51:28');

-- --------------------------------------------------------

--
-- Table structure for table `social_logins`
--

DROP TABLE IF EXISTS `social_logins`;
CREATE TABLE IF NOT EXISTS `social_logins` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `active` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `client_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `client_secret` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect_url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `social_logins`
--

INSERT INTO `social_logins` (`id`, `active`, `name`, `client_id`, `client_secret`, `redirect_url`, `created_at`, `updated_at`) VALUES
(1, '0', 'google', '', '', '', '2023-11-09 17:51:28', '2023-11-09 17:51:28');

-- --------------------------------------------------------

--
-- Table structure for table `speech_to_texts`
--

DROP TABLE IF EXISTS `speech_to_texts`;
CREATE TABLE IF NOT EXISTS `speech_to_texts` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `text` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subscriptions`
--

DROP TABLE IF EXISTS `subscriptions`;
CREATE TABLE IF NOT EXISTS `subscriptions` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint UNSIGNED NOT NULL,
  `method` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `billing` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `transaction_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subscription_plan_id` bigint UNSIGNED NOT NULL,
  `total_price` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `currency` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subscriptions`
--

INSERT INTO `subscriptions` (`id`, `user_id`, `method`, `billing`, `transaction_id`, `subscription_plan_id`, `total_price`, `currency`, `created_at`, `updated_at`) VALUES
(1, 2, 'stripe', 'monthly', 'pay_MyXUovuqqACWU1', 2, '10', 'USD', '2023-11-09 22:54:57', '2023-11-09 22:54:57');

-- --------------------------------------------------------

--
-- Table structure for table `subscription_plans`
--

DROP TABLE IF EXISTS `subscription_plans`;
CREATE TABLE IF NOT EXISTS `subscription_plans` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `monthly_price` double(8,2) NOT NULL,
  `yearly_price` double(8,2) NOT NULL,
  `currency` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prompt_generation` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_generation` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code_generation` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content_token_length` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `text_to_speech_generation` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `text_character_length` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `speech_to_text_generation` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `speech_duration` int NOT NULL,
  `support_request` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_template` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_chat_bot` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subscription_plans`
--

INSERT INTO `subscription_plans` (`id`, `title`, `type`, `status`, `description`, `monthly_price`, `yearly_price`, `currency`, `prompt_generation`, `image_generation`, `code_generation`, `content_token_length`, `text_to_speech_generation`, `text_character_length`, `speech_to_text_generation`, `speech_duration`, `support_request`, `access_template`, `access_chat_bot`, `created_at`, `updated_at`) VALUES
(1, 'Free', 'Free', 'active', 'Free plan for basic use', 0.00, 0.00, 'USD', '5', '5', '2', '2000', '1', '1000', '1', 1, '50', 'Free', 'Free', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(2, 'Standard', 'Standard', 'active', 'Standard plan for standard use', 10.00, 100.00, 'USD', '250', '400', '250', '20000', '50', '20000', '30', 4, '250', 'Standard', 'Standard', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(3, 'Premium', 'Premium', 'active', 'Premium plan for business use', 25.00, 280.00, 'USD', 'Unlimited', 'Unlimited', 'Unlimited', 'Unlimited', 'Unlimited', 'Unlimited', 'Unlimited', 6, 'Unlimited', 'Premium', 'Premium', '2023-11-09 17:51:28', '2023-11-09 17:51:28');

-- --------------------------------------------------------

--
-- Table structure for table `supports`
--

DROP TABLE IF EXISTS `supports`;
CREATE TABLE IF NOT EXISTS `supports` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint UNSIGNED NOT NULL,
  `ticket_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `priority` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `support_replays`
--

DROP TABLE IF EXISTS `support_replays`;
CREATE TABLE IF NOT EXISTS `support_replays` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `support_id` bigint UNSIGNED NOT NULL,
  `replay_from` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `attachment` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `templates`
--

DROP TABLE IF EXISTS `templates`;
CREATE TABLE IF NOT EXISTS `templates` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prompt` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_plan` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_custom` tinyint(1) NOT NULL DEFAULT '0',
  `icon` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `templates`
--

INSERT INTO `templates` (`id`, `title`, `slug`, `status`, `prompt`, `category`, `description`, `access_plan`, `is_custom`, `icon`, `created_at`, `updated_at`) VALUES
(1, 'Blog Titles', 'blog-titles', 'active', 'Generate minimum 10 titles for the following blog topic: \'_details_\'. Keep tone as like: \'_tone_\'. Translate them in: \'_language_\'', 'blog', 'Simplify your content creation process with our AI-powered blog title generator', 'Free', 0, 'Blog', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(2, 'Blog Ideas', 'blog-ideas', 'active', 'Follow these keywords: _keywords_. And generate ideas for a blog which will be about the following details: \'_details_\'. And for each blog generated blog ideas write section heading for that blog idea. Write the Blog Idea title first then point the related sections. Translate the whole generated text to: \'_language_\'', 'blog', 'Generate a Wide Range of Engaging Blog Ideas with AI-Powered Writing Assistance', 'Standard', 0, 'BlogIdea', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(3, 'Blog Intros', 'blog-intros', 'active', 'Generate introduction for a blog which is titled \'_title_\' which will be about the following details: \'_details_\'. Translate the whole generated text to: \'_language_\'', 'blog', 'Transform Your Blogging Success with AI Blog Intros that Set the Tone, Build Trust', 'Premium', 0, 'BlogIntro', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(4, 'Blog Section', 'blog-section', 'active', 'Generate a blog for the title \'_title_\'. Contain the following subheadings \'_subheadings_\'. Translate the whole blog to \'_language_\'', 'blog', 'Create Engaging and Well-Structured Blog Posts with Our Comprehensive Template', 'Free', 0, 'Blog', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(5, 'Blog Conclusion', 'blog-conclusion', 'active', 'Generate conclusion for a blog which is titled \'_title_\' which will be about the following details: \'_details_\'. Translate the whole generated text to: \'_language_\'', 'blog', 'Craft Powerful and Memorable Blog Conclusion with AI Writing Assistance', 'Standard', 0, 'Conclusion', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(6, 'Summarize Text', 'summarize-text', 'active', 'Summarize the following text: \'_details_\'. Keep a \'_tone_\' tone. Translate the whole generated text to: \'_language_\'', 'text', 'Effortlessly Summarize Long Texts and Save Time with Our Powerful Template', 'Premium', 0, 'SummarizeText', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(7, 'Startup Name Idea', 'startup-name-idea', 'active', 'Generate 10 startup company names considering the given words \'_word_seeds_\' and follow the following description: \'_details_\'. Keep tone as like: \'_tone_\'. Translate the whole generated text to: \'_language_\'', 'idea', 'Generate Catchy and Memorable Startup Names with AI Technology.', 'Free', 0, 'Startup', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(8, 'Testimonial/Reviews', 'testimonial-reviews', 'active', 'generate 5 testimonials or reviews from demo customers for a product which is called: \'_name_\'. The details of the product is the following: \'_details_\'. Keep a \'_tone_\' tone. Finally translate the whole generated texts in: \'_language_\'', 'text', 'Generate Authentic and Engaging Reviews with AI Writing Assistance', 'Standard', 0, 'Review', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(9, 'YouTube Tag Idea', 'youtube-tag-idea', 'active', 'Generate tags for youtube considering the title of the video: \'_title_\'. Also generate some keywords for the video. Keep a \'_tone_\' tone. Translate the whole generated text in \'_language_\'', 'social', 'Generate Effective and Relevant Tags with AI-Powered Writing Assistance', 'Premium', 0, 'YouTube', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(10, 'Video Titles', 'video-titles', 'active', 'Generate 10 titles for the video considering the following details of the video: \'_details_\'. Keep a \'_tone_\' tone. Translate the whole generated text in \'_language_\'', 'video', 'Engage Your Audience & Boost Your Views with a Captivating Video Title.', 'Free', 0, 'Video', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(11, 'Video Description', 'video-description', 'active', 'Generate description for the video considering the title of the video: \'_title_\'. Keep a \'_tone_\' tone. Translate the whole generated text to: \'_language_\'', 'video', 'Generate Authentic and Engaging Reviews with AI Writing Assistance', 'Standard', 0, 'Video', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(12, 'Instagram Captions', 'instagram-captions', 'active', 'Generate 10 instagram captions for the following post: \'_details_\'. Keep a \'_tone_\' tone. Translate the whole generated text to: \'_language_\'', 'social', 'Maximize Your Reach and Engagement on Instagram with Eye-Catching Captions', 'Premium', 0, 'Instagram', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(13, 'Instagram #tag Idea', 'instagram-hashtag-idea', 'active', 'Generate 10 instagram hashtags considering the keyword: \'_keyword_\'. Keep a \'_tone_\' tone. Translate the whole generated text to: \'_language_\'', 'social', 'Transform Your Instagram Posts into a Discoverable Work of Art with Our #tag Idea Template', 'Free', 0, 'Hashtag', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(14, 'Social Media Post (Personal)', 'social-media-post-personal', 'active', 'Generate a social media post considering the following statement: \'_details_\'. Keep a \'_tone_\' tone. This will be posted from a personal account. Translate the whole generated text to: \'_language_\'', 'social', 'Unlock Your Creativity and Create Compelling Social Media Posts', 'Standard', 0, 'SocialMedia', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(15, 'Social Media Post (Business)', 'social-media-post-business', 'active', 'Generate a social media post for the company which is called: \'_company_name_\'. Keep a \'_tone_\' tone. Following is the description of the company: \'_company_details_\'. Generate the social media post which will be about the following description: \'_post_details_\'. Translate the whole generated text to: \'_language_\'', 'social', 'Maximizing Your Social Media Engagement with AI-Generated Captions and Posts', 'Premium', 0, 'SocialMedia', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(16, 'Facebook Captions', 'facebook-captions', 'active', 'Generate 10 facebook captions for the following post: \'_details_\'. Keep a \'_tone_\' tone. Translate the whole generated text to: \'_language_\'', 'social', 'Maximize Your Facebook Presence with Captivating Captions Using Our Template', 'Free', 0, 'Facebook', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(17, 'Facebook Ads', 'facebook-ads', 'active', 'Generate facebook advertisement for the product called: \'_name_\'. Which will be for: \'_audience_\'. The description of the product is the following: \'_details_\'. Keep a \'_tone_\' tone. Translate the whole generated text to: \'_language_\'', 'social', 'Generate High-Impact Facebook Ads with AI-Powered Writing Assistance', 'Standard', 0, 'Facebook', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(18, 'Google Ads Titles', 'google-ads-titles', 'active', 'Generate 10 headlines for a google ad for the following product which is called: \'_name_\'. This product is intended for the following audience: \'_audience_\'. The details of the product is the following: \'_details_\'. Keep a \'_tone_\' tone. Translate the whole generated text to: \'_language_\'', 'social', 'Stand Out on Google and Drive Conversions with Engaging Ads Titles Using Our Template', 'Premium', 0, 'GoogleAds', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(19, 'Google Ads Details', 'google-ads-details', 'active', 'Generate description for a google ad for the following product which is called: \'_name_\'. This product is intended for the following audience: \'_audience_\'. The details of the product is the following: \'_details_\'. Keep a \'_tone_\' tone. Translate the whole generated text to: \'_language_\'', 'social', 'Generate Authentic and Engaging Reviews with AI Writing Assistance', 'Free', 0, 'GoogleAdsDetails', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(20, 'Article Generator', 'article-generator', 'active', 'Write an article on the title \'_title_\' having the keywords \'_keywords_\'. Keep tone as like: \'_tone_\'. Translate the generated article in \'_language_\'', 'blog', 'Effortlessly Summarize Long Texts and Save Time with Our Powerful Template', 'Standard', 0, 'ArticleGenerator', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(21, 'Content Re-writer', 'content-re-writer', 'active', 'Rewrite the following content: \'_details_\'. Keep a \'_tone_\' tone.Translate the whole generate text to: \'_language_\'', 'text', 'Revitalizing Your Text with Innovative Language and Unique Perspective', 'Premium', 0, 'ContentReWriter', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(22, 'Paragraph Generator', 'paragraph-generator', 'active', 'Generate a paragraph considering the following description: \'_details_\'. Remember to keep focus on the following keywords: \'_keywords_\'. Keep a \'_tone_\' tone. Translate the whole generated text to: \'_language_\'', 'text', 'Unlocking the Power of Paragraphs for Engaging and Informative Content', 'Free', 0, 'ParagraphGenerator', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(23, 'Talking Points', 'talking-points', 'active', 'Generate 10 points considering the following description: \'_details_\'. Remember to keep focus that the description is about the following article: \'_title_\'. Keep a \'_tone_\' tone. Translate the whole generated text to: \'_language_\'', 'discussion', 'Facilitating Your Communication with Pre-Written Scripts and Conversation Starters', 'Standard', 0, 'TalkingPoints', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(24, 'Pros & Cons', 'pros-cons', 'active', 'Generate 5 pros and 5 cons for the following product: \'_title_\'. The description of the product is the following: \'_details_\'. Keep a \'_tone_\' tone. Translate the whole generated text to: \'_language_\'', 'discussion', 'Weighing the Advantages and Disadvantages of Any Topic with AI-Generated Analysis', 'Premium', 0, 'ProsCons', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(25, 'Product Name Idea', 'product-name-idea', 'active', 'Generate product name for the following product considering the following description: \'_details_\'. Keep the generated product name relevant to the following words: \'_words_\'. Keep a \'_tone_\' tone. Translate the whole generated text to: \'_language_\'', 'idea', 'Innovative AI-Generated Product Naming for Your Brand\'s Success', 'Free', 0, 'ProductName', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(26, 'Product Description', 'product-description', 'active', 'Write a description for the following product which is called: \'_name_\'. Which is for: \'_audience_\'. Consider the following description: \'_details_\'. Keep a \'_tone_\' tone. Translate the whole generated text to: \'_language_\'', 'other', 'Captivating Your Customers with Convincing and Informative Product Descriptions', 'Standard', 0, 'ProductDescription', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(27, 'Meta Description', 'meta-description', 'active', 'Generate meta description for a website which is called: \'_name_\'. The description of the website is the following: \'_description_\'. Consider the following keywords when generating meta description: \'_keywords_\'. Keep a \'_tone_\' tone. Translate the whole generated text to: \'_language_\'', 'other', 'Boosting Your SEO and Click-Through Rates with AI-Generated Meta Descriptions', 'Premium', 0, 'MetaDescription', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(28, 'FAQs', 'faqs', 'active', 'Generate 10 questions for faq section for a website which is called: \'_name_\'. The description of the website is the following: \'_description_\'. Keep a \'_tone_\' tone. Translate the whole generated text to: \'_language_\'', 'faq', 'Delivering Comprehensive Answers to Common Questions with AI-Powered FAQs', 'Free', 0, 'FAQs', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(29, 'FAQ Answers', 'faq-answers', 'active', 'Generate 5 answers for the follwoing faq question: \'_question_\' The faq question belongs to the website which is called: \'_name_\'. The description of the website is the following: \'_description_\'. Keep a \'_tone_\' tone. Translate the whole generated text to: \'_language_\'', 'faq', 'Providing Expert Responses to Common Questions with AI-Generated FAQ Answers', 'Standard', 0, 'FAQsAnswer', '2023-11-09 17:51:28', '2023-11-09 17:51:28'),
(30, 'Problem Agitate Solution', 'problem-agitate-solution', 'active', 'Our product is called: \'_name_\'. This product is suitable for: \'_audience_\'. The description of the product is the following: \'_details_\'. Generate a relevant problem and a relevant agitate and generate a solution that will focus towards the product. Keep a \'_tone_\' tone. Translate the whole generated text in \'_language_\'', 'other', 'Driving Conversions with Compelling Problem-Agitate-Solution Messaging', 'Premium', 0, 'ProblemAgitateSolution', '2023-11-09 17:51:28', '2023-11-09 17:51:28');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

DROP TABLE IF EXISTS `testimonials`;
CREATE TABLE IF NOT EXISTS `testimonials` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `designation` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` double(8,2) NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `name`, `designation`, `rating`, `image`, `comment`, `created_at`, `updated_at`) VALUES
(1, 'Adam Olive', 'Full-Stack Developer', 5.00, 'assets/img/avatars/image-4.jpg', 'The code was well-organized and easy to follow, and the support team was quick to answer any questions I had. My client was thrilled with the final result.', '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(2, 'Michel Bardel', 'MERn Stack Developer', 4.50, 'assets/img/avatars/image-5.jpg', 'I was blown away by the quality and flexibility of this web template. It was so easy to use and customize to my specific needs.', '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(3, 'Alejandro Liano', 'Front-End Developer', 5.00, 'assets/img/avatars/image-6.jpg', 'I was blown away by the quality and flexibility of this web template. It was so easy to use and customize to my specific needs.', '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(4, 'Adam Olive', 'Full-Stack Developer', 5.00, 'assets/img/avatars/team-1.jpeg', 'The code was well-organized and easy to follow, and the support team was quick to answer any questions I had. My client was thrilled with the final result.', '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(5, 'Michel Bardel', 'MERn Stack Developer', 4.50, 'assets/img/avatars/team-2.jpeg', 'I was blown away by the quality and flexibility of this web template. It was so easy to use and customize to my specific needs.', '2023-11-09 17:51:29', '2023-11-09 17:51:29'),
(6, 'Alejandro Liano', 'Front-End Developer', 5.00, 'assets/img/avatars/team-3.jpeg', 'I was blown away by the quality and flexibility of this web template. It was so easy to use and customize to my specific needs.', '2023-11-09 17:51:29', '2023-11-09 17:51:29');

-- --------------------------------------------------------

--
-- Table structure for table `text_to_speeches`
--

DROP TABLE IF EXISTS `text_to_speeches`;
CREATE TABLE IF NOT EXISTS `text_to_speeches` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `language` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `voice` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `audio` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `token_counts`
--

DROP TABLE IF EXISTS `token_counts`;
CREATE TABLE IF NOT EXISTS `token_counts` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint UNSIGNED NOT NULL,
  `count_date` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '09-11-2023',
  `total_count` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `token_counts`
--

INSERT INTO `token_counts` (`id`, `user_id`, `count_date`, `total_count`, `created_at`, `updated_at`) VALUES
(1, 2, '10-11-2023', 309, '2023-11-09 23:05:12', '2023-11-09 23:05:25'),
(2, 1, '10-11-2023', 153, '2023-11-10 09:44:29', '2023-11-10 09:45:23'),
(3, 1, '11-11-2023', 1233, '2023-11-10 19:43:41', '2023-11-11 18:10:41'),
(4, 1, '12-11-2023', 1002, '2023-11-11 19:21:08', '2023-11-11 20:09:40');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `google_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subscription_id` bigint UNSIGNED DEFAULT NULL,
  `subscription_plan_id` bigint UNSIGNED DEFAULT NULL,
  `next_payment` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `recurring` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `email_change_new_email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_change_token` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `phone`, `image`, `password`, `role`, `status`, `company`, `website`, `google_id`, `facebook_id`, `subscription_id`, `subscription_plan_id`, `next_payment`, `recurring`, `remember_token`, `created_at`, `updated_at`, `email_change_new_email`, `email_change_token`) VALUES
(1, 'Admin', 'superadmin@gmail.com', '2023-11-09 17:51:28', NULL, 'upload/1699608102.jpg', '$2y$10$jAVevbqZ0VFE1pd5Vz3.3.uL43zpsmOsG9Woe2qd25I5uDisOdxQO', 'admin', 'active', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-11-09 17:51:29', '2023-11-10 09:51:42', NULL, NULL),
(2, 'Akhil Jinu', 'portforwarding03@gmail.com', '2023-11-09 17:51:28', NULL, 'upload/1699569231.png', '$2y$10$auQ.GQhO4NV3bv/pDl/1BOdc71lq.pvO8WuWrl9JgWiM.ZdAAwL.6', 'user', 'active', NULL, NULL, NULL, NULL, 1, 2, '2023-12-10', 'monthly', NULL, '2023-11-09 22:50:40', '2023-11-09 23:03:52', NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
