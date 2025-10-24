export interface Category {
  Id: string;
  Name: string;
  Order: number;
  IsSuspended: boolean;
}

export interface Profiles {
  Id: string;
  Name: string;
  Order: number;
  IsActive: boolean;
  IsSuspended: boolean;
  IsMissingModule: boolean;
  HasActivationCondition: boolean;
  ActivationConditionMet: boolean;
  Category: Category;
}
