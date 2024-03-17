import { CalculatedCommandInformationDto } from "./calculated-command-information.dto";
import { ManualCommandInformationDto } from "./manual-command-information.dto";

export interface CommandDto {
  storeId: bigint,
  commandId: bigint,
  manualCommandInformation: ManualCommandInformationDto,
  calculatedCommandInformation: CalculatedCommandInformationDto
}

export interface AddCommandDto {

}

export interface DeleteCommandDto {

}

export interface UpdateCommandDto {

}

export interface CommandFinishDto {

}

export interface CommandPaidDto {

}
