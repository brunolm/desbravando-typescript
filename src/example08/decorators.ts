abstract class HashAlgorithm {
  public abstract computeHash();
}

@sealed
export class SHA1CryptoServiceProvider extends HashAlgorithm {
  public computeHash() {
    return 'Sha1';
  }
}

@sealed
export class SHA256CryptoServiceProvider extends HashAlgorithm {
  public computeHash() {
    return 'Sha256';
  }
}

export class SHA2CryptoServiceProvider extends SHA1CryptoServiceProvider {
  public computeHash() {
    return 'Sha2';
  }
}

function sealed(constructor: Function) {
  console.log('seal');
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
