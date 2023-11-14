import { IFilter } from 'modules/SelectFilter/SelectFilter.types';

export interface IFiltersState {
  currentFilter: string;
  filtersTask: IFilter[];
}
