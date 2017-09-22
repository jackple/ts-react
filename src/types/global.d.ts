declare var require: {
  <T>(path: string): T
  (paths: string[], callback: (...modules: any[]) => void): void
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void, chunkName?: string) => void
}

declare var process: {
  env: {
    NODE_ENV: string,
    APP_ENV: string,
    ENV_CONFIG: any
  }
}

declare interface ObjectConstructor {
  assign(target: any, ...sources: any[]): any
}

// for style loader
// declare module '*.css' {
//   const styles: any;
//   export = styles;
// }
