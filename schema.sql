CREATE TABLE IF NOT EXISTS `questions` (
  `id` int(11) NOT NULL,
  `question` varchar(200) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);
 
ALTER TABLE `questions` ADD PRIMARY KEY (`id`);
ALTER TABLE `questions` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;