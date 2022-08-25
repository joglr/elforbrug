export async function asyncHelper<T>(promise: Promise<T>) {
  try {
    return await promise;
  } catch (e) {
    console.error(e);
    return null;
  }
}
