export const logger = (content: unknown) => {
  if (__DEV__) {
    console.log(content);
  }
};
