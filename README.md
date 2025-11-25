# 📸 Aplicativo de Câmera com Localização — React Native + Expo

Aplicativo desenvolvido com **React Native + Expo**, utilizando **expo-camera** e **expo-location**.

Ele permite:

- Capturar fotos  
- Salvar automaticamente a localização  
- Exibir tudo em uma galeria organizada  
- Utilizar arquitetura **MVVM** para manter o código limpo e escalável  

---

# 🧭 Sumário

- [Visão Geral](#-visão-geral)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Funcionalidades](#️-funcionalidades)
- [Telas do App](#-telas-do-app)
- [Arquitetura MVVM](#-arquitetura-mvvm)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Fluxo da Aplicação](#️-fluxo-da-aplicação)
- [Como Executar](#-como-executar)
- [Melhorias Futuras](#-melhorias-futuras)
- [Licença](#-licença)

---

# 📌 Visão Geral

Este projeto demonstra como integrar:

- 📷 **Câmera do dispositivo** (frontal e traseira)  
- 🛰️ **Geolocalização** (latitude e longitude)  
- 🗂️ **Galeria interna com organização**  
- 🧱 **Arquitetura MVVM**  
- 🪶 **Componentização bem definida**  

Tudo utilizando APIs modernas do **Expo**, como o novo `CameraView`.

---

# 📂 Estrutura do Projeto

A organização segue o padrão MVVM, separando bem interface, lógica e dados:

📦 projeto-camera

├── 📂 src

│ ├── 📂 model

│ │ ├── 📂 entities

│ │ │ └── 📄 MyPhoto.ts

│ │ └── 📂 services

│ │ └── 📄 photoService.ts

│ │

│ ├── 📂 view

│ │ ├── 📄 CameraScreen.tsx

│ │ └── 📄 GalleryScreen.tsx

│ │

│ └── 📂 viewModel

│ └── 📄 useCameraViewModel.ts

│

├── 📄 App.tsx
└── 📄 README.md

# ⚙️ Funcionalidades

## 📷 Câmera
- Alternar entre câmera **frontal** e **traseira**
- Capturar fotos com **alta qualidade**
- Preview em tempo real usando `CameraView`

## 🛰️ Geolocalização
- Solicitação automática de permissão
- Salva **latitude** e **longitude**
- Exibição dos dados na galeria

## 🗂️ Galeria
- Lista todas as fotos tiradas
- Miniaturas exibidas com `Image`
- Ordenação por data
- Coordenadas exibidas ao usuário

## 🧱 Arquitetura MVVM
- Separação clara entre:
  - **View** (UI)
  - **ViewModel** (lógica e estados)
  - **Model** (dados e serviços)

---

# 📸 Telas do App

## 1️⃣ Tela da Câmera
Responsável por toda a experiência de captura.

Exibe:

- Componente `CameraView`
- Botões de ação:
  - 🔄 **Flip** (alternar câmera)
  - 📸 **Capturar foto**
  - 🖼️ **Ver fotos**

---

## 2️⃣ Tela da Galeria
Exibe todas as fotos salvas com seus metadados.

### Lista contém:

- Miniatura (`Image`)
- Data/Horário
- Latitude e Longitude

# 🚀Como Executar
## 1️⃣ Instale as dependências
npm install

## 2️⃣ Inicie o app com Expo
npx expo start

## 3️⃣ Abra no celular
Use o app Expo Go (Android ou iOS) e escaneie o QR Code.

# 📝 Licença
Este projeto é livre para uso educacional.
