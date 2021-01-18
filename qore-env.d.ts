// [WARNING] This file is generated by running `$ qore codegen` on your root project, please do not edit

/// <reference types="@feedloop/qore-client" />
import { QoreSchema } from "@feedloop/qore-client";

declare module "@feedloop/qore-client" {
  type MemberTableRow = {
    id: string;
    email: string;
    role: { id: string; displayField: string };
    brands1: { nodes: Brands1TableRow[] };
    password: string;
    name: string;
  };

  type BrandsTableRow = {
    id: string;
    name: string;
    description: string;
    stores: { nodes: StoresTableRow[] };
    user: { nodes: UserTableRow[] };
    experiences: { nodes: ExperiencesTableRow[] };
  };

  type StoresTableRow = {
    id: string;
    name: string;
    description: string;
    brand: BrandTableRow;
    responses1: { nodes: Responses1TableRow[] };
  };

  type ExperiencesTableRow = {
    id: string;
    name: string;
    description: string;
    brand: BrandTableRow;
  };

  type FormsTableRow = {
    id: string;
    name: string;
    description: string;
    questions: { nodes: QuestionsTableRow[] };
    responses: { nodes: ResponsesTableRow[] };
  };

  type QuestionsTableRow = {
    id: string;
    name: string;
    description: string;
    form: FormTableRow;
  };

  type ResponsesTableRow = {
    id: string;
    name: string;
    description: string;
    form: FormTableRow;
    store: StoreTableRow;
    experienceResponses1: { nodes: ExperienceResponses1TableRow[] };
  };

  type ExperienceResponsesTableRow = {
    id: string;
    name: string;
    description: string;
    score: number;
    response: ResponseTableRow;
  };

  type CustomersTableRow = {
    id: string;
    name: string;
    description: string;
  };

  type BrandsDefaultViewViewRow = {
    read: {
      id: string;
      name: string;
      description: string;
      user: { nodes: UserTableRow[] };
    };
    write: {
      name: string;
      description: string;
      user: string[];
    };
    params: {};
    actions: {};
  };

  type MemberDefaultViewViewRow = {
    read: {
      id: string;
      email: string;
      role: { id: string; displayField: string };
      password: string;
      name: string;
    };
    write: {
      email: string;
      password: string;
      name: string;
    };
    params: {};
    actions: {};
  };

  type StoresDefaultViewViewRow = {
    read: {
      id: string;
      name: string;
      description: string;
      brand: BrandTableRow;
    };
    write: {
      name: string;
      description: string;
      brand: string[];
    };
    params: {};
    actions: {};
  };

  type ExperiencesDefaultViewViewRow = {
    read: {
      id: string;
      name: string;
      description: string;
      brand: BrandTableRow;
    };
    write: {
      name: string;
      description: string;
      brand: string[];
    };
    params: {};
    actions: {};
  };

  type FormsDefaultViewViewRow = {
    read: {
      id: string;
      name: string;
      description: string;
    };
    write: {
      name: string;
      description: string;
    };
    params: {};
    actions: {};
  };

  type QuestionsDefaultViewViewRow = {
    read: {
      id: string;
      name: string;
      description: string;
      form: FormTableRow;
    };
    write: {
      name: string;
      description: string;
      form: string[];
    };
    params: {};
    actions: {};
  };

  type ResponsesDefaultViewViewRow = {
    read: {
      id: string;
      name: string;
      description: string;
      form: FormTableRow;
      store: StoreTableRow;
    };
    write: {
      name: string;
      description: string;
      form: string[];
      store: string[];
    };
    params: {};
    actions: {};
  };

  type ExperienceResponsesDefaultViewViewRow = {
    read: {
      id: string;
      name: string;
      description: string;
      score: number;
      response: ResponseTableRow;
    };
    write: {
      name: string;
      description: string;
      score: number;
      response: string[];
    };
    params: {};
    actions: {};
  };

  type BrandsPerUserViewRow = {
    read: {
      id: string;
      name: string;
      description: string;
      stores: { nodes: StoresTableRow[] };
      experiences: { nodes: ExperiencesTableRow[] };
    };
    write: {
      name: string;
      description: string;
      stores: string[];
      experiences: string[];
    };
    params: {
      user: string;
    };
    actions: {};
  };

  type AllCustomersViewRow = {
    read: {
      id: string;
      name: string;
      description: string;
    };
    write: {
      name: string;
      description: string;
    };
    params: {};
    actions: {};
  };

  type AllStoresWithParamViewRow = {
    read: {
      id: string;
      name: string;
      description: string;
      brand: BrandTableRow;
    };
    write: {
      name: string;
      description: string;
      brand: string[];
    };
    params: {
      brand: string;
    };
    actions: {};
  };

  interface ProjectSchema extends QoreSchema {
    brandsDefaultView: BrandsDefaultViewViewRow;
    memberDefaultView: MemberDefaultViewViewRow;
    storesDefaultView: StoresDefaultViewViewRow;
    experiencesDefaultView: ExperiencesDefaultViewViewRow;
    formsDefaultView: FormsDefaultViewViewRow;
    questionsDefaultView: QuestionsDefaultViewViewRow;
    responsesDefaultView: ResponsesDefaultViewViewRow;
    experienceResponsesDefaultView: ExperienceResponsesDefaultViewViewRow;
    brandsPerUser: BrandsPerUserViewRow;
    allCustomers: AllCustomersViewRow;
    allStoresWithParam: AllStoresWithParamViewRow;
  }
}
