# 🪙 Bitcoin Wallet Generator

[![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue.svg)](https://www.typescriptlang.org/)
[![Bitcoin](https://img.shields.io/badge/Bitcoin-Blockchain-orange.svg)](https://bitcoin.org/)
[![Node.js](https://img.shields.io/badge/Node.js-14.x-green.svg)](https://nodejs.org/)

## 🚀 Sobre o Projeto

O **Bitcoin Wallet Generator** é um aplicativo simples desenvolvido em TypeScript que permite a geração de uma carteira Bitcoin utilizando a biblioteca `bip32`, `bip39`, e `bitcoinjs-lib`. O projeto está configurado para rodar na rede de teste do Bitcoin (testnet) e gera um endereço, chave privada e seed de recuperação.

## 🛠️ Funcionalidades

- Geração de seed mnemonic (12 palavras)
- Derivação de chave privada e pública utilizando HD Wallet (Hierarchical Deterministic Wallet)
- Geração de endereço Bitcoin
- Configuração para rede de teste (testnet)

## 📦 Estrutura do Projeto

```
├── src
│   └── index.ts   
├── package.json  
├── tsconfig.json 
└── README.md      
```

## 🧩 Tecnologias Utilizadas

- **TypeScript** - Linguagem de programação
- **Node.js** - Ambiente de execução
- **bip32** - Biblioteca para HD Wallets
- **bip39** - Biblioteca para mnemonic phrases
- **bitcoinjs-lib** - Biblioteca para operações Bitcoin
- **tiny-secp256k1** - Implementação de ECDSA

## 🚀 Como Executar

### Pré-requisitos

- Node.js 14.x ou superior
- npm ou yarn

### Passo a Passo

1. Clone o repositório:
    ```sh
    git clone git@github.com:MatheusBezerra414/sample-btc-wallet.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd sample-btc-wallet
    ```

3. Instale as dependências:
    ```sh
    npm install
    # ou
    yarn install
    ```

4. Compile o TypeScript para JavaScript:
    ```sh
    npm run build
    # ou
    yarn build
    ```

5. Execute o aplicativo:
    ```sh
    node dist/index.js
    ```

## 📜 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir um problema ou enviar um pull request.

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas alterações (`git commit -m 'Add some AmazingFeature'`)
4. Faça o push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request