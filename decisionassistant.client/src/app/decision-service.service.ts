import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecisionService {

  public static decision_point = '';
  public static decision_options: Array<string> = new Array<string>;
  public static decision_points: Array<string> = new Array<string>;
  public static decision_points_assessments: Array<[string, string, number]> = new Array<[string, string, number]>;

  constructor() { }
}
