export default abstract class Animal {
  constructor(public name: string) { }
  abstract move(): void;
}