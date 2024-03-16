export class Product {
  public constructor(
    public readonly productId: bigint,
    public readonly name: string,
    public readonly photo: string,
    public readonly price: number,
    public readonly selectQuantity: number,
    public readonly isAvail: boolean
  ) {}
}
