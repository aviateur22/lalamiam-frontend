import { Product } from "./product.model";

export class Command {
  public constructor(
    public readonly storeId: bigint,
    public readonly commandId: bigint,
    public readonly phoneClient: string,
    public readonly slotTime: Date,
    public readonly commandCode: string,
    public readonly commandPrice: number,
    public readonly productQuantity: number,
    public readonly commandPreparationTime: number,
    public readonly products: Product[]
  ) {}
}
