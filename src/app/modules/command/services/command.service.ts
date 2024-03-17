import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Command } from '../models/command.model';
import { CommandDto } from '../models/dto/command.dto';
import { environment } from 'src/environments/environment';
import backEndUrl from 'src/app/utils/back-end-url';
import { StringUtil } from 'src/app/utils/string-utils';
import { ProductDto } from '../models/dto/product.dto';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  private _baseUrl: string =  environment.baseUrl;

  constructor(private _http: HttpClient) { }

  public getOneCommand(commandId: bigint, storeId: bigint): Observable<Command> {
    let replacements: { [key: string]: string } = {
      ":storeId": storeId.toString(),
      ":commandId": commandId.toString()
    };
    const url = StringUtil.stringReplacement(this._baseUrl + backEndUrl.getOneCommandEndPoint.url, replacements);

    return this._http.get<CommandDto>(url, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .pipe(
      map(dto=>this.commandMapper(dto)))
  }

  /**
   * Retourne un Command à partir d'un CommandDto
   * @param commandDto - CommandDto
   * @returns Command
   */
  private commandMapper(commandDto: CommandDto): Command {
    return new Command(
      commandDto.storeId,
      commandDto.commandId,
      commandDto.manualCommandInformation.phoneClient,
      commandDto.manualCommandInformation.slotTime,
      commandDto.calculatedCommandInformation.commandCode,
      commandDto.calculatedCommandInformation.commandPrice,
      commandDto.calculatedCommandInformation.commandPrice,
      commandDto.calculatedCommandInformation.commandPreparationTime,
      this.productMapper(commandDto.manualCommandInformation.selectProducts)
    );
  }

  /**
   * Renvoie un Product[] à partir d'un ProductDto[]
   * @param productsDto - ProductDto[]
   * @returns Product[]
   */
  private productMapper(productsDto: ProductDto[]): Product[] {
    return productsDto.map(productDto => {
      return new Product(
        productDto.productId,
        productDto.name,
        productDto.photo,
        productDto.price,
        productDto.selectQuantity,
        productDto.isAvail
        )
    })
  }
}
