#!/bin/bash

# Script para criar 50 postagens fake em docs/en/<categoria>/_posts/

# Arrays de categorias, títulos e descrições
CATEGORIES=("introduction" "retrocomputer" "web-development" "hardware" "software-architecture" "iot" "design" "programming")

TITLES=(
  "Getting Started with Z80 Assembly"
  "Building IoT Projects with ESP32"
  "Modern Web Development Best Practices"
  "Retrocomputing Nostalgia and History"
  "Microservices Architecture Deep Dive"
  "Arduino Projects for Beginners"
  "CSS Grid Layout Mastery"
  "Understanding Design Patterns"
  "Embedded Systems Programming"
  "React Hooks Advanced Techniques"
  "Database Optimization Strategies"
  "Docker Container Orchestration"
  "Machine Learning Basics"
  "API Design Principles"
  "Testing Strategies for Large Projects"
  "Performance Optimization Tips"
  "Cloud Computing Fundamentals"
  "Security Best Practices"
  "DevOps Pipeline Setup"
  "Mobile App Development"
  "Python Data Science"
  "JavaScript ES6+ Features"
  "Linux System Administration"
  "Network Programming Basics"
  "Game Development Fundamentals"
  "Machine Vision with OpenCV"
  "Blockchain Technology Explained"
  "GraphQL vs REST APIs"
  "Kubernetes Deployment Guide"
  "TypeScript for Large Projects"
  "Vue.js Framework Deep Dive"
  "PostgreSQL Advanced Queries"
  "MongoDB Document Design"
  "Redis Caching Strategies"
  "Message Queues with RabbitMQ"
  "Service Mesh Architecture"
  "Monitoring and Logging Systems"
  "Infrastructure as Code with Terraform"
  "Continuous Integration Setup"
  "Load Balancing Techniques"
  "Database Replication Strategies"
  "API Rate Limiting"
  "Caching Layer Design"
  "Search Engine Optimization"
  "Web Accessibility Standards"
  "Progressive Web Apps"
  "WebAssembly Fundamentals"
  "Low Latency Systems"
  "Distributed Systems Design"
  "Cloud Native Development"
)

TAGS=("programming|tutorial|beginner" "advanced|architecture|design" "hardware|iot|electronics" "web|frontend|backend" "database|sql|performance" "devops|docker|kubernetes" "security|encryption|authentication" "testing|qa|ci-cd" "design-patterns|refactoring|clean-code" "retrocomputing|assembly|8bit")

# Função para gerar data aleatória
generate_date() {
  local year=2026
  local month=$((RANDOM % 12 + 1))
  local day=$((RANDOM % 28 + 1))
  printf "%04d-%02d-%02d" $year $month $day
}

# Função para gerar tags aleatórias
get_random_tags() {
  local tag_set=${TAGS[$((RANDOM % ${#TAGS[@]}))]}
  echo "$tag_set" | tr '|' '\n' | head -3 | paste -sd ',' -
}

# Criar diretório base se não existir
mkdir -p docs/en

# Gerar 50 postagens
for i in {1..50}; do
  # Selecionar categoria e título aleatórios
  CATEGORY=${CATEGORIES[$((RANDOM % ${#CATEGORIES[@]}))]}
  TITLE=${TITLES[$((RANDOM % ${#TITLES[@]}))]}
  DATE=$(generate_date)
  SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/-$//')
  TAGS=$(get_random_tags)
  
  # Criar nome do arquivo
  FILENAME="${DATE}-${SLUG}.html"
  POST_DIR="docs/en/${CATEGORY}/_posts"
  mkdir -p "$POST_DIR"
  FILEPATH="${POST_DIR}/${FILENAME}"
  
  # Criar conteúdo
  cat > "$FILEPATH" << EOF
---
layout: post
title: "$TITLE"
excerpt: "This is an excerpt for $TITLE. Discover insights about $CATEGORY and improve your knowledge."
tags: [$TAGS]
categories: [en, $CATEGORY]
collection: posts
lang: en
date: $DATE
---
<section class="article">
  <h2 class="section-title left">{{ page.title }}</h2>
  <div class="section-content">
    <p>This is a sample article about $TITLE in the $CATEGORY category. The article explores various aspects of this fascinating topic and provides practical insights for developers and enthusiasts.</p>
    
    <h3>Introduction</h3>
    <p>$TITLE is an important concept in modern software development. Understanding its principles will help you build better applications and solve complex problems more effectively.</p>
    
    <h3>Key Concepts</h3>
    <ul>
      <li>Understanding the fundamentals of $TITLE</li>
      <li>Practical applications and use cases</li>
      <li>Best practices and patterns</li>
      <li>Common pitfalls to avoid</li>
      <li>Tools and resources for learning</li>
    </ul>
    
    <h3>Conclusion</h3>
    <p>By mastering $TITLE, you'll be better equipped to tackle challenging projects and contribute meaningfully to the tech community. Keep learning and stay curious!</p>
  </div>
</section>
EOF

  echo "Created: $FILEPATH"
done

echo "✅ Successfully created 50 sample articles!"