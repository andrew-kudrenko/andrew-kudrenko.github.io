import { AnyAction } from "redux";

export interface ICategory {
  id: string
  name: string
}

export interface IRegion {
  id: string
  title: string
}

export interface ICity {
  id: string
  title: string
}

export interface INewsFilter {
  title: string
  date?: Date
  region?: IRegion
  city?: ICity
  category?: ICategory
  source?: string
}

export interface INews {
  title: string
  text?: string
  image?: string
  video?: string
  source: string
  date: Date  
}

export interface IStatePartial<T> {
  data: T[]
  loading: boolean
  error: string | null
}

export interface IState {
  categories: IStatePartial<ICategory>
  regions: IStatePartial<IRegion>
  cities: IStatePartial<ICity>
  news: IStatePartial<INews>
  filters: IStatePartial<INewsFilter>
}

export interface IAction extends AnyAction {
  type: string
  payload?: any 
}