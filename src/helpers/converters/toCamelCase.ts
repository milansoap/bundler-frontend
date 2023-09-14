type AnyObject = { [key: string]: any };

export const toCamelCase = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map((v) => toCamelCase(v));
  } else if (typeof obj === "object" && obj !== null) {
    return Object.keys(obj).reduce(
      (acc: AnyObject, key) => ({
        ...acc,
        [key.replace(/([-_][a-z])/g, (group) =>
          group.toUpperCase().replace("-", "").replace("_", "")
        )]: toCamelCase(obj[key]),
      }),
      {}
    );
  }
  return obj;
};
