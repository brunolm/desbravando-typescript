interface OAuthOptions {
  realmId: number;
  clientId: number;
  clientSecret: string;
}

interface CliOptions extends OAuthOptions {
  timeout?: number;
  startDate?: Date;
}

export function test<T extends OAuthOptions>(options: T) {
  return options.clientId;
}

type NameOrNameArray = string | string[];

export function createName(name: NameOrNameArray) {
    if (typeof name === 'string') {
        return name;
    }
    else {
        return name.join(' ');
    }
}
