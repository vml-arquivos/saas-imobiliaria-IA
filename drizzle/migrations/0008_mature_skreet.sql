CREATE TABLE `activity_logs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int,
	`userEmail` varchar(320),
	`action` enum('create','update','delete','view','login','logout','export','import','send_email','send_whatsapp','status_change','assign','upload','download') NOT NULL,
	`entityType` enum('user','property','lead','interaction','proposal','visit','task','document','transaction','contract','blog_post') NOT NULL,
	`entityId` int,
	`description` text,
	`changes` text,
	`ipAddress` varchar(45),
	`userAgent` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `activity_logs_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `documents` (
	`id` int AUTO_INCREMENT NOT NULL,
	`entityType` enum('lead','property','proposal','contract','transaction') NOT NULL,
	`entityId` int NOT NULL,
	`fileName` varchar(255) NOT NULL,
	`fileUrl` varchar(500) NOT NULL,
	`fileKey` varchar(500) NOT NULL,
	`fileSize` int,
	`mimeType` varchar(100),
	`documentType` enum('identidade','cpf','comprovante_residencia','comprovante_renda','escritura','matricula','iptu','contrato','proposta','laudo','foto','outro') NOT NULL,
	`title` varchar(255),
	`description` text,
	`uploadedBy` int NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `documents_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `pipeline_stages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`slug` varchar(100) NOT NULL,
	`description` text,
	`displayOrder` int NOT NULL DEFAULT 0,
	`color` varchar(7) DEFAULT '#3B82F6',
	`pipelineType` enum('vendas','locacao','captacao') NOT NULL DEFAULT 'vendas',
	`isActive` boolean NOT NULL DEFAULT true,
	`isClosedStage` boolean DEFAULT false,
	`isWonStage` boolean DEFAULT false,
	`automations` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `pipeline_stages_id` PRIMARY KEY(`id`),
	CONSTRAINT `pipeline_stages_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `proposals` (
	`id` int AUTO_INCREMENT NOT NULL,
	`leadId` int NOT NULL,
	`propertyId` int NOT NULL,
	`createdBy` int NOT NULL,
	`proposedPrice` int NOT NULL,
	`discount` int DEFAULT 0,
	`finalPrice` int NOT NULL,
	`paymentMethod` enum('vista','financiamento','consorcio','parcelado','permuta') NOT NULL,
	`downPayment` int,
	`installments` int,
	`installmentValue` int,
	`description` text,
	`terms` text,
	`notes` text,
	`status` enum('rascunho','enviada','visualizada','em_negociacao','aceita','recusada','expirada') NOT NULL DEFAULT 'rascunho',
	`validUntil` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`sentAt` timestamp,
	`viewedAt` timestamp,
	`respondedAt` timestamp,
	CONSTRAINT `proposals_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `tasks` (
	`id` int AUTO_INCREMENT NOT NULL,
	`leadId` int,
	`propertyId` int,
	`assignedTo` int NOT NULL,
	`createdBy` int NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` text,
	`type` enum('ligacao','email','whatsapp','visita','reuniao','follow_up','documentacao','outro') NOT NULL,
	`priority` enum('baixa','media','alta','urgente') NOT NULL DEFAULT 'media',
	`status` enum('pendente','em_andamento','concluida','cancelada','atrasada') NOT NULL DEFAULT 'pendente',
	`dueDate` timestamp,
	`completionNotes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`completedAt` timestamp,
	CONSTRAINT `tasks_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user_roles` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`role` enum('admin','corretor','gerente','assistente','financeiro','marketing') NOT NULL,
	`permissions` text,
	`active` boolean NOT NULL DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`assignedBy` int,
	CONSTRAINT `user_roles_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `visits` (
	`id` int AUTO_INCREMENT NOT NULL,
	`leadId` int NOT NULL,
	`propertyId` int NOT NULL,
	`assignedTo` int,
	`scheduledDate` timestamp NOT NULL,
	`duration` int DEFAULT 60,
	`status` enum('agendada','confirmada','realizada','cancelada','nao_compareceu') NOT NULL DEFAULT 'agendada',
	`feedback` text,
	`clientInterest` enum('muito_interessado','interessado','neutro','pouco_interessado','sem_interesse'),
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`completedAt` timestamp,
	CONSTRAINT `visits_id` PRIMARY KEY(`id`)
);
