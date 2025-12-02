import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "../drizzle/schema.js";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error("DATABASE_URL não configurada!");
  process.exit(1);
}

async function seed() {
  console.log("🌱 Iniciando seed do banco de dados...\n");

  const connection = await mysql.createConnection(DATABASE_URL);
  const db = drizzle(connection, { schema, mode: "default" });

  try {
    // Seed de Categorias de Blog
    console.log("📝 Inserindo categorias de blog...");
    await db.insert(schema.blogCategories).values([
      {
        name: "Mercado Imobiliário",
        slug: "mercado-imobiliario",
        description: "Notícias e análises do mercado imobiliário",
      },
      {
        name: "Dicas para Comprar",
        slug: "dicas-para-comprar",
        description: "Guias e dicas para compradores",
      },
      {
        name: "Investimentos",
        slug: "investimentos",
        description: "Como investir em imóveis",
      },
    ]).onDuplicateKeyUpdate({ set: { name: schema.blogCategories.name } });
    console.log("✅ 3 categorias criadas\n");

    // Seed de Posts de Blog
    console.log("📰 Inserindo posts de blog...");
    await db.insert(schema.blogPosts).values([
      {
        title: "Como Escolher o Imóvel Perfeito em Brasília",
        slug: "como-escolher-imovel-perfeito-brasilia",
        excerpt: "Descubra as melhores dicas para encontrar o imóvel ideal na capital federal.",
        content: `# Como Escolher o Imóvel Perfeito em Brasília

Brasília é uma cidade única, com características arquitetônicas e urbanísticas que a tornam especial. Ao buscar um imóvel na capital federal, é importante considerar diversos fatores.

## Localização

A localização é fundamental. Considere a proximidade com seu trabalho, escolas, hospitais e áreas de lazer. Bairros como Lago Sul, Lago Norte e Asa Sul são muito valorizados.

## Infraestrutura

Verifique a infraestrutura do condomínio e da região. Segurança, áreas de lazer e facilidade de acesso são essenciais.

## Documentação

Sempre verifique toda a documentação do imóvel antes de fechar negócio. Certidões negativas e regularização são fundamentais.`,
        featuredImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop",
        categoryId: 2,
        authorId: 1,
        metaTitle: "Como Escolher o Imóvel Perfeito em Brasília - Casa DF",
        metaDescription: "Descubra as melhores dicas para encontrar o imóvel ideal na capital federal.",
        published: true,
        publishedAt: new Date("2025-01-15"),
      },
      {
        title: "Mercado Imobiliário em Brasília: Tendências 2025",
        slug: "mercado-imobiliario-brasilia-tendencias-2025",
        excerpt: "Análise completa das tendências do mercado imobiliário em Brasília para 2025.",
        content: `# Mercado Imobiliário em Brasília: Tendências 2025

O mercado imobiliário de Brasília apresenta perspectivas positivas para 2025. Veja as principais tendências.

## Valorização

Regiões como Águas Claras e Vicente Pires continuam em alta, com forte valorização.

## Sustentabilidade

Imóveis sustentáveis e com certificação ambiental estão cada vez mais valorizados.

## Tecnologia

Automação residencial e smart homes são tendências crescentes no mercado.`,
        featuredImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
        categoryId: 1,
        authorId: 1,
        metaTitle: "Mercado Imobiliário em Brasília: Tendências 2025",
        metaDescription: "Análise completa das tendências do mercado imobiliário em Brasília para 2025.",
        published: true,
        publishedAt: new Date("2025-01-10"),
      },
      {
        title: "Investir em Imóveis: Vale a Pena em 2025?",
        slug: "investir-em-imoveis-vale-a-pena-2025",
        excerpt: "Análise sobre investimento em imóveis e se ainda é uma boa opção em 2025.",
        content: `# Investir em Imóveis: Vale a Pena em 2025?

Investir em imóveis continua sendo uma excelente opção para quem busca segurança e rentabilidade.

## Vantagens

- Proteção contra inflação
- Renda passiva com aluguel
- Valorização no longo prazo

## Cuidados

- Escolha bem a localização
- Analise o potencial de valorização
- Considere custos de manutenção`,
        featuredImage: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=1200&h=800&fit=crop",
        categoryId: 3,
        authorId: 1,
        metaTitle: "Investir em Imóveis: Vale a Pena em 2025?",
        metaDescription: "Análise sobre investimento em imóveis e se ainda é uma boa opção em 2025.",
        published: true,
        publishedAt: new Date("2025-01-05"),
      },
    ]).onDuplicateKeyUpdate({ set: { title: schema.blogPosts.title } });
    console.log("✅ 3 posts de blog criados\n");

    // Seed de Imóveis
    console.log("🏠 Inserindo imóveis...");
    await db.insert(schema.properties).values([
      {
        title: "Apartamento Moderno no Lago Sul",
        description: "Apartamento de alto padrão com vista para o lago, 3 suítes, varanda gourmet e acabamento premium. Condomínio completo com piscina, academia e salão de festas.",
        referenceCode: "CDF001",
        propertyType: "apartamento",
        transactionType: "venda",
        address: "SHIS QI 11",
        neighborhood: "Lago Sul",
        city: "Brasília",
        state: "DF",
        zipCode: "71625-110",
        salePrice: 150000000, // R$ 1.500.000,00 em centavos
        condoFee: 120000, // R$ 1.200,00 em centavos
        iptu: 50000, // R$ 500,00 em centavos
        bedrooms: 3,
        bathrooms: 3,
        suites: 3,
        parkingSpaces: 2,
        totalArea: 120,
        builtArea: 110,
        features: JSON.stringify(["piscina", "churrasqueira", "academia", "playground", "salao_festas", "portaria_24h", "elevador", "varanda"]),
        images: JSON.stringify([
          "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop",
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
        ]),
        mainImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop",
        status: "disponivel",
        featured: true,
        published: true,
        metaTitle: "Apartamento Moderno no Lago Sul - Casa DF",
        metaDescription: "Apartamento de alto padrão com vista para o lago, 3 suítes e acabamento premium.",
        slug: "apartamento-moderno-lago-sul",
        createdBy: 1,
      },
      {
        title: "Casa Espaçosa em Águas Claras",
        description: "Casa com 4 quartos, piscina, churrasqueira e amplo quintal. Localização privilegiada próximo ao metrô.",
        referenceCode: "CDF002",
        propertyType: "casa",
        transactionType: "venda",
        address: "Rua das Pitangueiras",
        neighborhood: "Águas Claras",
        city: "Brasília",
        state: "DF",
        zipCode: "71908-540",
        salePrice: 85000000, // R$ 850.000,00
        iptu: 35000,
        bedrooms: 4,
        bathrooms: 3,
        suites: 2,
        parkingSpaces: 3,
        totalArea: 250,
        builtArea: 180,
        features: JSON.stringify(["piscina", "churrasqueira", "quintal", "portaria_24h"]),
        images: JSON.stringify([
          "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop",
        ]),
        mainImage: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop",
        status: "disponivel",
        featured: true,
        published: true,
        metaTitle: "Casa Espaçosa em Águas Claras - Casa DF",
        metaDescription: "Casa com 4 quartos, piscina e churrasqueira em Águas Claras.",
        slug: "casa-espacosa-aguas-claras",
        createdBy: 1,
      },
      {
        title: "Cobertura Duplex na Asa Sul",
        description: "Cobertura de luxo com terraço, churrasqueira e vista panorâmica. 4 suítes e 4 vagas de garagem.",
        referenceCode: "CDF003",
        propertyType: "cobertura",
        transactionType: "venda",
        address: "SQS 308",
        neighborhood: "Asa Sul",
        city: "Brasília",
        state: "DF",
        zipCode: "70353-080",
        salePrice: 220000000, // R$ 2.200.000,00
        condoFee: 180000,
        iptu: 80000,
        bedrooms: 4,
        bathrooms: 5,
        suites: 4,
        parkingSpaces: 4,
        totalArea: 300,
        builtArea: 280,
        features: JSON.stringify(["churrasqueira", "varanda", "elevador", "portaria_24h", "academia", "salao_festas"]),
        images: JSON.stringify([
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
        ]),
        mainImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
        status: "disponivel",
        featured: true,
        published: true,
        metaTitle: "Cobertura Duplex na Asa Sul - Casa DF",
        metaDescription: "Cobertura de luxo com terraço e vista panorâmica na Asa Sul.",
        slug: "cobertura-duplex-asa-sul",
        createdBy: 1,
      },
      {
        title: "Apartamento Compacto no Guará",
        description: "Apartamento ideal para solteiros ou casal, 2 quartos, 1 vaga. Próximo a comércio e transporte público.",
        referenceCode: "CDF004",
        propertyType: "apartamento",
        transactionType: "locacao",
        address: "QE 38",
        neighborhood: "Guará",
        city: "Brasília",
        state: "DF",
        zipCode: "71070-380",
        rentPrice: 350000, // R$ 3.500,00/mês
        condoFee: 45000,
        iptu: 15000,
        bedrooms: 2,
        bathrooms: 1,
        suites: 0,
        parkingSpaces: 1,
        totalArea: 60,
        builtArea: 55,
        features: JSON.stringify(["elevador", "portaria_24h"]),
        images: JSON.stringify([
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop",
        ]),
        mainImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop",
        status: "disponivel",
        featured: false,
        published: true,
        metaTitle: "Apartamento Compacto no Guará - Casa DF",
        metaDescription: "Apartamento 2 quartos para locação no Guará.",
        slug: "apartamento-compacto-guara",
        createdBy: 1,
      },
      {
        title: "Casa de Condomínio em Taguatinga",
        description: "Casa em condomínio fechado com segurança 24h, 3 quartos, garagem para 2 carros.",
        referenceCode: "CDF005",
        propertyType: "casa",
        transactionType: "locacao",
        address: "Condomínio Ville de Montagne",
        neighborhood: "Taguatinga",
        city: "Brasília",
        state: "DF",
        zipCode: "72145-000",
        rentPrice: 480000, // R$ 4.800,00/mês
        condoFee: 60000,
        bedrooms: 3,
        bathrooms: 2,
        suites: 1,
        parkingSpaces: 2,
        totalArea: 150,
        builtArea: 120,
        features: JSON.stringify(["churrasqueira", "quintal", "portaria_24h", "playground"]),
        images: JSON.stringify([
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
        ]),
        mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
        status: "disponivel",
        featured: false,
        published: true,
        metaTitle: "Casa de Condomínio em Taguatinga - Casa DF",
        metaDescription: "Casa 3 quartos em condomínio fechado para locação.",
        slug: "casa-condominio-taguatinga",
        createdBy: 1,
      },
      {
        title: "Apartamento Luxuoso no Lago Norte",
        description: "Apartamento de alto padrão com acabamento premium, 3 suítes, varanda com vista para o lago.",
        referenceCode: "CDF006",
        propertyType: "apartamento",
        transactionType: "venda",
        address: "SHIN QL 10",
        neighborhood: "Lago Norte",
        city: "Brasília",
        state: "DF",
        zipCode: "71520-105",
        salePrice: 180000000, // R$ 1.800.000,00
        condoFee: 150000,
        iptu: 60000,
        bedrooms: 3,
        bathrooms: 4,
        suites: 3,
        parkingSpaces: 3,
        totalArea: 180,
        builtArea: 160,
        features: JSON.stringify(["piscina", "academia", "salao_festas", "portaria_24h", "elevador", "varanda"]),
        images: JSON.stringify([
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
        ]),
        mainImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
        status: "disponivel",
        featured: true,
        published: true,
        metaTitle: "Apartamento Luxuoso no Lago Norte - Casa DF",
        metaDescription: "Apartamento de alto padrão com vista para o lago no Lago Norte.",
        slug: "apartamento-luxuoso-lago-norte",
        createdBy: 1,
      },
    ]).onDuplicateKeyUpdate({ set: { title: schema.properties.title } });
    console.log("✅ 6 imóveis criados\n");

    // Seed de Reviews
    console.log("⭐ Inserindo avaliações...");
    await db.insert(schema.reviews).values([
      {
        clientName: "Maria Silva",
        clientRole: "Compradora",
        rating: 5,
        title: "Excelente atendimento!",
        content: "A Casa DF me ajudou a encontrar o apartamento perfeito no Lago Sul. O atendimento foi impecável do início ao fim. Recomendo!",
        approved: true,
        featured: true,
        displayOrder: 1,
      },
      {
        clientName: "João Santos",
        clientRole: "Investidor",
        rating: 5,
        title: "Profissionais competentes",
        content: "Comprei 3 imóveis através da Casa DF para investimento. A equipe é muito profissional e conhece bem o mercado de Brasília.",
        approved: true,
        featured: true,
        displayOrder: 2,
      },
      {
        clientName: "Ana Paula Costa",
        clientRole: "Locatária",
        rating: 5,
        title: "Processo rápido e transparente",
        content: "Aluguei minha casa através da Casa DF. O processo foi muito rápido e transparente. Adorei o atendimento personalizado!",
        approved: true,
        featured: true,
        displayOrder: 3,
      },
    ]).onDuplicateKeyUpdate({ set: { clientName: schema.reviews.clientName } });
    console.log("✅ 3 avaliações criadas\n");

    console.log("🎉 Seed concluído com sucesso!");
    console.log("\n📊 Resumo:");
    console.log("   - 3 categorias de blog");
    console.log("   - 3 posts de blog");
    console.log("   - 6 imóveis");
    console.log("   - 3 avaliações");
    console.log("\n✅ Banco de dados populado!\n");

  } catch (error) {
    console.error("❌ Erro ao executar seed:", error);
    throw error;
  } finally {
    await connection.end();
  }
}

seed()
  .then(() => {
    console.log("✅ Processo finalizado");
    process.exit(0);
  })
  .catch((error) => {
    console.error("❌ Erro fatal:", error);
    process.exit(1);
  });
