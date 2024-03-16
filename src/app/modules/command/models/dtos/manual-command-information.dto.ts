import { ProductDto } from "./product.dto";

export interface ManualCommandInformationDto {
  phoneClient: string,
  selectProducts: ProductDto[],
  slotTime: Date
}
