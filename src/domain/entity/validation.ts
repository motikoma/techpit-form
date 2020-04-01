export type Validation = {
  name: string;
  description: string;
  birthday: string;
  gender: string;
  address: {
    postalcode: string;
    prefecture: string;
    town: string;
    restAddress: string;
  };
  college: {
    faculty: string;
  };
  career: {
    company: string;
    position: string;
    startAt: string;
    endAt: string;
  }[];
};

export type ValidationState = {
  isStartValidation: boolean;
  message: Validation;
};
