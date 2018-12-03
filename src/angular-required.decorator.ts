export const Required = (): PropertyDecorator => {
  return (target: Object, propertyKey: any): void => {
    Object.defineProperty(target, propertyKey, {
      get: () => {
        throw new Error(`Property ${propertyKey} is required`);
      },
      set: (value) => {
        Object.defineProperty(target, propertyKey, {
          value,
          writable: true,
          configurable: true,
        });
      },
    });
  };
};
