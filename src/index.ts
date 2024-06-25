import * as bip39 from 'bip39';
import * as bitcoin from 'bitcoinjs-lib';
import { BIP32Factory, BIP32Interface } from 'bip32';
import * as tinysecp256k1 from 'tiny-secp256k1';

// Definindo a rede
const network = bitcoin.networks.testnet;

// Derivação de carteiras HD
const path = `m/49'/1'/0'/0`;

// Cria uma fábrica BIP32 usando a implementação secp256k1
const bip32 = BIP32Factory(tinysecp256k1);

class BTCWallet {
  private mnemonic: string;
  private seed: Buffer;
  private root: BIP32Interface;
  private account: BIP32Interface;
  private node: BIP32Interface;
  private address: string;
  private privateKey: string;

  constructor() {
    this.mnemonic = bip39.generateMnemonic();
    this.seed = bip39.mnemonicToSeedSync(this.mnemonic);
    this.root = bip32.fromSeed(this.seed, network);
    this.account = this.root.derivePath(path);
    this.node = this.account.derive(0).derive(0);

    const { address } = bitcoin.payments.p2pkh({
      pubkey: this.node.publicKey,
      network: network,
    });

    this.address = address as string;
    this.privateKey = this.node.toWIF();
  }

  public getMnemonic(): string {
    return this.mnemonic;
  }

  public getAddress(): string {
    return this.address;
  }

  public getPrivateKey(): string {
    return this.privateKey;
  }
}

// Criando a carteira BTC
const wallet = new BTCWallet();

console.log("Carteira gerada");
console.log("Endereço: ", wallet.getAddress());
console.log("Chave privada:", wallet.getPrivateKey());
console.log("Seed:", wallet.getMnemonic());
