/// <reference types="next" />
/// <reference types="next/types/global" />

declare interface NodeModule {
  hot: {
    accept(path?: string, fn: () => void, callback?: () => void): void;
  };
}
