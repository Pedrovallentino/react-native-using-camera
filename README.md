Aplicativo desenvolvido com React Native + Expo, utilizando expo-camera e expo-location.

Permite capturar fotos, salvar a localização e visualizar as imagens em uma galeria organizada — tudo isso dentro de uma arquitetura MVVM simples e funcional.

🧭 Sumário

Visão Geral

Estrutura do Projeto

Funcionalidades

Telas do App

Arquitetura MVVM

Tecnologias Utilizadas

Fluxo da Aplicação

Como Executar

Melhorias Futuras

Licença

📌 Visão Geral

Este projeto demonstra como integrar os seguintes componentes:

📷 Câmera do dispositivo (frontal e traseira)

🛰️ Geolocalização (latitude e longitude)

🗂️ Galeria interna

🧱 Arquitetura MVVM

🪶 Componentização

Tudo usando as APIs modernas do Expo (CameraView).

📂 Estrutura do Projeto

A estrutura segue a separação por camadas da arquitetura MVVM (Model-View-ViewModel):

📦 projeto-camera
 ┣ 📂 src
 ┃ ┣ 📂 model
 ┃ ┃ ┣ 📂 entities
 ┃ ┃ ┃ ┗ 📄 MyPhoto.ts
 ┃ ┃ ┗ 📂 services
 ┃ ┃ ┃ ┗ 📄 photoService.ts
 ┃ ┣ 📂 view
 ┃ ┃ ┣ 📄 CameraScreen.tsx
 ┃ ┃ ┗ 📄 GalleryScreen.tsx
 ┃ ┗ 📂 viewModel
 ┃ ┃ ┗ 📄 useCameraViewModel.ts
 ┣ 📄 App.tsx
 ┗ 📄 README.md


⚙️ Funcionalidades

Câmera

Alternar entre câmera frontal e traseira

Capturar foto com alta qualidade

Exibir preview ao vivo

Geolocalização

Solicita permissão automaticamente

Armazena latitude e longitude da foto

Exibe os dados na galeria

Galeria

Lista todas as fotos com miniaturas

Ordenadas por data

Exibe coordenadas

Arquitetura MVVM

Separação clara entre UI, lógica e dados

Fácil manutenção e expansão

📸 Telas do App

1️⃣ Tela da Câmera

Responsável pela captura e controle da câmera.

Exibe:

Componente CameraView

Botões:

Flip (alternar câmera)

Capturar

Ver Fotos

<CameraView 
  ref={cameraRef} 
  style={styles.camera} 
  facing={facing}
/>


2️⃣ Tela da Galeria

Responsável pela listagem e visualização dos metadados das fotos salvas.

Lista:

Miniatura (Image)

Data da captura

Latitude e longitude

<FlatList
  data={photos}
  renderItem={({ item }) => (
    <Image source={{ uri: item.uri }} style={styles.thumb} />
  )}
/>


🧠 Arquitetura MVVM

A aplicação segue o padrão Model-View-ViewModel, que promove a separação de responsabilidades:

View (Screens): Responsável apenas pela renderização (UI). Chama métodos do ViewModel em resposta a eventos do usuário.

ViewModel (useCameraViewModel): Contém a lógica de binding e de state. Orquestra a interação entre a View e o Model.

Model (Services e Entities): Contém a lógica de negócio, a gestão de dados (persistência, APIs externas) e as entidades de dados.

Exemplo de Ação no ViewModel:

// Lógica que a View chama para mudar o estado da câmera
const handleFlip = () => {
    setFacing((c) => (c === "back" ? "front" : "back"));
}


Entidade MyPhoto (Model):

export type MyPhoto = {
  uri: string;
  latitude: number | null;
  longitude: number | null;
  timestamp: number;
};


🛠️ Tecnologias Utilizadas

Tecnologia

Finalidade

React Native

Interface mobile

Expo

Ambiente e execução

expo-camera

Captura de imagens

expo-location

Geolocalização

TypeScript

Tipagem estática

MVVM

Arquitetura

🗺️ Fluxo da Aplicação

O fluxo de permissões e navegação garante que a câmera e a localização estejam prontas antes de iniciar a captura:

flowchart TD
  A[Início] --> B{Permissão da câmera?}
  B -- Não --> C[Pedir permissão Câmera]
  B -- Sim --> D{Permissão de localização?}
  D -- Não --> E[Pedir permissão Localização]
  D -- Sim --> F[Tela da Câmera]
  C --> F
  E --> F
  F --> G[Capturar Foto]
  G --> H[Salvar Foto + Localização]
  H --> I[Tela da Galeria]


🚀 Como Executar

Para iniciar o projeto:

Instale as dependências:

npm install


Inicie o app com Expo:

npx expo start


Abra no dispositivo: Use o aplicativo Expo Go no seu celular (Android ou iOS) e escaneie o código QR.

📌 Melhorias Futuras

Adicionar AsyncStorage para persistência de dados de forma mais robusta.

Implementar zonas de zoom da câmera.

Funcionalidade de Compartilhamento de fotos.

Geração de Thumbnails otimizados para galeria.

Configuração de Upload para um backend.

📝 Licença

Este projeto é livre para uso educacional.
