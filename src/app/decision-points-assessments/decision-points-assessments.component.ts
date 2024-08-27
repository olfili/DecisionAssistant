import { CellEditingStoppedEvent, ColDef, GridReadyEvent, ModuleRegistry } from '@ag-grid-community/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { DecisionService } from '../decision-service.service';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-material.css';

interface IRow {
  point?: string;
  [key: string]: any
}

@Component({
  selector: 'app-decision-points-assessments',
  templateUrl: './decision-points-assessments.component.html',
  styleUrl: './decision-points-assessments.component.css'
})
export class DecisionPointsAssessmentsComponent implements OnInit {

  decision_point: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    ModuleRegistry.registerModules([ClientSideRowModelModule]);
    this.decision_point = DecisionService.decision_point;
    DecisionService.decision_options.forEach(option => {
      this.colDefs = [...this.colDefs, {field: option, headerName: option, cellEditor: "agNumberCellEditor"}];
    });
  }

  rowData: IRow[] = [];
  colDefs: ColDef[] = [
    { field: "point", headerName: "", editable: false },
  ];
  defaultColDef: ColDef = {
    flex: 1,
    editable: true,
    sortable: false,    
  };

  onCellEditingStopped(params: CellEditingStoppedEvent) {
    if (params.value !== null && params.value !== undefined && params.value !== '')
    {
      let rowIndex = params.rowIndex ?? 0;
      let point = DecisionService.decision_points[rowIndex];
      let option = params.column.getColId();
      let assessmentIndex = DecisionService.decision_points_assessments.findIndex((a) => a[0] === option && a[1] == point);
      if (assessmentIndex >= 0) {
        DecisionService.decision_points_assessments.splice(assessmentIndex, 1);
      }
      DecisionService.decision_points_assessments.push([option, point, params.value]);
    }
    console.log(DecisionService.decision_points_assessments);
  }
  
  onGridReady(params: GridReadyEvent<IRow>) {  
    DecisionService.decision_points.forEach(point => {
      let assessment = DecisionService.decision_points_assessments.filter(a => a[1] === point);
      let row: IRow = {};
      row.point = point;
      assessment.forEach(element => {
        row[element[0]] = element[2];
      });

      this.rowData = [...this.rowData, row];
      
    });
  }

  submit() {
    this.router.navigate(['/final_decision']);
  }

  cantGoForward(): boolean {
    return DecisionService.decision_points_assessments.length != 
      (DecisionService.decision_options.length * DecisionService.decision_points.length);
  }
}