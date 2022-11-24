import { makeAutoObservable } from "mobx"

class PlateModel {

  apples = 5;
  pears = 5;

  constructor() {
      makeAutoObservable(this); // makes the whole object auto-observable
  }

}

export const plateModel = new PlateModel();
